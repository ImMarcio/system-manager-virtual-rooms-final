import { Injectable } from '@angular/core';
import {MensagemService} from "../mensagem.service";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private mensagemService:MensagemService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((evento: HttpEvent<any>) => { }),
      catchError(resposta => this.processarErroResposta(resposta)));
  }

  processarErroResposta(response: object): Observable<HttpEvent<any>> {
    if (response instanceof HttpErrorResponse && response.status !== 401) {
      this.mensagemService.error(response.message);
    }
    return throwError(response);
  }
}
