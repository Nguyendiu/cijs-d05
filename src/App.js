import logo from './logo.svg'
import './App.css';
import React from 'react';
import { Header } from './component/Header';
import {Charity} from './component/Charity'
import './asset/Search.css'
// import { data } from './Data/data'
import { SearchBar } from './component/SearchBar'
import { Main } from './component/Main';
// import {FilterCharity} from './component/FilterCharity'

// API key : b7d8646d-b9c6-4dfc-bf43-c82186b65531
// link api : https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=YOUR_API_KEY&nextProjectId=354
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[],
    }

  }
  Search = (e) => {
    if (e.key === 'Enter') {
      const keyApi = "b7d8646d-b9c6-4dfc-bf43-c82186b65531";
      const links = 'https://api.globalgiving.org/api/public/services/search/projects?'
      const url_link =`${links}api_key=${keyApi}&q=${e.target.value}`
      fetch(`${url_link}`,
        {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          }
        })
        .then(res => {
          if (res.ok) {
            return res.json()
          }
          throw new Error('404')
          
        })
        .then(data=> {
          console.log(data)
        }).catch(er => {
          console.error(er)
        })
        
    }
    
  }
  render() {

    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <SearchBar Search={this.Search} />
        </div>
           {/* <Main charitys={this.state.charitys?this.state.charitys:[] }/> */}
           {/* <img src={search.response.projects.project.img.imgLink}/> */}
           {/* <Charity/> */}
      </div>

    )
  }
}
export default App;
