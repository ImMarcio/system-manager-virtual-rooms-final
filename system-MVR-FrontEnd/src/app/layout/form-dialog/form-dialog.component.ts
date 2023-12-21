import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";


import {AuthService} from "../../shared/services/auteticadores/auth.service";
import {AlunoCrudService} from "../../shared/services/aluno-crud.service";
import {Aluno} from "../../shared/model/aluno";
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf, MatIconModule, MatCardModule, MatButtonModule],
})
export class FormDialogComponent {
  public aluno:Aluno = new Aluno(0,'','','','');
  alunos:Array<Aluno> = [];
  email:FormControl<string | null> = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>
  , private authService:AuthService,  private _alunoService:AlunoCrudService) {}
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Informe o email';
    }

    return this.email.hasError('email') ? 'Email inválido' : '';
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


  }
  entrar(): void {
    this.authService.fazerLogin(this.aluno.email, this.aluno.senha)
    this.dialogRef.close();

  }
}
