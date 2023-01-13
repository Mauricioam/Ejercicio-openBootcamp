import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'
import { useState } from 'react'

function ComponenteB({state}) {
  const [conectado,setConectado] = useState(state);
  return (
    <div>
        <h4>{conectado === true ? "Contacto En Linea" : "Contacto No Disponible"}</h4>
        <button onClick={() => setConectado(!conectado)}>{conectado === true ? "Conectado" : "Desconectado"}</button>
    </div>
  )
}

ComponenteB.propTypes = {
  state: PropTypes.bool,
}

export default ComponenteB;
