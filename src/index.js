import React from "react";
import  {createRoot}  from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'



const contenedor = document.getElementById('root');
//ReactDOM.render(__Que elemento renderea__, __donde lo renderea__)
//los componentes se define mediante etiquetas
const root = createRoot(contenedor)
root.render(<App/>)
              
  