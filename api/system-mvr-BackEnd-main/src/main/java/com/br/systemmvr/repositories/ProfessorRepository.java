package com.br.systemmvr.repositories;

import com.br.systemmvr.model.Disciplina;
import com.br.systemmvr.model.Professor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfessorRepository extends JpaRepository<Professor,Long> {
}
