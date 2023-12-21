import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../shared/services/auteticadores/auth.service";

import {FormDialogComponent} from "../form-dialog/form-dialog.component";
import {ProfessorCrudService} from "../../shared/services/professor-crud.service";
import {AbstractControl, FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Professor} from "../../shared/model/professor";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {AppModule} from "../../app.module";
import {PipesMModule} from "../../shared/pipes/pipes-m.module";

@Component({
  selector: 'app-dialog-login-professor',
  templateUrl: './dialog-login-professor.component.html',
  styleUrls: ['./dialog-login-professor.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf, MatIconModule, MatCardModule, MatButtonModule,PipesMModule],
})
export class DialogLoginProfessorComponent {
  cpf:string = '';
  public professor:Professor = new Professor(0, '','','','');
  professores:Array<Professor> = [];


  hide = true;

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>
    , private authService:AuthService,  private _professorService:ProfessorCrudService) {}


  ngOnInit(){



    this._professorService.getProfessores()
      .subscribe(
        retorno => {
          this.professores = retorno.map(
            item => {
              return new Professor(
                item.id,
                item.nome,
                item.email,
                item.senha,
                item.cpf
              )
            }
          )
        }
      )


  }
  entrar(): void {
    this.authService.fazerLoginProfessor(this.professor.cpf, this.professor.senha)
    this.dialogRef.close();
  }



}
