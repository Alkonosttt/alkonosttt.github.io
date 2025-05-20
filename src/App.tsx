import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'

function App() {
  
  return (
    <Router>
      <TopBar/>
      <h1>Portfolio Website</h1>
    </Router>
  )
}

export default App
