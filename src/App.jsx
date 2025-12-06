import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TechStudio from './pages/TechStudio';
import AIML from './pages/solutions/AIMl';
import CloudMigration from './pages/solutions/CloudMigration';
import VDI from './pages/solutions/VDI';
import GenerativeAI from './pages/solutions/GenerativeAI';
import ManagedCloudServices from './pages/solutions/ManagedCloudServices';
import Modernization from './pages/solutions/Modernization';
import Pinpoint from './pages/solutions/Pinpoint';
import Contect from './pages/Contect';
import Resource from './pages/Resource';
import Footer from './pages/Footer';
const App = () => {
  return (
   <>
    <Router>
      <div className="min-h-screen bg-white text-black dark:bg-[rgb(7,7,7)] dark:text-white transition-all duration-300">
        <Navbar  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech-studio" element={<TechStudio />} />
          <Route path="/solutions/aiml" element={<AIML />} />
          <Route path="/solutions/cloud-migration" element={<CloudMigration />} />
          <Route path="/solutions/vdi" element={<VDI />} />
          <Route path="/solutions/generative-ai" element={<GenerativeAI />} />
          <Route path="/solutions/managed-cloud-services" element={<ManagedCloudServices />} />
          <Route path="/solutions/modernization" element={<Modernization />} />
          <Route path="/solutions/pinpoint" element={<Pinpoint />} />
          <Route path='/contect' element={<Contect/>}/>
          <Route path='/resource' element={<Resource/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
   </>
  )
}

export default App
