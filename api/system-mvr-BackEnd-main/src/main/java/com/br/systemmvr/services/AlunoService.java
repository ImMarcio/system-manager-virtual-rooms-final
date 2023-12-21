package com.br.systemmvr.services;

import com.br.systemmvr.model.Aluno;
import com.br.systemmvr.repositories.AlunoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlunoService {

    @Autowired
    private AlunoRepository alunoRepository;

    public List<Aluno> getAlunos(){
        return  this.alunoRepository.findAll();
    }
    public Optional<Aluno> getAlunoById(Long id){
        return this.alunoRepository.findById(id);
    }
    @Transactional
    public Aluno inserirOuAtualizar(Aluno aluno){
        return this.alunoRepository.save(aluno);
    }
    public void apagarAluno(Long id){
        this.alunoRepository.deleteById(id);
    }

}