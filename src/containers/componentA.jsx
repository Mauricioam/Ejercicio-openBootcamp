import React from 'react'
import ComponenteB from '../components/pure/componenteB';
import { Contact } from '../models/contact.class'

export default function ComponenteA() {

    const defaultContact = new Contact("Mauricio","Murdoch","mauricio@mail.com",true);

  return (
    <div>
        <h2>Contacto:</h2>
        <h1>Nombre: {defaultContact.name}</h1>
        <h2>Apellido : {defaultContact.lastname}</h2>
        <h3>Email : {defaultContact.email}</h3>
        <div>
            <ComponenteB state={true}/>
        </div>
    </div>
  )
}
