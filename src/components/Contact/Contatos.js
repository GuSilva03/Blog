import React, { useState } from 'react'

import { PaddingContainer, Heading, FlexContainer, Button } from '../../Styles/GlobalStyles'
import { ContactForm, FormLabel,FormInput} from './ContactStyles';
import emailjs from '@emailjs/browser';
function Contacts() {
    const [name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[message, setMessage] = useState('')
    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            alert("INFOS")
            return;
        }
        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
       emailjs.send('service_tqfdl36', 'template_gquucxw', templateParams, '2vCbRvOWuYfLdKLJ6').then((response) => {
        console.log('EMAIL ENVIADO', response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
       }, (err) => {
        console.log('ERRO', err)
       })
        alert("Email Enviado!")
    }
  return (
    <PaddingContainer id='Contacts' top="5%" bottom="10%" >
        <Heading as="h4" size='h4' align='center'>
            MEUS CONTATOS
        </Heading>
        <Heading as='h2' size="h2" align='center' top='0.5rem'>FALE COMIGO AQUI!
        </Heading>
        <PaddingContainer top='3rem'>
            <FlexContainer justify='center'>
                <ContactForm onSubmit={sendEmail}>
                    <PaddingContainer bottom="2rem">
                        <FormLabel as='h2' size='h2' >Nome:</FormLabel>
                        <FormInput type='text'
                         placeholder='Digite seu Nome'
                         onChange={(e) => setName(e.target.value)} 
                         value={name}>
                         </FormInput>
                    </PaddingContainer>
                    <PaddingContainer bottom="2rem">
                        <FormLabel as='h3' size='h3'>Email:</FormLabel>
                        <FormInput type='email' 
                        placeholder='Digite seu Email' 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email}>
                        </FormInput>
                    </PaddingContainer>
                    <PaddingContainer bottom="2rem">
                        <FormLabel as='h3' size='h3' placeholder='Mensageem'>Message:</FormLabel>
                        <FormInput as='textarea' 
                        placeholder='Digite sua Mensagem' 
                        onChange={(e) => setMessage(e.target.value)} 
                        value={message}></FormInput>
                    </PaddingContainer>
                    <FlexContainer justify='center'>
                        <Button type='submit' value='Enviar'>ENVIE SUA MENSAGEM!</Button>
                    </FlexContainer>
                </ContactForm>
            </FlexContainer>
        </PaddingContainer>
    </PaddingContainer>
  )
}

export default Contacts;
