import logo from './logo.svg'
import './App.css';
import React from 'react';
import {Header} from './component/Header';
import './asset/Search.css'
import './Data/data'
// API key : b7d8646d-b9c6-4dfc-bf43-c82186b65531
// link api : https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=YOUR_API_KEY&nextProjectId=354
class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      
     data:[]
    }  
  }
  handleKeyPress(e){
    if(e.key=='Enter'){
      this.Search();
    }
  }
  Search(){
  
  }
  render(){
    return(
      <div>
      <div className='Header'>
        <Header/>
      </div>
      <div className='Search'>
        <input></input>
        <button>Search</button>
      </div>
    </div>
    )
  }
  
  
}
export default App;
