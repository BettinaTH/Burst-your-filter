import React from 'react';
import axios from './axios';
import Welcome from './welcome';
import Searchbar from './searchbar';
import Results from './results';
import Genre from './results-genre';
import { BrowserRouter, Route } from 'react-router-dom';
import welcome from './welcome';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        //this.submit = this.submit.bind(this);
        }
        
        handleChange(e) {
            this[e.target.name] = e.target.value;
        }
    
    render() {
        return (
        <BrowserRouter>
        <div className= 'bg-pan-bottom'>
            <Route
                exact
                path="/start"
                render={() => (
                        <Welcome/>
                    )}
            />
            <Route
                exact
                path="/"
                render={() => (
                <div>
                    <div className='nav-bar'>
                        <img className="logo-home vibrate-1" src="bubble.png" alt="bubble"/>
                        <div className='word-order'>
                            <h2 className='letters'>BURST</h2><h2 className='letters'>YOUR</h2><h2 className='letters'>BUBBLE</h2>
                        </div>
                    </div>
                    <div>
                        <Searchbar/>
                    </div>
                    <div className='result-container'>
                        <div className='result-col'>
                            <Results/>
                        </div>
                        <div className='result-col'>
                            <Genre/>
                        </div>
                    </div>
                </div>
                )}
            />
        </div>
        </BrowserRouter>
        )
    };
}