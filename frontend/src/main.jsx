
// main.jsx
import { createRoot } from 'react-dom/client'

// Import Bootstrap CSS (must be before your own CSS)
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
)
