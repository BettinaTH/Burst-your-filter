import React from 'react';
import axios from './axios';

import Searchbar from './searchbar';
import Results from './results';


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
    
        // submit(e) {
        //     axios.post('/login', {
        //         email: this.email,
        //         password: this.password
        //     }).then(({data}) => {
        //         if (data.success) {
        //             location.replace('/results');
        //             } else {
        //                 this.setState({
        //                     error: true
        //                 });
        //             }
        //         })
        //     };


    render() {
        return (
            <div>
                <div>
                <Searchbar/>
                </div>
                <Results/>
            </div>

        )
    };
}