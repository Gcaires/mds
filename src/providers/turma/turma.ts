import { Injectable } from '@angular/core';

import { Turma } from '../../models/turma';

import { Api } from '../api/api';
import { Global } from '../global/global';

@Injectable()
export class TurmaProvider {

  periodoLetivo: any;
  basePath : string = "/entidade/turma";
  constructor(public api : Api, public global : Global) {
    this.periodoLetivo = this.global.getPeriodoLetivo();
  }

  pesquisar(params?: any) {
    var path : string = "/" + this.periodoLetivo.ano + "/" + this.periodoLetivo.numero;
    return this.api.get(this.basePath + path, params);
  }

}
