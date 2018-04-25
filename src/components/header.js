import React from 'react';
import TopNav from './top-nav';

import './header.css';
import GuessSection from './guess-section';

export default function Header(props) {
    return (
        <header>
            <TopNav/>
            <h1> Hot or Cold </h1>
        </header>
    )
}