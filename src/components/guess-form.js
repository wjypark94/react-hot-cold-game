import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {

    render(){

        return (
            <form>
                <input
                  type="number"
                  name="userGuess"
                  className="text"
                />
                <button
                  type="submit"
                  name="submit"
                  className="button"
                >
                Guess
                </button>
            </form>
        )
    }
}