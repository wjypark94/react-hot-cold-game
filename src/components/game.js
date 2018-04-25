import React from 'react';

import Header from './header';
import GuessSection from './guess-section';

export default class Game extends React.Component {
    render(){
        return (
            <div>
                <Header/>
                <GuessSection/>
            </div>
        );
    }
}

