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
            <div className='text' contentEditable='true' spellCheck='false'>mất lượt</div>
          </li>
          <li>
            <div className='text' contentEditable='true' spellCheck='false'>20k</div>
          </li>
          <li>
            <div className='text' contentEditable='true' spellCheck='false'>10k</div>
          </li>
          <li>
            <div className='text' contentEditable='true' spellCheck='false'>0</div>
          </li>
          <li>
            <div className='text' contentEditable='true' spellCheck='false'>100k</div>
          </li>
          <li>
            <div className='text' contentEditable='true' spellCheck='false'>mất lượt</div>
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
      </div>
    )
  }
}

export default App;
