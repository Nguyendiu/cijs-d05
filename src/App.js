
import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './Components/Header';
import Game from './Components/Question'
export function App() {

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then((data) => setItems(data.results))
  }, [])

  return (
    <div>
      <Header />
      <Game items={items} setItems={setItems} />
    </div>
  )
}

export default App;
