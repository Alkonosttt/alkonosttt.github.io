import {useRef, useEffect, useState} from 'react';
import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'
import TopBar from './components/TopBar'
import CustomCursor from './components/CustomCursor';
import SvgCarousel from './components/SvgCarousel';

function App() {
  
  const textRef = useRef<HTMLDivElement | null>(null);
  const [textWidth, setTextWidth] = useState<number>(0);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, []);

  const svgFiles = [
    'javascript.svg',
    'typescript.svg',
    'flutter.svg',
    'react.svg',
    'html.svg',
    'css.svg',
    'php.svg',
    'python.svg',
    'cpp.svg',
    'bash.svg',
    'docker.svg',
    'django.svg',
    'firebase.svg',
  ];

  return (
    <Router>
      <CustomCursor/>      
      <TopBar/>
      <div id='namePlaque'>
        <SvgCarousel width={textWidth} icons={svgFiles} />
        <div ref={textRef}>          
          <h4>mobile developer | web developer</h4>
        </div>
        <h1>ANNA V.</h1>
      </div>
    </Router>
  )
}

export default App
