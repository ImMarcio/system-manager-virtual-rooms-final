import {Aluno} from "./aluno";
import {Professor} from "./professor";

export class Disciplina{
  id:number;
  nome:string;
  semestre:string;
  professorResponsavel:Professor  = new Professor(0,'','','','');
  alunosMatriculados:Array<Aluno> = [];
  descricao:string;

  constructor(id:number, nome:string, semestre:string,descricao:string, professor:Professor) {
    this.id= id;
    this.nome= nome;
    this.semestre = semestre;
    this.descricao = descricao;
    this.professorResponsavel = professor;
  }




}
