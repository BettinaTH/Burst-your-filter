import React from 'react';
//import { HashRouter, Route } from 'react-router-dom';
import Searchbar from './searchbar';


export function Welcome() {
    return (
        <div className='welcome'>
            <div className='container-homepage'>
                <div className='container-col'>
                    <img className="logo-home" src="bubble.jpg" alt="bubble"/>
                    <p>BURST YOUR BUBBLE</p>
                </div>
                <div>
                    <Searchbar/>
                </div>
            </div>
        </div>
    );
}