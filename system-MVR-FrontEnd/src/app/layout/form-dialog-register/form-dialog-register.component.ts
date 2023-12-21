import { Component } from '@angular/core';
import {Aluno} from "../../shared/model/aluno";
import {MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../shared/services/auteticadores/auth.service";
import {AlunoCrudService} from "../../shared/services/aluno-crud.service";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {MensagemService} from "../../shared/mensagem.service";

@Component({
  selector: 'app-form-dialog-register',
  templateUrl: './form-dialog-register.component.html',
  styleUrls: ['./form-dialog-register.component.css'],
  imports: [MatFormFieldModule, MatInputModule, FormsModule,
    ReactiveFormsModule, NgIf, MatIconModule,
    MatCardModule, MatButtonModule],
  standalone: true
})
export class FormDialogRegisterComponent {
  public aluno:Aluno = new Aluno(0,'','','','');
  alunos:Array<Aluno> = [];
  email:FormControl<string | null> = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  private estaCadastrado: boolean = false;

  constructor( public dialogRef: MatDialogRef<FormDialogRegisterComponent>,
               private authService:AuthService,
               private _alunoService:AlunoCrudService,
               private snackBar:MatSnackBar,
               private mensagemSnack: MensagemService) {
  }
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
  cadastrar(): void {
    let alunoPesquisado:Aluno | null = null;
    console.log(this.aluno.email)
    this._alunoService.getAlunoByEmail(this.aluno.email).subscribe(
      (aluno) =>{
        alunoPesquisado = aluno;
      },
      (error) =>{
        console.log('Error na requisisção')
      }
    );

    this._alunoService.postAluno(this.aluno)
      .subscribe(
        (response) => {
          this.mensagemSnack.success('Aluno cadastrado com sucesso!')
        },
        (error) => {
          this.mensagemSnack.error('Aluno não cadastrado !')
        })
    //
    this.dialogRef.close();
  }
}
