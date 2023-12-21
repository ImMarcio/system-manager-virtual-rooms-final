import { Component } from '@angular/core';
import {Aluno} from "../../shared/model/aluno";
import {AlunoCrudService} from "../../shared/services/aluno-crud.service";
import {CdkDragDrop, moveItemInArray, CdkDrag, CdkDropList,} from "@angular/cdk/drag-drop";
import {NgFor} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {AlunoLogadoService} from "../../shared/services/auteticadores/aluno-logado.service";
import {Disciplina} from "../../shared/model/disciplina";
import {DisciplinaServiceService} from "../../shared/services/disciplina-service.service";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MensagemService} from "../../shared/mensagem.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  imports: [CdkDropList, NgFor, CdkDrag, MatCardModule, MatIconModule, MatButtonModule],
  standalone: true
})
export class PerfilComponent {
  alunos:Aluno[] = [];
  aluno:Aluno = new Aluno(0,'','','','');
  disciplinas:Array<Disciplina> = [];
  constructor(private _alunoService:AlunoCrudService,
              private authLogado:AlunoLogadoService,
              private _disciplinaService:DisciplinaServiceService,
              private message:MensagemService) {
    this.aluno = this.authLogado.getCurrentStudent();
  }

  ngOnInit(){
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
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.alunos, event.previousIndex, event.currentIndex);
  }

  entrarDisciplina(disciplina:Disciplina){
    disciplina.alunosMatriculados.push(this.authLogado.getCurrentStudent());
    this._disciplinaService.putDisciplina(disciplina).subscribe(
      (response)=>{
        this.message.success("Matriculado na turma:  " + disciplina.nome)
      },(error)=>{
      this.message.error("Error ao se matricula na  turma:  " + disciplina.nome)
    }
    );
  }



}
