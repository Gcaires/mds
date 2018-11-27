import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { TurmaProvider } from '../../providers/providers';
import { MatriculaProvider } from '../../providers/providers';
import { Global } from '../../providers/providers';
import { Disciplina } from '../../models/disciplina';
import { Turma } from '../../models/turma';
import { Matricula } from '../../models/matricula';

export interface AlertMetadata {
  title: string;
  description: string;
  descriptionDetail: string;
  inputName: string;
  okButton: string;
  cancelButton: string;
}

@IonicPage()
@Component({
  selector: 'page-turma-list',
  templateUrl: 'turma-list.html'
})
export class TurmaListPage {
  alertaConfirmarTurma: AlertMetadata;
  alertaAjustarTurma: AlertMetadata;
  disciplina: Disciplina;
  currentListaTurma: Turma[] = [];
  faseMatricula: string;
  perfil: string;
  alunoDefinido: boolean = false;

  constructor(public navCtrl: NavController,
    public turmaProvider: TurmaProvider,
    public matriculaProvider: MatriculaProvider,
    navParams: NavParams,
    translate: TranslateService,
    private alertCtrl: AlertController,
    public global: Global) {
//    public modalCtrl: ModalController) {

    translate.get(["ADICIONAR_TURMA_TITLE",
        "ADICIONAR_TURMA_DESCRIPTION",
        "ADICIONAR_TURMA_INPUTNAME",
        "AJUSTAR_TURMA_DESCRIPTION",
        "AJUSTAR_TURMA_DESCRIPTION_DETAIL",
        "AJUSTAR_TURMA_TITLE",
        "CANCEL_BUTTON",
        "CONFIRM_BUTTON"
      ]).subscribe(
        (values) => {
          this.alertaConfirmarTurma = {
            title: values.ADICIONAR_TURMA_TITLE,
            description: values.ADICIONAR_TURMA_DESCRIPTION,
            descriptionDetail: '',
            inputName: values.ADICIONAR_TURMA_INPUTNAME,
            okButton: values.CONFIRM_BUTTON,
            cancelButton: values.CANCEL_BUTTON
          };
          this.alertaAjustarTurma = {
            title: values.AJUSTAR_TURMA_TITLE,
            description: values.AJUSTAR_TURMA_DESCRIPTION,
            descriptionDetail: values.AJUSTAR_TURMA_DESCRIPTION_DETAIL,
            inputName: '',
            okButton: values.CONFIRM_BUTTON,
            cancelButton: values.CANCEL_BUTTON
          };
        });

    this.disciplina = navParams.get('disciplina');
    this.currentListaTurma = this.turmaProvider.pesquisar({ disciplina: this.disciplina.codigo });
  }

  /**
   * The view loaded and is about to enter, let's query our items for the list
   */
  ionViewWillEnter() {
    if(this.global.getAluno()) {
      this.alunoDefinido = true;
    }
    else
      this.alunoDefinido = false;
    this.perfil = this.global.getPerfil();
    this.faseMatricula = this.global.getFaseMatricula();
  }

  /**
   * Inserir Matricula
   */
  inserirMatricula(turma: Turma, status: string, prioridade?: number) {
    var matricula: Matricula = {
      turma : turma,
      aluno: this.global.getAluno()
    };

    if(status === 'Matriculado') {
      matricula.status = status;
    }
    if(typeof prioridade !== 'undefined') {
      matricula.prioridade = prioridade;
    }
    this.matriculaProvider.inserir(matricula);
  }

  /**
   * Confirmar pedido de matrícula em turma.
   */
  confirmarPedidoMatricula(turma: Turma) {
    let prompt = this.alertCtrl.create({
      title: this.alertaConfirmarTurma.title,
      message: this.alertaConfirmarTurma.description,
      inputs: [
        {
          name: 'prioridade',
          placeholder: this.alertaConfirmarTurma.inputName
        },
      ],
      buttons: [
        {
          text: this.alertaConfirmarTurma.cancelButton,
//            handler: data => {
//              alert('Cancelado');
//            }
        },
        {
          text: this.alertaConfirmarTurma.okButton,
          handler: data => {
            this.inserirMatricula(turma,'Pedido',parseInt(data.prioridade));
          }
        }
      ]
    });
    prompt.present();
  }

  /**
   * ajustar matrícula em turma.
   */
  ajustarMatricula(turma: Turma) {
    if (this.global.getPerfil() === 'Aluno') {
      return;
    } else
    {
      var message = this.alertaAjustarTurma.description;
      if((turma.numeroVagas-turma.numeroMatriculas) < 0) {
        message += '/n'+this.alertaAjustarTurma.descriptionDetail;
      }
      let prompt = this.alertCtrl.create({
        title: this.alertaAjustarTurma.title,
        message: message,
        buttons: [
          {
            text: this.alertaAjustarTurma.cancelButton,
          },
          {
            text: this.alertaAjustarTurma.okButton,
            handler: () => {
              this.inserirMatricula(turma,'Matriculado');
            }
          }
        ]
      });
      prompt.present();
    }
  }

}
