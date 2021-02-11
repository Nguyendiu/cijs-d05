import logo from './logo.svg';
import './App.css';
import React from 'react'
class App extends React.Component {
  state = {
    name: 'circle'
  }
  startRoll = () => {
    this.setState({
      name: 'circle start-rotate'
    });
    setTimeout(() => {
      this.setState({
        name: 'circle start-rotate stop-rotate'
      })
    }, Math.floor(Math.random() * 20000) + 1)

  }
  render() {
    return (
      <div>
        <div className='arrow'></div>
        <ul className={this.state.name}>
          <li>
            <div className='text' contentEditable='true' spellCheck='false'>10k</div>
          </li>
          <li>
            <div className='text' contentEditable='true' spellCheck='false'>20k</div>
          </li>
          <li>
            <div className='text' contentEditable='true' spellCheck='false'>10k</div>
          </li>
          <li>
            <div className='text' contentEditable='true' spellCheck='false'><img src='https://hayhochoi.vn/uploads/news/wyswyg/2019_05/1556963513cq8miejnsa.gif'></img></div>
          </li>
          <li>
            <div className='text' contentEditable='true' spellCheck='false'>20k</div>
          </li>
          <li>
            <div className='text' contentEditable='true' spellCheck='false'>10k</div>
          </li>
          <li>
            <div className='text' contentEditable='true' spellCheck='false'><img src='https://hayhochoi.vn/uploads/news/wyswyg/2019_05/1556971280i0h7eqahud.gif'></img></div>
          </li>
          <li>
            <div className='text' contentEditable='true' spellCheck='false'>100k</div>
          </li>
          <li>
            <div className='text' contentEditable='true' spellCheck='false'><img width='20%' src='https://hayhochoi.vn/uploads/news/wyswyg/2019_05/1556971277hh7hrnudwo.gif'></img></div>
          </li>
          <li>
            <div className='text' contentEditable='true' spellCheck='false'>50k</div>
          </li>
          <li>
            <div className='text' contentEditable='true' spellCheck='false'>10k</div>

          </li>
          <li>
            <div className='text' contentEditable='true' spellCheck='false'>20k</div>
          </li>

        </ul>
        <button className='roll' onClick={this.startRoll}>Quay</button>
      </div >
    )
  }
}

export default App;
