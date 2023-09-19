import { Fragment, useEffect, useState } from "react";
import "./style.css";

import ConverteBase64ToImage from "./ConvertBase64ToImage";
import Card from "./Card";

function ConsultaCatalogo() {
   const [produtos, setProdutos] = useState([]);
   const [erro, setErro] = useState([]);
   useEffect(() => {
      const consulta = async () => {
         try {
            const resposta = await fetch("http://localhost:8080/api/v1/produtos");
            const dados = await resposta.json();
            setProdutos(dados);
         } catch (error) {
            setErro(error);
            console.error(erro);
         }
      };

      consulta();
   }, []);

   return (
      <div className="container-catalogo">
         {
            produtos.map(item => {
               return (
                  <Card img={ConverteBase64ToImage(item.imagem)} data={item} />
               )
            })
         }
      </div> 
   )
}

export default ConsultaCatalogo;