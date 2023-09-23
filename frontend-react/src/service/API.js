
export default async function getAPI(endpoint) {
   let obj = {}
   
   try {
      const resposta = await fetch(endpoint);

      if (!resposta.ok) {
         throw new Error()
      }

      const dados = await resposta.json();
      obj = {
         dados: dados
      }
      
   } catch (error) {
      obj = {
         error: error.message
      }
   }

   return obj
}

async function postAPI(endpoint, body) {
   const response = await fetch("http://localhost:8080/api/v1/produtos", {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
   })

   return response
}