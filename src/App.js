import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, Component } from 'react';
import Header from './Component/Header';
import Content from './Component/Content'
import Contents from './Component/Content';
import data from './data/data'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data
    }
    this.sortBy = this.sortBy.bind(this)

  }
  sortBy(key) {
    console.log(key)
    this.setState({
      data: data.sort((a, b) => b[key] - a[key])
    })
  }
  render() {
    return (
      <div>
        <Contents
          data={this.state.data}
          sortBy={this.sortBy}
        />
      </div>
    )
  }
}

export default App;
