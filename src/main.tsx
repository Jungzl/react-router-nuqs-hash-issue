import { NuqsAdapter } from 'nuqs/adapters/react-router/v7'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import Form from './pages/form'
import Home from './pages/home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NuqsAdapter>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="form" element={<Form />} />
        </Routes>
        <App />
      </HashRouter>
    </NuqsAdapter>
  </StrictMode>
)
