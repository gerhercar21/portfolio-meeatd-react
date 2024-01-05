import React from 'react';
import {Footer} from './Footer.js';
import {Banner} from './Banner.js';
import {Card} from './Card.js';
import {Presentation} from './Presentation.js';

export function Home() {
    return (
        <main>
            <br></br>
            <Presentation />
            <Banner />
            <Card />
        </main>   
    );
}