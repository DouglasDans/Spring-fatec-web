import React, { useState } from "react";
import API from "../../service/API";

import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";

import './style.css'

export default function FormCadastroProduto() {
   const navigate = useNavigate(); //navegar para a rota home

   const [descricao, setDescricao] = useState("");
   const [categoria, setCategoria] = useState("");
   const [custo, setCusto] = useState("");
   const [quantidadeNoEstoque, setQuantidadeNoEstoque] = useState("");
   const [mensagem, setMensagem] = useState("");

   async function handleCadastroProduto() {
      const produto = {
         descricao,
         categoria,
         custo: parseFloat(custo),
         quantidadeNoEstoque: parseInt(quantidadeNoEstoque, 0),
      };

      API.post("http://localhost:8080/api/v1/produtos", produto).then((res) => {
         if (res.ok) {
            setMensagem("Produto Cadastrado com sucesso");
         } else {
            setMensagem(
               "Erro ao cadastrar o produto. Verifique os dados informados."
            );
         }
      })
      .catch((e) => {
         throw new Error("Erro ao cadastrar o produto." + e);
      });
  }

  const handleCancelar = () => {
    navigate("/");
  };

  return (
    <div className="form-container">
      <Container>
        <Form>
          <FormGroup>
            
            <Label for="descricao"> Descrição </Label>
            <Input
              id="descricao"
              type="text"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            <br />

            <Label for="categoria"> Categoria </Label>
            <Input
              id="categoria"
              type="text"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />

            <br />

            <Label for="custo"> Custo </Label>
            <Input
              id="custo"
              type="text"
              value={custo}
              onChange={(e) => setCusto(e.target.value)}
            />

            <br />

            <Label for="quantidade"> Quantidade no estoque </Label>
            <Input
              id="quantidade"
              type="text"
              value={quantidadeNoEstoque}
              onChange={(e) => setQuantidadeNoEstoque(e.target.value)}
            />

            <br />

            <Button color="primary" onClick={handleCadastroProduto}>
              Cadastrar Produto
            </Button>{" "}

            <Button color="primary" onClick={handleCancelar}>
              Voltar
            </Button>

            {mensagem && <div>{mensagem}</div>}
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
}
