import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'
import TopBar from './components/TopBar'
import CustomCursor from './components/CustomCursor';

function App() {
  
  return (
    <Router>
      <CustomCursor/>
      <TopBar/>
      <div id='namePlaque'>
        <h2>mobile developer | web developer</h2>
        <h1>ANNA V.</h1>
      </div>
    </Router>
  )
}

export default App
