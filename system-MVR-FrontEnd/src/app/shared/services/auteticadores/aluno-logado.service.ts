import { Injectable } from '@angular/core';
import {Aluno} from "../../model/aluno";
import {HttpClient} from "@angular/common/http";
import {Professor} from "../../model/professor";

@Injectable({
  providedIn: 'root'
})
export class AlunoLogadoService {
  url:string;
  private currentStudent:Aluno;
  private currentProfessor: Professor;
  constructor(private http:HttpClient) {
    this.currentStudent = new Aluno(0,'','','','');
    this.currentProfessor = new Professor(0,'','','','')
    this.url = 'http://localhost:3000/alunos'
  }

  setCurrentStudent(aluno:Aluno){
    this.currentStudent = aluno;
  }
  getCurrentStudent():Aluno{
    return this.currentStudent
  }

  setCurrentProfessor(professor:Professor){
    this.currentProfessor = professor;
  }

  getCurrentProfessor(){
    return this.currentProfessor
  }



}
