import { Injectable } from '@angular/core';

import { Aluno } from '../../models/aluno';

/**
 * Global Variables.
 */
@Injectable()
export class Global {
  periodoLetivo: any = { // Período letivo para o qual a matrícula será processada
    numero: 1,
    ano: 2017
  };

  aluno: Aluno; // Aluno para o qual a matrícula será processada

  perfil: string; // Perfil de usuário do aplicativo ("Aluno" ou "Coordenador")
  faseMatricula: string; // ("Confirmacao", "Processamento", "Ajuste", "Comprovante")

  constructor() {
    this.faseMatricula = 'Confirmacao';
  }

  getPeriodoLetivo() {
    return this.periodoLetivo;
  }

  getAluno() {
    return this.aluno;
  }

  setAluno(aluno: Aluno) {
    this.aluno = aluno;
  }

  getPerfil() {
    return this.perfil;
  }

  setPerfil(perfil: string) {
    this.perfil = perfil;
  }
  getFaseMatricula() {
    return this.faseMatricula;
  }

  setFaseMatricula(faseMatricula: string) {
    this.faseMatricula = faseMatricula;
  }
}
