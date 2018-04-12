import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Card from './components/card/Card';
import DrawButton from './components/drawButton/DrawButton';
// eslint-disable-next-line
import CardEditor from './components/cardEditor/CardEditor';
import Footer from './components/footer/Footer';
import firebase from 'firebase/app';
import 'firebase/database';


import { DB_CONFIG } from './config/firebase/db_config';

class App extends Component {
  constructor(props){
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('cards');
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [],
      currentCard: {}
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;

    this.database.on('child_added', snap => {
      currentCards.push({
        id: snap.key,
        question: snap.val().question,
        answer: snap.val().answer,
      })
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })

    })

  }

  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];

    return (card);
  }

updateCard(){
  const currentCards = this.state.cards;
  this.setState({
    currentCard: this.getRandomCard(currentCards)
  })
}

  render() {
    return (
     <div className="wrapper">
        
      <BrowserRouter>
        <div>
          <Header />

            <div className="main-content">
                  <div className="workspace">
                    <Route path="/cardDeck/:cardDeckID"/>
                      <div className="cardRow">
                        <Card 
                            question={this.state.currentCard.question}
                            answer={this.state.currentCard.answer}
                         />
                      </div>
                      <div className="buttonRow">
                        <DrawButton drawCard={this.updateCard}/>    
                      </div>
                    </div> 

                    <div className="cardEditorRow">
                        <CardEditor />
                    </div>   

                                
          </div>
        </div>
      </BrowserRouter>
        
        <Footer />
      </div>    
    );
  }
}

export default App;
