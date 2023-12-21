import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisciplinaManterComponent} from "./disciplina/disciplina-manter/disciplina-manter.component";
import {DisciplinaListagemComponent} from "./disciplina/disciplina-listagem/disciplina-listagem.component";
import {MenuComponent} from "./layout/menu/menu.component";
import {EntrarDisciplinaComponent} from "./aluno/entrar-disciplina/entrar-disciplina.component";
import {ListarDisciplinasMatriculadoComponent} from "./aluno/listar-disciplinas-matriculado/listar-disciplinas-matriculado.component";
import {LoginComponent} from "./layout/login/login.component";
import {ListagemAlunoComponent} from "./aluno/listagem-aluno/listagem-aluno.component";
import {AuthGuardService} from "./shared/services/auteticadores/auth-guard.service";
import {PerfilComponent} from "./aluno/perfil/perfil.component";

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'listagem-alunos', component: ListagemAlunoComponent},
  {path: 'edicao-disciplina/:id', component: DisciplinaManterComponent},
  {path: 'cadastro-disciplina', component: DisciplinaManterComponent},
  {path: 'listagem-disciplina', component: DisciplinaListagemComponent},
  {path: 'entrar-disciplina', component: EntrarDisciplinaComponent, canActivate: [AuthGuardService]},
  {path: 'listar-disciplinas-matriculado', component: ListarDisciplinasMatriculadoComponent, canActivate: [AuthGuardService]},
  {path: '', component: LoginComponent},
  {path: 'perfil', component: PerfilComponent, canActivate: [AuthGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

