import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Formulario from './components/Formulario';
import Informacion from './components/Informacion';
import Footer from './components/Footer';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import { db } from "./firebase"
import { useState } from 'react'
import { addDoc, collection, doc, getDocs } from 'firebase/firestore'





function App() {
  const [info, setInfo] = useState()
    const [nombre, setNombre] = useState()
    const [telefono, setTelefono] = useState()
    const [correo, setCorreo] = useState()

let usuario = {
  nombre: nombre,
  telefono : telefono,
  correo : correo
}

  const getData = async (setInfo) =>{
  const snapshot = await getDocs(collection(db,"mensaje"))
  const data  = snapshot.docs.map((doc) => doc)
  setInfo(data)
}

  const createDoc = async (nombre, setNombre, telefono, setTelefono, correo, setCorreo) =>{
  await addDoc(collection(db, "mensaje"),nombre,telefono, correo)
  getData()
  setNombre("")
  setTelefono("")
  setCorreo("")
}



  return (
    <div className="App">
      <div className='content-main'>
        <Header />
        <Main />
            
      </div> 
        <Informacion />
  
        <div className='formulario-padre'>
          <div className='text-form'>
          <h4>Reservaciones</h4>
          <h5>A partir de tu contacto, te informaremos sobre, las horas disponibles como de nuestras ofertas y dias especiales.</h5>
          <input onChange={(e) => setNombre(e.target.value) } placeholder="Nombre"></input>
          <input onChange={(e) => setTelefono(e.target.value)} placeholder="Telefono"></input>
          <input onChange={(e) => setCorreo(e.target.value)} placeholder="Correo electronico"></input>
          <button onClick={()=> createDoc(usuario,setNombre,setTelefono,setCorreo)}>Enviar</button>
          <p> Nuestro telefono   +1 (555) 123-4567</p>
          <p> Nuestro correo contacto@lamiafamiglia.com</p>
          </div>
        </div>
        

        

        

        <Footer />


    </div>
  );
}

export default App;
