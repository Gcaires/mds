import { Component } from '@angular/core';
//import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { IonicPage, NavController } from 'ionic-angular';

//import { Item } from '../../models/item';
//import { Items } from '../../providers/providers';
import { MatriculaHistorico } from '../../models/matriculaHistorico';
import { MatriculaProvider } from '../../providers/providers';
import { Aluno } from '../../models/aluno';
import { Global } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-historico-list',
  templateUrl: 'historico-list.html'
})
export class HistoricoListPage {
	currentListaHistorico;
  currentAluno: Aluno;

  constructor(public navCtrl: NavController,
    public matriculaProvider: MatriculaProvider,
    public global: Global) {
//    public modalCtrl: ModalController) {
  }

  /**
   * The view loaded and is about to enter, let's query our items for the list
   */
  ionViewWillEnter() {
    this.matriculaProvider.pesquisarAlunoHistorico(this.global.getAluno().matricula).subscribe (listaHistorico => {
      this.currentListaHistorico = listaHistorico;
    });
    this.currentAluno = this.global.getAluno();
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(matriculaHistorico: MatriculaHistorico) {
    this.navCtrl.push('HistoricoDetailPage', {
      matriculaHistorico: matriculaHistorico
    });
  }
}
