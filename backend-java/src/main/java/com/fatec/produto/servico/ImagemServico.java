package com.fatec.produto.servico;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import com.fatec.produto.model.Imagem;

public class ImagemServico implements IImagemServico{
   @Override
   public Optional<Imagem> salvar(MultipartFile arquivo, Long id) throws IOException {
      // TODO Auto-generated method stub
      return Optional.empty();
   }

   @Override
   public List<Imagem> getAll() {
      // TODO Auto-generated method stub
      return null;
   }

   @Override
   public byte[] getImagem(String nomeArquivo) {
      // TODO Auto-generated method stub
      return null;
   }

   @Override
   public byte[] getImagemById(Long id) {
      // TODO Auto-generated method stub
      return null;
   }
}
