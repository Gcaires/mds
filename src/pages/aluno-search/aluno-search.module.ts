import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AlunoSearchPage } from './aluno-search';

@NgModule({
  declarations: [
    AlunoSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoSearchPage),
    TranslateModule.forChild()
  ],
  exports: [
    AlunoSearchPage
  ]
})
export class AlunoSearchPageModule { }
