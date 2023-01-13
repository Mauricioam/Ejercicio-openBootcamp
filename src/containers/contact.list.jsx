import React from 'react'
import ContactCompenent from '../components/pure/contact';
import { Contact } from '../models/contact.class'

export default function ContactListComponent() {

    const defaultContact = new Contact("Mauricio","Murdoch","mauricio@mail.com",true);

  return (
    <div>
        <h2>Contacto:</h2>
        <div>
            <ContactCompenent contact={defaultContact}/>
        </div>
    </div>
  )
}