import { Component } from '@angular/core';

import {MatDialog} from "@angular/material/dialog";



import {Disciplina} from "../../shared/model/disciplina";



import {DisciplinaServiceService} from "../../shared/services/disciplina-service.service";
import {Aluno} from "../../shared/model/aluno";
import {AlunoCrudService} from "../../shared/services/aluno-crud.service";
import {AlunoLogadoService} from "../../shared/services/auteticadores/aluno-logado.service";
import {MensagemService} from "../../shared/mensagem.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  opened = false;
  disciplinas : Disciplina[] | undefined;
  alunos: Array<Aluno> = [];
  alunoPrincipal: Aluno = new Aluno(0,'','','','') ;
  disciplinasMatriculadas : Disciplina[] | undefined;
  alunoEstaLogado:boolean = false;

constructor(private _disciplinaService:DisciplinaServiceService,
            private _alunoService:AlunoCrudService,
            private alunoLogadoService:AlunoLogadoService,
            private messageSnack:MensagemService) {
  this.alunoPrincipal = this.alunoLogadoService.getCurrentStudent();
  this.alunoPrincipal.turmasMatriculado.forEach(disciplina => console.log(disciplina.nome  + "Aqui"))
  this.disciplinasMatriculadas = this.alunoPrincipal.turmasMatriculado;

}
  ngOnInit(){
    this._disciplinaService.getDisciplinas()
      .subscribe(
        retorno => {
          this.disciplinas = retorno.map(
            item => {
              return new Disciplina(
                item.id,
                item.nome,
                item.semestre,
                item.descricao,
                item.professorResponsavel
              )
            }
          )
        }
      )

      this._alunoService.getAlunos()
          .subscribe(
              retorno => {
                  this.alunos = retorno.map(
                      item => {
                          return new Aluno(
                              item.id,
                              item.nome,
                              item.email,
                              item.senha,
                              item.matricula
                          )
                      }
                  )
              }
          )



  }

  excluirConta(){
    const ixdex = this.alunos?.findIndex(a => {
        a.email == this.alunoLogadoService.getCurrentStudent().email
    }
    );
    if (ixdex > -1) {
      this.alunos.splice(ixdex, 1);}
    if(this.alunoLogadoService.getCurrentStudent().email.length != 0){
      this._alunoService.deleteAluno(this.alunoLogadoService.getCurrentStudent().id).subscribe();
      this.messageSnack.success("Conta desativada");
    }else{
      this.messageSnack.success("Error ao  desativa conta")
    }

  }

}
