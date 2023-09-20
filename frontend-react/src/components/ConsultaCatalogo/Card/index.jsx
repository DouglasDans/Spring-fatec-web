import React from 'react';
import "./style.css"

export default function Card(props){
   const img = props.img

   return (
      <div className='card'>
         <img src={img} alt="" />
         <div className='content-container'>
            <h2>{props.data.categoria}</h2>
            <span><b>Custo:</b> {props.data.custo}</span>
            <span><b>Quantidade estoque:</b> {props.data.quantidadeNoEstoque}</span>
            <span><b>Descrição:</b> {props.data.descricao}</span>
         </div>
      </div>
   )
}  