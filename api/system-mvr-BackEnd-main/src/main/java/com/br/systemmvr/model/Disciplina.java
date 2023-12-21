package com.br.systemmvr.model;

import com.br.systemmvr.model.Aluno;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
@Entity
@Table(name = "tb_disciplinas")
public class Disciplina {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nome;
    private String semestre;
    private String descricao;

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    @ManyToMany(fetch=FetchType.LAZY,cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    private List<Aluno> alunosMatriculados = new ArrayList<Aluno>() ;
    @ManyToOne(fetch=FetchType.LAZY,cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    private Professor professorResponsavel;
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
    public String getSemestre() {
        return semestre;
    }
    public void setSemestre(String semestre) {
        this.semestre = semestre;
    }
    public void adicionarAluno(Aluno aluno){
        this.alunosMatriculados.add(aluno);
    }
    public void removerAluno(Aluno aluno){
        this.alunosMatriculados.remove(aluno);
    }
    public void setProfessorResponsavel(Professor professor){
        this.professorResponsavel = professor;
    }

    @Override
    public String toString() {
        return "Disciplina{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", semestre='" + semestre + '\'' +
                ", descricao='" + descricao + '\'' +
                ", alunosMatriculados=" + alunosMatriculados +
                ", professorResponsavel=" + professorResponsavel +
                '}';
    }
}