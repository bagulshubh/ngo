import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'; 
import Navbar from './Components/Comman/Navbar.jsx';

createRoot(document.getElementById('root')).render(

 <BrowserRouter>
      <Navbar></Navbar>
       <App></App>
    </BrowserRouter>
    )
