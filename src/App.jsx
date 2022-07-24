import { useState } from 'react'
import devFilmsLogo from './assets/img/DevFilms - Logo W.png'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header devFilmsLogo={devFilmsLogo} />
    </div>
  )
}

export default App
