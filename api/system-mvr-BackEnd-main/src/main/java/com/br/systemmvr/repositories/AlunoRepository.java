package com.br.systemmvr.repositories;

import com.br.systemmvr.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

    public interface AlunoRepository extends JpaRepository<Aluno,Long> {
}
