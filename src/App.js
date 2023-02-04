import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Formulario from './components/Formulario';
import Informacion from './components/Informacion';
import Footer from './components/Footer';

import { Form } from 'react-bootstrap';

import { doc, setDoC } from "firebase/firestore"




function App() {
  return (
    <div className="App">
      <div className='content-main'>
        <Header />
        <Main />
            
      </div> 
        <Informacion />
        <Formulario />
        <Footer />


    </div>
  );
}

export default App;
