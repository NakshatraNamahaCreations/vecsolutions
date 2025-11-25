import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Career from './pages/Career'
import GloveBox from './pages/GloveBox'
import VacuumInductionFurnace from './pages/VacuumInductionFurnace'
import VacuumArcMeltingFurnace from './pages/VacuumArcMeltingFurnace'
import ThermalEvaporatorSystem from './pages/ThermalEvaporatorSystem'
import RFDCSputteringSystem from './pages/RFDCSputteringSystem'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/glove-box" element={<GloveBox />} />
        <Route path="/vacuum-induction-furnace" element={<VacuumInductionFurnace />} />
        <Route path="/vacuum-arc-melting-furnace" element={<VacuumArcMeltingFurnace />} />
        <Route path="/thermal-evaporator-system" element={<ThermalEvaporatorSystem />} />
        <Route path="/rf-dc-sputtering-system" element={<RFDCSputteringSystem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
