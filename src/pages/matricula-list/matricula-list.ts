import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { MatriculaProvider } from '../../providers/providers';
import { Global } from '../../providers/providers';
import { Aluno } from '../../models/aluno';
import { MatriculaAluno } from '../../models/matriculaAluno';

@IonicPage()
@Component({
  selector: 'page-matricula-list',
  templateUrl: 'matricula-list.html'
})
export class MatriculaListPage {
  currentListaMatricula;
  currentAluno: Aluno;
  faseMatricula: string;
	atualizarMatricula : boolean = true;
	hasPreMatricula : boolean = false;

  constructor(public navCtrl: NavController,
    public matriculaProvider: MatriculaProvider,
    public global: Global) {
//    public modalCtrl: ModalController) {
  }

  /**
   * The view loaded and is about to enter, let's query our items for the list
   */
  ionViewWillEnter() {
		if (this.atualizarMatricula) {
			this.matriculaProvider.pesquisarAluno(this.global.getAluno().matricula)
	        .subscribe(listaMatricula => {
	      this.currentListaMatricula = listaMatricula;
				this.matriculaProvider.listaMatriculaAluno = this.currentListaMatricula;
	    });
			this.currentAluno = this.global.getAluno();
			this.faseMatricula = this.global.getFaseMatricula();
			this.atualizarMatricula = false;
			this.hasPreMatricula = false;
			for (let matricula of this.currentListaMatricula) {
		  	if (matricula.status === "PreMatricula") {
					this.hasPreMatricula = true;
				}
			}
			console.log(this.hasPreMatricula);
		}
  }

  /**
   * Prompt the user to add a new item. This shows our MatriculaCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
/*
  addItem() {
    let addModal = this.modalCtrl.create('MatriculaCreatePage');
    addModal.onDidDismiss(matriculaAluno => {
      if (matriculaAluno) {
        this.matriculaProvider.add(matriculaAluno);
      }
    })
    addModal.present();
  }
*/

  /**
   * Delete an item from the list of items.
   */
  deleteItem(matricula) {
    this.matriculaProvider.delete(matricula);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(matricula: MatriculaAluno) {
    this.navCtrl.push('MatriculaDetailPage', {
      matricula: matricula
    });
  }

}
