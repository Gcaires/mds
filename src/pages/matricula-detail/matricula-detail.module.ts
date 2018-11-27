import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MatriculaDetailPage } from './matricula-detail';

@NgModule({
  declarations: [
    MatriculaDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MatriculaDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    MatriculaDetailPage
  ]
})
export class MatriculaDetailPageModule { }
