package com.br.systemmvr.controller;

import com.br.systemmvr.model.Aluno;
import com.br.systemmvr.services.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/")
public class AlunoController {
    @Autowired
    private AlunoService alunoService;

    @GetMapping("/alunos")
    public List<Aluno> getAlunos() {
        return this.alunoService.getAlunos();
    }

    @GetMapping("/alunos/{id}")
    public Optional<Aluno> getAlunoPorId(@PathVariable("id") Long idAluno) {
        return this.alunoService.getAlunoById(idAluno);
    }

    @PostMapping("/alunos")
    public Aluno inserirAluno(@RequestBody Aluno usuario){
        return this.alunoService.inserirOuAtualizar(usuario);
    }

    @PutMapping("/alunos/{id}")
    public Aluno atualizarAluno(@RequestBody Aluno usuario){
        return this.alunoService.inserirOuAtualizar(usuario);
    }

    @DeleteMapping("/alunos/{id}")
    public void apagarAluno(@PathVariable("id") Long id) {
        this.alunoService.apagarAluno(id);
    }
}
