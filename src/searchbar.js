import React from 'react';
//import axios from './axios';
//import { Link } from 'react-router-dom';

export default class Searchbar extends React.Component {
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
            <div className='searchbar'>
                <div>
                    <div>In wich year were you born?</div>
                    <input name="your birth year" placeholder="e.g. 1982"onChange={this.handleChange}/>
                </div>
                <div>
                    <div>What is your gender</div>
                    <input name="gender" placeholder="femals/male"onChange={this.handleChange}/>
                </div>
                <div>
                    <div>What is your country of cultural heritage</div>
                    <input name="country" placeholder="Germany"onChange={this.handleChange}/>
                </div>
                <button onClick={this.submit}>burst your bubble</button>
            </div>
        )
    };
}