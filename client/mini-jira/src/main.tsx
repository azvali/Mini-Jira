import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './screens/App.tsx'
import Login from './screens/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Login/>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<App/>}/>
      </Routes>
    </BrowserRouter> */}
  </StrictMode>,
)
