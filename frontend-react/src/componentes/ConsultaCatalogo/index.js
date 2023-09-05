import { useEffect, useState } from 'react'
import './style.css'

function ConsultaCatalogo(){
  const [produtos, setProdutos] = useState([])
  const [erro, setErro] = useState([])
  useEffect(() =>{
    
    const consulta = async () =>{
      try{
        const resposta = await fetch("http://localhost:8080/api/v1/produtos")
        const dados = await resposta.json()
        console.log(JSON.stringify(dados));
  
        setProdutos(dados)
    
      }catch(error){
        setErro(error.message)
        console.log(erro)
      }
    }

    consulta()

  

  }, [])
  
  return(
    <div className='catalogo'>
      <h3>Consulta Catalogo</h3>
      {JSON.stringify(produtos)}
    </div>
  )
}

export default ConsultaCatalogo