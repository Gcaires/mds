import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Global } from '../../providers/providers';
import { TabAluno } from '../pages';
import { TabMatricula } from '../pages';
import { TabTurma } from '../pages';
import { TabHistorico } from '../pages';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabs: any[] = [];

  constructor(public navCtrl: NavController, public translateService: TranslateService, public global: Global) {
    if(this.global.getPerfil()=='Coordenador') {
      translateService.get(['TABALUNO_TITLE']).subscribe(values => {
        this.tabs.push( {title : values['TABALUNO_TITLE'], root: TabAluno, icon: "person" });
      });
    }

    translateService.get(['TABMATRICULA_TITLE', 'TABTURMA_TITLE', 'TABHISTORICO_TITLE']).subscribe(values => {
      this.tabs.push( {title : values['TABMATRICULA_TITLE'], root: TabMatricula, icon: "book" });
      this.tabs.push( {title : values['TABTURMA_TITLE'], root: TabTurma, icon: "search" });
      this.tabs.push( {title : values['TABHISTORICO_TITLE'], root: TabHistorico, icon: "calendar" });
    });

  }
}
