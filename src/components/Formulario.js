import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Formulario() {
  return (
  <div className='formulario-padre'>
    <Form className='cont-forms'> 
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Nombre</Form.Label>
      <Form.Control type="email" placeholder="Nombre del usuario" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control type="Email" placeholder="Enter email" />
    </Form.Group>  

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Numero de telefono</Form.Label>
      <Form.Control type="Numero de telefono" placeholder="Numero de telefono" />
    </Form.Group>

    <Button variant="primary" type="submit">
      Enviar
    </Button>
  </Form>

  <div className='text-form'>
  <h4>Reserva con nosotros</h4>
  <h5>A partir de tu contacto, nos comunicaremos contigo para revisar fechas y disponibilidad de horarios.</h5>
  <p> Nuestro telefono   +1 (555) 123-4567</p>
  <p> Nuestro correo contacto@lamiafamiglia.com</p>
  </div>

  
</div>

  )
}

export default Formulario