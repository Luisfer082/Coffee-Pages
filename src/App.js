import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Formulario from './components/Formulario';
import Informacion from './components/Informacion';
import Footer from './components/Footer';


import { db } from "./firebase"
import { useState } from 'react'
import { addDoc, collection, doc, getDocs } from 'firebase/firestore'





function App() {
  const [info, setInfo] = useState()
    const [nombre, setNombre] = useState()

let usuario = {nombre: nombre }

  const getData = async (setInfo) =>{
  const snapshot = await getDocs(collection(db,"mesaje"))
  const data  = snapshot.docs.map((doc) => doc)
  setInfo(data)
}

  const createDoc = async (nombre, setNombre) =>{
  await addDoc(collection(db, "mensaje"),nombre)
  getData()
  setNombre("")
}



  return (
    <div className="App">
      <div className='content-main'>
        <Header />
        <Main />
            
      </div> 
        <Informacion />
        <Formulario>
          
        </Formulario>
        <div className='formulario'>
          <button onClick={()=> createDoc(usuario,setNombre)}>Enviar</button>
          <input onChange={(e) => setNombre(e.target.value)}></input>
        </div>


        <Footer />


    </div>
  );
}

export default App;
