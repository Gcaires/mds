import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MatriculaAluno } from '../../models/matriculaAluno';

@IonicPage()
@Component({
  selector: 'page-historico-detail',
  templateUrl: 'historico-detail.html'
})
export class HistoricoDetailPage {
  matriculaAluno: MatriculaAluno;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.matriculaAluno = navParams.get('matriculaAluno');
  }

  /**
   * ALterar o Status da matrícula na turma.
   */
  alterarStatus(status: string) {
    this.matriculaAluno.status = status;
    this.navCtrl.pop();
  }


}
