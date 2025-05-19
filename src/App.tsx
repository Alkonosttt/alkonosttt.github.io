import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState<'dark'| 'light'>('light');

  useEffect(()=> {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  },[theme]);
  
  return (
    <>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}/>
      <p>Portfolio Website</p>
    </>
  )
}

export default App
