import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { Aluno } from '../../models/aluno';
import { AlunoProvider } from '../../providers/providers';
import { Global } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-aluno-search',
  templateUrl: 'aluno-search.html'
})
export class AlunoSearchPage {

  currentListaAluno: Aluno[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public alunoProvider: AlunoProvider,
    public global: Global) {
  }


  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    this.currentListaAluno = [];
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
    this.currentListaAluno = this.alunoProvider.pesquisar({
      matricula: val,
      nome: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(aluno: Aluno) {
//    this.navCtrl.push('TurmaListPage', {
//      disciplina: disciplina,
//    });
    this.global.setAluno(aluno);
    this.navCtrl.parent.select(1);
//    this.navCtrl.push('MatriculaListPage');

  }

}
