package com.br.systemmvr.services;

import com.br.systemmvr.model.Professor;
import com.br.systemmvr.repositories.ProfessorRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfessorService {

    @Autowired
    private ProfessorRepository professorRepository;

    public List<Professor> getProfessors(){
        return  this.professorRepository.findAll();
    }
    public Optional<Professor> getProfessorById(Long id){
        return this.professorRepository.findById(id);
    }
    @Transactional
    public Professor inserirOuAtualizar(Professor aluno){
        return this.professorRepository.save(aluno);
    }
    public void apagarProfessor(Long id){
        this.professorRepository.deleteById(id);
    }
}