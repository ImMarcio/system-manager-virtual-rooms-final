package com.br.systemmvr.model;

import jakarta.persistence.*;
import org.springframework.boot.context.properties.bind.Name;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_alunos")
public class Aluno {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nome;
    private String email;
    private String senha;

    private String matricula;

    @ManyToMany(mappedBy = "alunosMatriculados",fetch=FetchType.LAZY,cascade = {CascadeType.ALL})
    private List<Disciplina> turmasMatriculado = new ArrayList<>();



    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }


    public void adicionarDisciplina(Disciplina disciplina){
        this.turmasMatriculado.add(disciplina);
    }
    public void removerDisciplina(Disciplina disciplina){
        this.turmasMatriculado.remove(disciplina);
    }
    @Override
    public String toString() {
        return "Aluno{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", email='" + email + '\'' +
                ", senha='" + senha + '\'' +
                ", matricula='" + matricula + '\'' +
                ", turmasMatriculado=" + turmasMatriculado +
                '}';
    }
}