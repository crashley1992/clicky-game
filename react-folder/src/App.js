import React, { Component } from 'react';
import './App.css';
import goose from './goose.json';
// Component Imports
import Jumbotron from './components/Jumbotron/Jumbotron';
import Cards from './components/Cards/Cards';
import Wrapper from './components/Wrapper/Wrapper';

class App extends Component {

  //state holds goose json data
  state = {
    goose,
    score: 0,
    highScore: 0,
    ids: []
  }
//makes goose data appear
  gooseDisplay = () => {
    this.setState({ goose });
  }

  scoreIncrement = () => {
    console.log(this.state.score);
    this.setState({ score: this.state.score + 1});
  }

  highScoreUpdate = () => {
    if(this.state.score >= this.state.highScore) {
      this.setState({ highScore: this.state.score });
    } else {
      this.setState({ score: 0 });
    }
  };

  resetGame = () => {
    this.setState({ score: 0 });
    this.setState({ ids: [] });
  }

  handleImageClick = (id) => {
    this.setState({ geese: this.shuffleGoose(goose) })
    console.log(id);

    if(!this.state.ids.includes(id)) {
      this.state.ids.push(id);
      this.scoreIncrement();
    } else {
      this.resetGame();
      this.highScoreUpdate();
    }
  }

   //shuffles goose cards randomly
shuffleGoose = goose => {
  let i = goose.length - 1;
  while( i > 0 ) {
    const j = Math.floor(Math.random() * (i + 1));
    const tempValue = goose[i];
    goose[i] = goose[j];
    goose[j] = tempValue;
    i--;
  }
  return goose;
}

  render(){
    return (
        <Wrapper>
        <Jumbotron />
        <h2 className='score'>SCORE: {this.state.score} | HIGH SCORE: {this.state.highScore}</h2>
     {this.state.goose.map(goose =>(<Cards
        id={goose.id}
        name={goose.name}
        image={goose.image}
        handleImageClick={this.handleImageClick}
        />))}
        </Wrapper>
    )
  }
}

export default App;
