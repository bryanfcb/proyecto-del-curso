import { useEffect, useState } from "react"
import axios from "axios"


function App() {

  const API_URL = import.meta.env.VITE_API_URL
  const [criptos, setCriptos] = useState ()

  useEffect(() => {
    //cpn fetch
    //fetch(`${API_URL}assets`)
    
    axios.get(`${API_URL}assets`)//trae información de una URL
      //con axios no hace falta
      //.then((resp) => resp.json())// si la respuesta de la promesa es buena, la convierte en una respuesta de tipo json
      
      .then((data) =>{
        //sin axios
        //setCriptos(data.data)// ahora criptos, es un array con las criptos
        
        setCriptos(data.data.data)// con axios
      }) //cojo la data y hago algo con esa información
      .catch(() =>{
        console.error ("la peticion fallo")
      })// en caso de que falle mi peticion
  }, [])

  if (!criptos) return <span>Cargando....</span> // si criptos todavia no esta definidopone cargando

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        { criptos.map(({id,name,priceUsd}) => ( // se va a imprimir 100 veces el array de criptos, y cojo el name y el precio
          <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
        ))}
      </ol>
    </>
    
  )
}

export default App
