import React, { useState, useEffect } from 'react';
import { Router, Link } from '@reach/router';
import './App.css';
import Home from './views/home';
import Play from './views/play';
import HowToPlay from './views/howToPlay';
import LogReg from './views/logReg';
import UserContext from './contexts/userContext';


function App() {
  const suites = ['Heart', 'Spade', 'Diamond', 'Clover'];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const [Deck, setDeck] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const getDeck = () => {
    let deck = [];
    for (var i = 0; i < suites.length; i++) {
      for (var j = 0; j < values.length; j++) {
        if (i == 0 || i == 2) {
          let card = { Value: values[j], Suite: suites[i], Color: 'Red' };
          deck.push(card);
        }
        else {
          let card = { Value: values[j], Suite: suites[i], Color: 'Black' };
          deck.push(card);
        }
      }
    }
    for (var i = 0; i < 1000; i++) {
      let location1 = Math.floor(Math.random() * deck.length);
      let location2 = Math.floor(Math.random() * deck.length);
      let temp = deck[location1];

      deck[location1] = deck[location2];
      deck[location2] = temp;
    }
    setDeck(deck);
  }

  useEffect(() => {
    getDeck();
  }, []);
  return (
    <div className="App">
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Router>
          <Home path="/" />
          <Play path="/play"
            Deck={Deck}
          />
          <HowToPlay path="/howToPlay" />
          <LogReg path="/logReg" />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
