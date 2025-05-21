import {useRef, useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
// top bar
import TopBar from './components/TopBar';
// cursor and utility to hide the cursor for touch devices
import CustomCursor from './components/CustomCursor';
import { isTouchDevice } from './utils/IsTouchDevice';
// carousel showcasing technology logo .svgs
import SvgCarousel from './components/SvgCarousel';

function App() {

  // hide or show the cursor based on whether or not it's a touch device
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    setShowCursor(!isTouchDevice());
  }, []);

  // adjusting the width of the carousel to match
  // the width of the text below it on the name
  // plaque
  const textRef = useRef<HTMLDivElement | null>(null);
  const [textWidth, setTextWidth] = useState<number>(0);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, []);

  // a list of svg file names for the carousel
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
      {showCursor && <CustomCursor />}
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
