import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app/App";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Other from "./pages/Other";
import Home from "./pages/Home";
import './index.css'


const root = document.getElementById("root")

ReactDOM.createRoot(root).render(
  <StrictMode>
    
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />}></Route>
        <Route path='projects' element={<Projects />}></Route>
        <Route path='resume' element={<Resume />}></Route>
        <Route path ='other' element={<Other />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>

  </StrictMode>);
