import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

function ContactCompenent({contact}) {
  return (
    <div>
        <h1>Nombre: {contact.name}</h1>
        <h2>Apellido : {contact.lastname}</h2>
        <h3>Email : {contact.email}</h3>
        <h4>Conectado : {contact.conected ? "Contacto En Línea" : "Contacto No Disponible"}</h4>
    </div>
  )
}

ContactCompenent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
}

export default ContactCompenent
