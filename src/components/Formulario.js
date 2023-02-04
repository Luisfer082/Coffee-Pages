import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Formulario() {
  return (
  <div className='formulario-padre'>
    <Form className='cont-forms'> 

    <Form.Group className="mb-3" controlId="Nombre">
      <Form.Label>Nombre</Form.Label>
      <Form.Control type="nombre" placeholder="Nombre del usuario" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasic">
      <Form.Label>Email</Form.Label>
      <Form.Control type="Email" placeholder="Enter email" />
    </Form.Group>  

    <Form.Group className="mb-3" controlId="formBasic">
      <Form.Label >Numero de telefono</Form.Label>
      <Form.Control type="Numero de telefono" placeholder="Numero de telefono" />
    </Form.Group>

    <Button variant="primary" type="submit">
      Enviar
    </Button>
  </Form>
  

  <div className='text-form'>
  <h4>Reservaciones</h4>
  <h5>A partir de tu contacto, te informaremos sobre, las horas disponibles como de nuestras ofertas y dias especiales.</h5>
  <p> Nuestro telefono   +1 (555) 123-4567</p>
  <p> Nuestro correo contacto@lamiafamiglia.com</p>
  </div>

  
</div>

  )
}

export default Formulario