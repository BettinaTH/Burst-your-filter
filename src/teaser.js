import React from 'react';
import { connect } from 'react-redux';
import { receiveMoviesByYear } from './actions';

class Teaser extends React.Component {

    constructor() {
        super();

    }

    render() {
        return (
            <div className="card">
                <h6>{each.title}</h6>
                <img src={each.poster_path}></img>
                <p>{each.overview}</p>
            </div>
        );
    };

}
const mapStateToProps = state =>{
    console.log('state in teaser.js:', state);
    return{
        state

    }
}
export default connect(mapStateToProps)(Teaser)