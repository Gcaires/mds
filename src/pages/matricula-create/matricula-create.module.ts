import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MatriculaCreatePage } from './matricula-create';

@NgModule({
  declarations: [
    MatriculaCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(MatriculaCreatePage),
    TranslateModule.forChild()
  ],
  exports: [
    MatriculaCreatePage
  ]
})
export class MatriculaCreatePageModule { }
