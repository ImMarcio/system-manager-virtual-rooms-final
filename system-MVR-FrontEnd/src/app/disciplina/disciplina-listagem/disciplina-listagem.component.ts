import { Component } from '@angular/core';

import {Disciplina} from "../../shared/model/disciplina";
import {Aluno} from "../../shared/model/aluno";
import {DisciplinaServiceService} from "../../shared/services/disciplina-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-disciplina-listagem',
  templateUrl: './disciplina-listagem.component.html',
  styleUrls: ['./disciplina-listagem.component.css']
})
export class DisciplinaListagemComponent {
disciplinas : Disciplina[] | undefined;

constructor(private _disciplinaService:DisciplinaServiceService, private roteador: Router) {


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

  excluirDisciplina(disciplina:Disciplina){
    const index = this.disciplinas?.findIndex(disciplinaAtual => disciplinaAtual.id == disciplina.id);
    // @ts-ignore
    this.disciplinas?.splice(index,1);
    this._disciplinaService.deleteDisciplina(disciplina.id).subscribe();
  }

  editarDisciplina(disciplina:Disciplina){
    this.roteador.navigate(['edicao-disciplina', disciplina.id]);
  }



}
