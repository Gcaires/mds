import { Injectable } from '@angular/core';

import { Matricula } from '../../models/matricula';
import { MatriculaAluno } from '../../models/matriculaAluno';
import { MatriculaHistorico } from '../../models/matriculaHistorico';

@Injectable()
export class MatriculaProvider {
  listaMatriculaAluno: MatriculaAluno[] = [];
  listaMatriculaHistorico: MatriculaHistorico [] = [];

  constructor() {
    let listaMatriculaAluno = [
      {
        "status" : "PreMatricula",
        "prioridade" : 1,
        "turma" : {
          "codigo" : "F",
          "disciplina" : {
            "codigo" : 132012,
            "nome" : "INTRODUCAO A ECONOMIA",
            "creditos" : 4
          },
          "listaHorarioAula" : [ {
            "dia" : "SEG",
            "hora" : "14:00-15:50"
          }, {
            "dia" : "QUA",
            "hora" : "14:00-15:50"
          } ]
        }
      },
      {
        "status" : "PreMatricula",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : 167266,
            "nome" : "TEORIA DA INFORMACAO",
            "creditos" : 4
          },
          "listaHorarioAula" : [ {
            "dia" : "TER",
            "hora" : "16:00-17:50"
          }, {
            "dia" : "QUI",
            "hora" : "16:00-17:50"
          } ]
        }
      },
      {
        "status" : "PreMatricula",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : 108529,
            "nome" : "REDES DE TELECOMUNICACOES",
            "creditos" : 4
          },
          "listaHorarioAula" : [ {
            "dia" : "SEG",
            "hora" : "16:00-17:50"
          }, {
            "dia" : "QUA",
            "hora" : "16:00-17:50"
          } ]
        }
      },
      {
        "status" : "PreMatricula",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : 108537,
            "nome" : "LABORATORIO REDES DE TELECOMUNICACOES",
            "creditos" : 2
          },
          "listaHorarioAula" : [ {
            "dia" : "SEX",
            "hora" : "10:00-11:50"
          } ]
        }
      },
      {
        "status" : "PreMatricula",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : 167878,
            "nome" : "COMUNICACOES DIGITAIS",
            "creditos" : 4
          },
          "listaHorarioAula" : [ {
            "dia" : "SEG",
            "hora" : "08:00-09:50"
          }, {
            "dia" : "QUA",
            "hora" : "08:00-09:50"
          } ]
        }
      }
    ];

    for (let matriculaAluno of listaMatriculaAluno) {
      this.listaMatriculaAluno.push(new MatriculaAluno(matriculaAluno));
    }

    let listaMatriculaHistorico = [
      {
        "status" : "PreMatricula",
        "timestamp" : "2018-04-05T16:45:56",
        "turma" : {
          "codigo" : "B",
          "disciplina" : {
            "codigo" : 132012,
            "nome" : "INTRODUCAO A ECONOMIA",
            "creditos" : 4
          }
        }
      }, {
        "status" : "PreMatricula",
        "timestamp" : "2018-04-05T16:45:56",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : 167266,
            "nome" : "TEORIA DA INFORMACAO",
            "creditos" : 4
          }
        }
      }, {
        "status" : "PreMatricula",
        "timestamp" : "2018-04-05T16:45:56",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : 108529,
            "nome" : "REDES DE TELECOMUNICACOES",
            "creditos" : 4
          }
        }
      }, {
        "status" : "PreMatricula",
        "timestamp" : "2018-04-05T16:45:56",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : 108537,
            "nome" : "LABORATORIO REDES DE TELECOMUNICACOES",
            "creditos" : 2
          }
        }
      }, {
        "status" : "PreMatricula",
        "timestamp" : "2018-04-05T16:45:56",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : 167878,
            "nome" : "COMUNICACOES DIGITAIS",
            "creditos" : 4
          }
        }
      }, {
        "status" : "Retirado",
        "timestamp" : "2018-04-18T16:45:56",
        "turma" : {
          "codigo" : "B",
          "disciplina" : {
            "codigo" : 132012,
            "nome" : "INTRODUCAO A ECONOMIA",
            "creditos" : 4
          }
        }
      }, {
        "status" : "Confirmado",
        "timestamp" : "2018-04-18T16:45:56",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : 167266,
            "nome" : "TEORIA DA INFORMACAO",
            "creditos" : 4
          }
        }
      }, {
        "status" : "Confirmado",
        "timestamp" : "2018-04-18T16:45:56",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : 108529,
            "nome" : "REDES DE TELECOMUNICACOES",
            "creditos" : 4
          }
        }
      }, {
        "status" : "Confirmado",
        "timestamp" : "2018-04-18T16:45:56",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : 108537,
            "nome" : "LABORATORIO REDES DE TELECOMUNICACOES",
            "creditos" : 2
          }
        }
      }, {
        "status" : "Confirmado",
        "timestamp" : "2018-04-18T16:45:56",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : 167878,
            "nome" : "COMUNICACOES DIGITAIS",
            "creditos" : 4
          }
        }
      }, {
        "status" : "Pedido",
        "timestamp" : "2018-04-18T16:45:56",
        "turma" : {
          "codigo" : "F",
          "disciplina" : {
            "codigo" : 132012,
            "nome" : "INTRODUCAO A ECONOMIA",
            "creditos" : 4
          }
        }
      }, {
        "status" : "Matriculado",
        "timestamp" : "2018-04-21T16:45:56",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : 167266,
            "nome" : "TEORIA DA INFORMACAO",
            "creditos" : 4
          }
        }
      }, {
        "status" : "Matriculado",
        "timestamp" : "2018-04-21T16:45:56",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : 108529,
            "nome" : "REDES DE TELECOMUNICACOES",
            "creditos" : 4
          }
        }
      }, {
        "status" : "Matriculado",
        "timestamp" : "2018-04-21T16:45:56",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : 108537,
            "nome" : "LABORATORIO REDES DE TELECOMUNICACOES",
            "creditos" : 2
          }
        }
      }, {
        "status" : "Matriculado",
        "timestamp" : "2018-04-21T16:45:56",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : 167878,
            "nome" : "COMUNICACOES DIGITAIS",
            "creditos" : 4
          }
        }
      }, {
        "status" : "Matriculado",
        "timestamp" : "2018-04-21T16:45:56",
        "turma" : {
          "codigo" : "F",
          "disciplina" : {
            "codigo" : 132012,
            "nome" : "INTRODUCAO A ECONOMIA",
            "creditos" : 4
          }
        }
      }
    ];

    for (let matriculaHistorico of listaMatriculaHistorico) {
      this.listaMatriculaHistorico.push(new MatriculaHistorico(matriculaHistorico));
    }

  }

  pesquisar(params?: any) {
    if (!params) {
      return this.listaMatriculaAluno;
    }

    return this.listaMatriculaAluno.filter((matriculaAluno) => {
      for (let key in params) {
        let field = matriculaAluno[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return matriculaAluno;
        } else if (field == params[key]) {
          return matriculaAluno;
        }
      }
      return null;
    });
  }

  pesquisarHistorico(params?: any) {
    if (!params) {
      return this.listaMatriculaHistorico;
    }
  }

  inserir(matricula: Matricula) {
    var matriculaAluno: MatriculaAluno = {
      turma: matricula.turma,
      status: matricula.status,
      prioridade: matricula.prioridade
    }
    this.listaMatriculaAluno.push(matriculaAluno);
  }

  delete(matriculaAluno: MatriculaAluno) {
    this.listaMatriculaAluno.splice(this.listaMatriculaAluno.indexOf(matriculaAluno), 1);
  }
}
