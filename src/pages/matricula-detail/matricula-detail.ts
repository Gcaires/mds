import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MatriculaAluno } from '../../models/matriculaAluno';
import { Global } from '../../providers/providers';
import { MatriculaProvider } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-matricula-detail',
  templateUrl: 'matricula-detail.html'
})
export class MatriculaDetailPage {
  matricula: MatriculaAluno;
  perfil: string;
  faseMatricula: string;

  constructor(public navCtrl: NavController,
    navParams: NavParams,
		matriculaProvider: MatriculaProvider,
    public global: Global) {

    this.matricula = navParams.get('matricula');
    this.perfil = global.getPerfil();
    this.faseMatricula = global.getFaseMatricula();
  }

  /**
   * Alterar o Status da matrícula na turma.
   */
  alterarStatus(status: string) {
		this.matriculaProvider.updateStatus(this.matricula, status)
    this.navCtrl.pop();
  }

  /**
   * Retirar matrícula (Coordenador).
   */
  retirarMatricula() {
    this.matricula.status = 'Retirado-Coordenador';
    this.navCtrl.pop();
  }

	confirmarMatricula() {
		this.matriculaProvider.confirmarMatricula().subscribe(data => {
			this.matriculaProvider.pesquisarAluno(this.currentAluno.matricula.subscribe(listaMatricula => {
				this.currentListaMatricula = listaMatricula;
				this.matriculaProvider.listaMatriculaAluno = this;currentListaMatricula;
			}));

		})
    for(let matricula of this.currentListaMatricula) {
      if(!matricula.status)
        matricula.status = 'Pedido';
      else if (matricula.status === 'Cancelado') {
        this.deleteItem(matricula);
      }
    }
  }

}
