import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/styles.css'
import {Toaster} from 'sonner'

createRoot(document.getElementById('root')).render(
    <>
    <Toaster richColors/>
     <App />
    </>
    
)
