import React from 'react';

import './top-nav.css';

export default function TopNav(props){
    return (
        <nav> 
            <ul>
                <li>
                    <a href="#what" className="what">What?</a>
                </li>
                <li>
                    <a href="#feedback" className="new">+ New Game</a>
                </li>
                <li>
                    <a href="#get-status" class="get-status">
                        Hear state of game
                    </a>
                </li>
            </ul>
        </nav>
    );
}