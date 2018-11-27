import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
// import { ForkJoin } from 'rxjs';

import { Matricula } from '../../models/matricula';
import { MatriculaAluno } from '../../models/matriculaAluno';
import { MatriculaHistorico } from '../../models/matriculaHistorico';
import { Api } from '../api/api';
import { Global } from '../global/global';

@Injectable()
export class MatriculaProvider {
	listaMatriculaAluno: MatriculaAluno[] = [];
  listaMatriculaHistorico: MatriculaHistorico [] = [];
  periodoLetivo: any;

  basePath : string = "/entidade/matricula";
  constructor(public api : Api, public global : Global) {
    this.periodoLetivo = this.global.getPeriodoLetivo();
  }

  pesquisarAluno(aluno: string, params?: any) {
      var path : string = "/" + this.periodoLetivo.ano + "/" + this.periodoLetivo.numero + "/aluno/" + aluno;
      return this.api.get(this.basePath + path, params);
  }

  pesquisarAlunoHistorico(aluno: string, params?: any) {
    var path : string = "/" + this.periodoLetivo.ano + "/" + this.periodoLetivo.numero + "/aluno/" + alunoDefinido + "/historico";
    return this.api.get(this.basePath + path, params);
  }

	inserir(matricula) {
		var path : string = "/";
		return this.api.post(this.basePath + path, matricula);
  }

	alterarStatus(matricula, statusAnterior : string) {
		var alterarStatusRequest : {
			matricula : matricula,
			statusAnterior : statusAnterior
		}
		var path : string = "/";
		return this.api.put(this.basePath + path, alterarStatusRequest);
	}

  delete(matriculaAluno: MatriculaAluno) {
    this.listaMatriculaAluno.splice(this.listaMatriculaAluno.indexOf(matriculaAluno), 1);
  }

	updateStatus(matriculaAluno: MatriculaAluno, status: string) {
		if (!matriculaAluno.statusAnterior) [
			matriculaAluno.statusAnterior = matriculaAluno.status;
		]
	}

	// Tarefas
	confirmarMatricula() {
		let observables : Observable<any>[] = [];
		let aluno : Aluno = this.global.getAluno();

		for (let matriculaAluno of this.listaMatriculaAluno) {
			// if ((matriculaAluno.statusAnterior) && ((matriculaAluno.status !== matriculaAluno.statusAnterior)) || (matriculaAluno.status)))
			var matricula = {
				aluno : aluno.matricula;
				turma : {
					codigo: matriculaAluno.turma.codigo;
					disciplina: matriculaAluno.turma.disciplina.codigo;
					periodoLetivo: this.global.getPeriodoLetivo();
				};
			};
			if (!matriculaAluno.status) {
				matricula.status = "Pedido";
				if (matriculaAluno.prioridade) {
					matricula.prioridade = matriculaAluno.prioridade;
				}
				observables.push(this.inserir(matricula));
			} else {
				 matricula.status = matriculaAluno.status;
				 observables.push(this.alterarStatus(matricula, matriculaAluno.statusAnterior))
			}
		}
		return Observable.ForkJoin(observables);

	}

}
