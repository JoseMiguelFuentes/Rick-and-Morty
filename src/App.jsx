import { useState } from 'react'

import './App.css'
import mainBackground from './images/mainBackground.png'
import Names from './images/Names.svg'
import Location from './Components/Location'


function App() {

  
  
  return (
    <div className="App">
      <img className='main__bg' src={mainBackground} alt="image" />
      <a href="https://www.youtube.com/watch?v=d3knEUBM2Rk&list=PLctu_t5fR-ZQkmfGdgIiq54kMWMnYHNks" target="_blank"> <img id='names' src={Names} alt="names" /></a>
      
      <header className="App-header">
      </header>
        
        <Location/>
        
    </div>
  )
}

export default App
