import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CpfPipe} from "./cpf.pipe";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CpfPipe
  ],
  exports: [
    CpfPipe
  ]
})
export class PipesMModule { }
