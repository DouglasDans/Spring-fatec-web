import React from 'react';
import "./style.css"

export default function Card(props){
   const img = props.img

   return (
      <div className='card'>
         <img src={img} alt="" />
         <div className='content-container'>
            <h4 className='product-title'>{(props.data.categoria)}</h4>
            <h5>R${props.data.custo}</h5>
            <span>{props.data.descricao}</span>
            <span>{props.data.quantidadeNoEstoque} Disponíveis</span>
         </div>
      </div>
   )
}  