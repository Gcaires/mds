import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { HistoricoListPage } from './historico-list';

@NgModule({
  declarations: [
    HistoricoListPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricoListPage),
    TranslateModule.forChild()
  ],
  exports: [
    HistoricoListPage
  ]
})
export class HistoricoListPageModule { }
