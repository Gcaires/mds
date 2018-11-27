import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { Disciplina } from '../../models/disciplina';
import { DisciplinaProvider } from '../../providers/providers';
import { MatriculaProvider } from '../../providers/providers';
import { Global } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-turma-search',
  templateUrl: 'turma-search.html'
})
export class TurmaSearchPage {

  currentListaDisciplina: Disciplina[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public disciplinaProvider: DisciplinaProvider,
    public matriculaProvider: MatriculaProvider,
    public global: Global) {
  }


  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    this.currentListaDisciplina = [];
    if (!val || !val.trim()) {
      return;
    }
/*
    for (var disciplina of this.disciplinaProvider.query()) {
      if ((disciplina.nome.search(val.toLocaleUpperCase()) > -1)||(disciplina.codigo.toString().search(val) > -1)) {
        this.currentListaDisciplina.push(disciplina);
      }
    }
*/
    this.currentListaDisciplina = this.disciplinaProvider.pesquisar({
      codigo: val,
      nome: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(disciplina: Disciplina) {
    this.navCtrl.push('TurmaListPage', {
      disciplina: disciplina,
    });
  }

}
