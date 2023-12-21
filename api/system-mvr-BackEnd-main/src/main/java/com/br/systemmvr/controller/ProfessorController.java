package com.br.systemmvr.controller;

import com.br.systemmvr.model.Professor;
import com.br.systemmvr.services.ProfessorService;
import com.br.systemmvr.services.ProfessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/")
public class ProfessorController {
    @Autowired
    private ProfessorService professorService;

    @GetMapping("/professores")
    public List<Professor> getProfessors() {
        return this.professorService.getProfessors();
    }

    @GetMapping("/professores/{id}")
    public Optional<Professor> getProfessorPorId(@PathVariable("id") Long idProfessor) {
        return this.professorService.getProfessorById(idProfessor);
    }

    @PostMapping("/professores")
    public Professor inserirProfessor(@RequestBody Professor professor){
        return this.professorService.inserirOuAtualizar(professor);
    }

    @PutMapping("/professores/{id}")
    public Professor atualizarProfessor(@RequestBody Professor professor){
        return this.professorService.inserirOuAtualizar(professor);
    }

    @DeleteMapping("/professores/{id}")
    public void apagarProfessor(@PathVariable("id") Long id) {
        this.professorService.apagarProfessor(id);
    }
}