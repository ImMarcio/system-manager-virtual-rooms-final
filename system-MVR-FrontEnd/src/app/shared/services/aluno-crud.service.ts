import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Aluno} from "../model/aluno";
import {filter, map, Observable, toArray} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AlunoCrudService {
  constructor(private _HttpClient:HttpClient) { }
  private url:string = "http://localhost:8081/alunos";
  getAlunos(): Observable<Aluno[]>{
      return this._HttpClient.get<Aluno[]>(this.url);
  }

  getAlunoByEmail(email:string){
    return this._HttpClient.get<Aluno>(`${this.url}?email=${email}`);
  }
  postAluno(data:Aluno):Observable<Aluno>{
    return this._HttpClient.post<Aluno>(this.url,data);
  }

  getAlunoById(id:number):Observable<Aluno>{
    return this._HttpClient.get<Aluno>(`${this.url}/${id}`)
  }
  putAluno(aluno:Aluno):Observable<Aluno>{
    return this._HttpClient.put<Aluno>(`${this.url}/${aluno.id}`,aluno)
  }
  deleteAluno(id:number):Observable<Aluno>{
    return this._HttpClient.delete<Aluno>(`${this.url}/${id}`)
  }


}

