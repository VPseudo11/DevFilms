import { useState } from 'react'
import devFilmsLogo from './assets/img/DevFilms - Logo W.png'
import './App.css'
import Header from './components/Header'
import SlideShow from './components/jsx/SlideShow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header devFilmsLogo={devFilmsLogo} />
      <SlideShow />
    </div>
  )
}

export default App
