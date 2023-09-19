import {
   Fragment,
   useEffect,
   useState
} from "react";

import "./style.css";
import Card from "./Card";

import ConverteBase64ToImage from "./ConvertBase64ToImage";

function ConsultaCatalogo() {
   const [produtos, setProdutos] = useState([]);
   const [erro, setErro] = useState([]);
   useEffect(() => {
      const consulta = async () => {
         try {
            const resposta = await fetch("http://localhost:8080/api/v1/produtos");
            const dados = await resposta.json();
            console.log(dados);
            setProdutos(dados);
         } catch (error) {
            setErro(error);
            console.error(erro);
         }
      };

      consulta();
   }, []);

   produtos.map(item => {
      
      return (
         <div>
            <Card img={ConverteBase64ToImage(item.imagem)} data={item} />
            <Card/>
         </div>
         
      )
   })
}

export default ConsultaCatalogo;