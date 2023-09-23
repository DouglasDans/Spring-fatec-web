import { Fragment, useEffect, useState } from "react";
import "./style.css";

import ConverteBase64ToImage from "../ConvertBase64ToImage";
import Card from "./Card";
import getAPI from "../../service/API";

function ConsultaCatalogo() {
   const [produtos, setProdutos] = useState([]);
   const [erro, setErro] = useState([]);
   
   useEffect(() => {

      getAPI("http://localhost:8080/api/v1/produtos").then(data => {
         if (data.dados) {
            setProdutos(data.dados)
         } else {
            setErro(data.error)
            console.error(erro)
         }
      }).catch(error => {
         setErro(error)
         console.error(erro)
      })

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