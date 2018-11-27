import { Injectable } from '@angular/core';

import { Aluno } from '../../models/aluno';
import { Api } from '../api/api';

@Injectable()
export class AlunoProvider {

  basePath : string = "/entidade/aluno";
  constructor(public api : Api) {
  }

  consultar(matricula: string) {
    var path : string = "/" + matricula;
    var aluno: Aluno = this.api.get(this.basePath + path);
    // "profilePic": "assets/img/speakers/bear.jpg"
    return aluno;
  }

    pesquisar(params?: any) {
      return null;
  }
}
