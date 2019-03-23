import React from 'react';
import axios from './axios';

import Searchbar from './searchbar';


export default class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    render() {
        return (
            <div>Here are the search results</div>
        );
    };

}