package com.fatec.produto.servico;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.produto.model.Catalogo;
import com.fatec.produto.model.IImagemRepository;
import com.fatec.produto.model.IProdutoRepository;
import com.fatec.produto.model.Imagem;
import com.fatec.produto.model.Produto;

@Service
public class ProdutoServico implements IProdutoServico {
	Logger logger = LogManager.getLogger(this.getClass());

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

	@Override
	public List<Produto> consultaPorDescricao() {
		return null;
	}

	@Override
	public Optional<Produto> cadastrar(Produto produto) {
		logger.info(">>>> [servico] cadastrar produto iniciado");
		return Optional.ofNullable(repositoryProduto.save(produto));
	}

	@Override
	public Optional<Produto> consultarPorId(String id) {
		logger.info(">>>>> [servico] consulta por id iniciado");
		long codProduto = Long.parseLong(id);
		return repositoryProduto.findById(codProduto);
	}

	@Override
	public Optional<Produto> atualizar(Long id, Produto produto) {
		return Optional.empty();
	}

	@Override
	public void excluir(Long id) {
		repositoryProduto.deleteById(id);
	}
}
