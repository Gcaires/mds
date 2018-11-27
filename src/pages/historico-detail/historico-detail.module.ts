import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { HistoricoDetailPage } from './historico-detail';

@NgModule({
  declarations: [
    HistoricoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricoDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    HistoricoDetailPage
  ]
})
export class HistoricoDetailPageModule { }
