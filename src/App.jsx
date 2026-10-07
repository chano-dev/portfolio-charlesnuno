import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Communicator from './pages/Communicator.jsx'
import Developer from './pages/Developer.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/co" element={<Communicator />} />
      <Route path="/pr" element={<Developer />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}