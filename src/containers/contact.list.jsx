import React from 'react'
import ComponenteB from '../components/pure/contact';
import { Contact } from '../models/contact.class'

export default function ComponenteA() {

    const defaultContact = new Contact("Mauricio","Murdoch","mauricio@mail.com",true);

  return (
    <div>
        <h2>Contacto:</h2>
        <div>
            <ComponenteB contact={defaultContact}/>
        </div>
    </div>
  )
}
