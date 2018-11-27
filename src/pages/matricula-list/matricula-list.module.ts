import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MatriculaListPage } from './matricula-list';

@NgModule({
  declarations: [
    MatriculaListPage,
  ],
  imports: [
    IonicPageModule.forChild(MatriculaListPage),
    TranslateModule.forChild()
  ],
  exports: [
    MatriculaListPage
  ]
})
export class MatriculaListPageModule { }
