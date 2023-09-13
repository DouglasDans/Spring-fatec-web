package com.fatec.produto.servico;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.produto.model.Catalogo;
import com.fatec.produto.model.IImagemRepository;
import com.fatec.produto.model.IProdutoRepository;
import com.fatec.produto.model.Imagem;
import com.fatec.produto.model.Produto;

@Service
public class ProdutoServico implements IProdutoServico {
	@Autowired
	IProdutoRepository repositoryProduto;

	@Autowired
	IImagemRepository repositoryImagem;

	@Override
	public List<Catalogo> consultaCatalogo() {
		Catalogo c = null;
		List<Catalogo> lista = new ArrayList<>();
		List<Produto> listaProduto = repositoryProduto.findAll();
		List<Imagem> listaImagem = repositoryImagem.findAll();

		for (Produto p : listaProduto) {
			for (Imagem i : listaImagem) {
				if (p.getId().equals(i.getId())) {
					c = new Catalogo(
						p.getId(), 
						p.getDescricao(), 
						p.getCategoria(), 
						p.getCusto(), 
						p.getQuantidadeNoEstoque(), 
						i.getArquivo());

					lista.add(c);
				}
			}
		}
		return lista;
	}
}
