package com.fatec.produto.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IImagemRepository extends JpaRepository<Imagem, Long>{
   
}
