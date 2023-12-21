package com.br.systemmvr.controller;

import com.br.systemmvr.model.Disciplina;
import com.br.systemmvr.services.DisciplinaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/")
public class DisciplinaController {

    @Autowired
    private DisciplinaService disciplinaService;

    @GetMapping("/disciplinas")
    public List<Disciplina> getDisciplinas() {
        return this.disciplinaService.getDisciplinas();
    }

    @GetMapping("/disciplinas/{id}")
    public Optional<Disciplina> getDisciplinaPorId(@PathVariable("id") Long idDisciplina) {
        return this.disciplinaService.getDisciplinaById(idDisciplina);
    }

    @PostMapping("/disciplinas")
    public Disciplina inserirDisciplina(@RequestBody Disciplina disciplina){
        return this.disciplinaService.inserirOuAtualizar(disciplina);
    }

    @PutMapping("/disciplinas/{id}")
    public Disciplina atualizarDisciplina(@RequestBody Disciplina disciplina){
        return this.disciplinaService.inserirOuAtualizar(disciplina);
    }

    @DeleteMapping("/disciplinas/{id}")
    public void apagarDisciplina(@PathVariable("id") Long id) {
        this.disciplinaService.apagarDisciplina(id);
    }
}