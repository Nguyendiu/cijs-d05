import logo from './logo.svg'
import './App.css';
import React from 'react';
import {Header} from './component/Header';
import './asset/Search.css'
import  {data} from './Data/data'
import {SearchBar} from './component/SearchBar'
// import {FilterCharity} from './component/FilterCharity'

// API key : b7d8646d-b9c6-4dfc-bf43-c82186b65531
// link api : https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=YOUR_API_KEY&nextProjectId=354
class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={

     data:[]

    }  
    // this.Search = this.Search.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // handleKeyPress(e){
  //   if(e.key ==='Enter'){
  //     this.Search();
      
  //   }
  //   this.setState({searchText:e.target.value})
  // }
  // handleInput(e){
  //   this.setState({searchText:e.target.value})
  // }
  
  // Search(){
  // //   const query = this.state.query
  // //   const key = "b7d8646d-b9c6-4dfc-bf43-c82186b65531"
  // //  const BASE_URL ='https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=YOUR_API_KEY&nextProjectId=354'
  // //  console.log(BASE_URL);
  // //  fetch (BASE_URL,{method:'GET'})
  // //  .then(res => res.json())
  // //  .then(result =>{})
  
  // console.log(data)
  // }
  render(){
    // let a = FilterCharity(this.state.searchText.data)
    // const {data}= this.state
    return(
      <div>
      <div className='Header'>
        <Header/>
      </div>
      <div className='Search'>
        <SearchBar  />
      </div>
    </div>
    )
  }
  
  
}
export default App;
