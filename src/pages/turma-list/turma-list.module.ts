import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { TurmaListPage } from './turma-list';

@NgModule({
  declarations: [
    TurmaListPage,
  ],
  imports: [
    IonicPageModule.forChild(TurmaListPage),
    TranslateModule.forChild()
  ],
  exports: [
    TurmaListPage
  ]
})
export class TurmaListPageModule { }
