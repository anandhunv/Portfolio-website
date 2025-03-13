import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import ProjectFilter from './pages/ProjectFilter.jsx'
import ProjectPage from './pages/ProjectPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects" element={<ProjectFilter />} />
      <Route path="/project" element={<ProjectPage />} />


      
    </Routes>  
  </BrowserRouter>
,
)
