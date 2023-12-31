import { Component } from '@angular/core';

import {AuthService} from "../../shared/services/auteticadores/auth.service";
import {Observable, Subscription} from "rxjs";
import {Aluno} from "../../shared/model/aluno";
import {Disciplina} from "../../shared/model/disciplina";
import {subscribeToArray} from "rxjs/internal/util/subscribeToArray";
import {AlunoLogadoService} from "../../shared/services/auteticadores/aluno-logado.service";

@Component({
  selector: 'app-listar-disciplinas-matriculado',
  templateUrl: './listar-disciplinas-matriculado.component.html',
  styleUrls: ['./listar-disciplinas-matriculado.component.css']
})
export class ListarDisciplinasMatriculadoComponent {
  aluno: Aluno | undefined
  disciplinasMatriculado: Array<Disciplina> | undefined = []

  constructor( private _authService:AuthService, private alunoLogadoService:AlunoLogadoService) {
    this.aluno = alunoLogadoService.getCurrentStudent();
    this.disciplinasMatriculado = this.aluno?.turmasMatriculado;

  }
  // cancelarIncricao(disciplinaID:number){
  //   const indxRemover = this.disciplinasMatriculado.findIndex(disciplina => disciplina.codigo === disciplinaID);
  //   if(indxRemover > -1){
  //     this.disciplinasMatriculado.splice(indxRemover, 1);
  //   }
  // }

}
