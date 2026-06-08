import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const Contador = ({valor}) => {
  let [contador, setContador] = useState (valor)

  const handleIncrementar =(ev) => {
    if (contador < 50) {
      setContador(contador = contador + 1)
    }
  }
  const handleDecrementar =()=> {
    if (contador > 0) {
      setContador(contador = contador - 1)
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
