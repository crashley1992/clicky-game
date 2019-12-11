import React, { Component } from 'react';
import './App.css';
import goose from './goose.json';
// Component Imports
import Jumbotron from './components/Jumbotron/Jumbotron';
import Cards from './components/Cards/Cards';
import Wrapper from './components/Wrapper/Wrapper';


class App extends Component {

  state = {
    goose
  }

  gooseDisplay = () => {
    this.setState({goose});
  }

  render(){
    return (
        <Wrapper>
        <Jumbotron />
        {this.state.goose.map(goose =>(<Cards
        id={goose.id}
        name={goose.name}
        image={goose.image}
        />))}
        </Wrapper>
    )
  }
}

export default App;
