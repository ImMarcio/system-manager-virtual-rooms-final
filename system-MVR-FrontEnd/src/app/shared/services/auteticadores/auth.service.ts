import { Injectable } from '@angular/core';

import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Aluno} from "../../model/aluno";
import {AlunoCrudService} from "../aluno-crud.service";
import {Observable, Subscription} from "rxjs";
import {AlunoLogadoService} from "./aluno-logado.service";
import {ProfessorCrudService} from "../professor-crud.service";
import {MensagemService} from "../../mensagem.service";
import {Professor} from "../../model/professor";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

alunoValidado = false;
professorValidado = false;

  constructor(private  router: Router,
              private _alunoService:AlunoCrudService,
              private alunoLogadoService:AlunoLogadoService,
              private _professorService:ProfessorCrudService,
              private message:MensagemService) { }



  fazerLogin(email:string, senha:string){
   let alunoAuteticado:Aluno | null = null;
   this._alunoService.getAlunos().subscribe(alunosListados => {
     alunosListados.map((alunoAtual) =>{
       if(alunoAtual.email == email && alunoAtual.senha == senha){
         alunoAuteticado = alunoAtual;
         this.alunoLogadoService.setCurrentStudent(alunoAuteticado);
         this.alunoValidado = true;
         this.router.navigate(['/perfil'])

       }

     })
     if(!alunoAuteticado){
       this.alunoValidado = false;
       this.message.warning("Email ou senha errada! Tente Novamente!");

     }
   })
  }

  alunoEstaValidado(){
    return this.alunoValidado;
  }

  fazerLoginProfessor(cpf:string,senha:string){
    console.log('entrou no login')
    let professorAuteticado:Professor | null;
    this._professorService.getProfessores().subscribe(professoresListados => {
      professoresListados.map((professorAtual) =>{
        if(professorAtual.cpf == cpf && professorAtual.senha == senha){
          professorAuteticado = professorAtual;
          this.alunoLogadoService.setCurrentProfessor(professorAuteticado);
          this.professorValidado = true;
          this.router.navigate(['/listagem-disciplina'])

        }
      })
      if(!professorAuteticado){
        this.professorValidado = false;
        this.message.warning("CPF ou senha errada! Tente Novamente!");

      }
    })

  }

  professorEstaValidado(){
    return this.professorValidado;
  }


}



