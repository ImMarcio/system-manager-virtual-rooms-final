import { Component } from '@angular/core';


import {Disciplina} from "../../shared/model/disciplina";


import {DisciplinaServiceService} from "../../shared/services/disciplina-service.service";
import {AlunoLogadoService} from "../../shared/services/auteticadores/aluno-logado.service";
import {Aluno} from "../../shared/model/aluno";
import {AlunoCrudService} from "../../shared/services/aluno-crud.service";
import {Professor} from "../../shared/model/professor";

@Component({
  selector: 'app-entrar-disciplina',
  templateUrl: './entrar-disciplina.component.html',
  styleUrls: ['./entrar-disciplina.component.css']
})
export class EntrarDisciplinaComponent {
  disciplinas : Disciplina[] | undefined;
  selectDisciplina: Disciplina = new Disciplina(0,'','','', new Professor(0,'','','','')) ;
  aluno :Aluno = new Aluno(0,'','','','');
  messageBox: any;

  constructor(private _disciplinaService:DisciplinaServiceService,private _alunoCrudService:AlunoCrudService, private alunoLogadoService:AlunoLogadoService) {
    this.aluno = this.alunoLogadoService.getCurrentStudent();

  }
  entrarDisciplina(){
    this.aluno.turmasMatriculado.push(this.selectDisciplina);
    this._alunoCrudService.putAluno(this.aluno).subscribe();
     this.selectDisciplina.alunosMatriculados.push(this.aluno);
     this._disciplinaService.getDisciplinaById(this.selectDisciplina.id).subscribe();
     if(this.aluno.email.length >2){
      this.messageBox = "Aluno matriculado com Sucesso";
     }else{
       this.messageBox = "Faça o login antes de se matricular";
     }
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
  }



}
