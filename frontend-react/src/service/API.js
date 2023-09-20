
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