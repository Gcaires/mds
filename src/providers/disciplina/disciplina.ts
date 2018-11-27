import { Injectable } from '@angular/core';

import { Disciplina } from '../../models/disciplina';
import { Api } from '../api/api';

@Injectable()
export class DisciplinaProvider {
  basePath : string = "/entidade/disciplina";

  constructor(public api : Api) {
  }

  consultar(disciplina: string) {
    var path : string = "/" + disciplina;
    var retrievedDisciplina: Disciplina = this.api.get(this.basePath + path);
    // "profilePic": "assets/img/speakers/bear.jpg"
    return retrievedDisciplina;
  }

  pesquisar(params?: any) {
    return null;
  }
}
