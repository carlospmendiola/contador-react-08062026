import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const Contador = ({valor,maximo, minimo,step}) => {
  let [contador, setContador] = useState (valor)

  const handleAccion =(accion) => { switch (accion) {
  case 'incrementar':
    if (contador <= maximo - step) {
      setContador(contador = contador + step)
      }
    break
  case 'decrementar':
    if (contador >= minimo + step) {
      setContador(contador = contador - step)
    }
    break
  default: setContador(contador = valor)
  }
    // código si no coincide ningún caso
}

  // const handleIncrementar =(ev) => {
  //   if (contador <= maximo - step) {
  //     setContador(contador = contador + step)
  //   }
  // }
  // const handleDecrementar =(ev)=> {
  //   if (contador >= minimo + step) {
  //     setContador(contador = contador - step)
  //   }
  // }
  // const handleResetear =()=> {
  //     setContador(contador = valor)
  // }


  return (
    <div>
      <h2>Contador</h2>
      <h3>El valor es: {contador}</h3>

      <div>
        <button onClick={() => handleAccion('incrementar')}>
          Incrementar
        </button>  
        <button onClick={() => handleAccion('decrementar')}>
          Decrementar
        </button>   
        <button onClick={() => handleAccion('resetear')}>
        Resetear
        </button> 
      </div>
    </div>
  )
}
