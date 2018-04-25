import React from 'react';

import Header from './header';
import GuessSection from './guess-section';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer:  Math.round(Math.random() * 100) + 1
        };
        
    }
    render(){
        const {feedback, guesses, auralStatus} = this.state;
        const guessCount = guesses.length; 
        return (
            <div>
                <Header/>
                <GuessSection/>
            </div>
        );
    }
}

