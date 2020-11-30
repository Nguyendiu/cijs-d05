import logo from './logo.svg'
import './App.css';
import React from 'react';
import { Header } from './component/Header';
import { Charity } from './component/Charity'
import './asset/Search.css'
// import { data } from './Data/data'
import { Search } from './component/Search'
import { Main } from './component/Main';
// import {FilterCharity} from './component/FilterCharity'

// API key : b7d8646d-b9c6-4dfc-bf43-c82186b65531
// link api : https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=YOUR_API_KEY&nextProjectId=354
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }
  Search = (e) => {
    const keyApi = "b7d8646d-b9c6-4dfc-bf43-c82186b65531";
    const links = 'https://api.globalgiving.org/api/public/services/search/projects?'
    const url_link = `${links}api_key=${keyApi}&q=${e.target.value}`

    if (e.key == 'Enter') {
      fetch(url_link, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.setState({ projects: data.search.response.projects.project })
        })
        .catch(er => {
          console.log(e)
          this.setState({ projects: [] })

        })
    }
  }
  render() {
    return (
      <div className="App border">
        <Search search={this.search} />
        <Main projects={this.state.projects ? this.state.projects : []} />
      </div>
    );
  }
}
export default App;
