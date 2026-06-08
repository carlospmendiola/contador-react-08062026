import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const Contador = ({valor,maximo, minimo,step}) => {
  let [contador, setContador] = useState (valor)

  const handleIncrementar =(ev) => {
    if (contador <= maximo - step) {
      setContador(contador = contador + step)
    }
  }
  const handleDecrementar =(ev)=> {
    if (contador >= minimo + step) {
      setContador(contador = contador - step)
    }
  }
  const handleResetear =()=> {
      setContador(contador = valor)
  }


  return (
    <div>
      <h2>Contador</h2>
      <h3>El valor es: {contador}</h3>

      <div>
        <button onClick={handleIncrementar}>
          Incrementar
        </button>  
        <button onClick={handleDecrementar}>
          Decrementar
        </button>   
        <button onClick={handleResetear}>
        Resetear
        </button> 
      </div>
    </div>
  )
}
