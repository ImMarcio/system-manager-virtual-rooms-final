package com.br.systemmvr.services;

import com.br.systemmvr.model.Disciplina;
import com.br.systemmvr.repositories.DisciplinaRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class DisciplinaService {
    @Autowired
    private DisciplinaRepository displinaRepository;

    public List<Disciplina> getDisciplinas(){
        return  this.displinaRepository.findAll();
    }

    public Optional<Disciplina> getDisciplinaById(Long id){
        return this.displinaRepository.findById(id);
    }
    @Transactional
    public Disciplina inserirOuAtualizar(Disciplina disciplina){
        return  this.displinaRepository.save(disciplina);
    }
    public void apagarDisciplina(Long id){
        this.displinaRepository.deleteById(id);
    }
}