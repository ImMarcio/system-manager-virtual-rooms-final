package com.br.systemmvr.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_professor")
public class Professor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nome;
    private String cpf;
    private String senha;

    @OneToMany(mappedBy = "professorResponsavel",fetch=FetchType.LAZY,cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    private List<Disciplina> turmasEncarregadas = new ArrayList<>();


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public  void adicionarTurma(Disciplina disciplina){
        this.turmasEncarregadas.add(disciplina);
    }

    public void removerTurma(Disciplina disciplina){
        this.turmasEncarregadas.remove(disciplina);
    }



}