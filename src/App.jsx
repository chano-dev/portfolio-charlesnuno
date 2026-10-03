import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Communicator from './pages/Communicator'
import Developer from './pages/Developer'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/co" element={<Communicator />} />
      <Route path="/pr" element={<Developer />} />
    </Routes>
  )
}