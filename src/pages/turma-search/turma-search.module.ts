import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { TurmaSearchPage } from './turma-search';

@NgModule({
  declarations: [
    TurmaSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(TurmaSearchPage),
    TranslateModule.forChild()
  ],
  exports: [
    TurmaSearchPage
  ]
})
export class TurmaSearchPageModule { }
