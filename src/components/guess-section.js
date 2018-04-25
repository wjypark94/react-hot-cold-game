import React from 'react';

import GuessForm from './guess-form';
import Feedback from './feedback';

export default function GuessSection(props){
    const {feedback, guessCount} = props;
    return (
        <section>
            <Feedback feedback={feedback} guessCount={guessCount} />
            <GuessForm/>
        </section>
    )
}