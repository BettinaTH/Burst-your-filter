import React from 'react';
import axios from './axios';

import Searchbar from './searchbar';
import Results from './results';
//import Gender from './results-gender';
import Genre from './results-genre';


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
            <div>
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

        )
    };
}