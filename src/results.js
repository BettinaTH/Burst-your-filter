import React from 'react';
import { connect } from 'react-redux';
import { receiveMoviesByYear } from './actions';
import Teaser from './teaser';


class Results extends React.Component {
    constructor() {
        super();
    }

    componentDidMount(){
        console.log('Mount in results.js')
        this.props.dispatch(receiveMoviesByYear());

    }

    render() {
        const posterURL = 'https://image.tmdb.org/t/p/w500'
        const movies = this.props.state.year
        console.log('const movies in results: ', movies)
        const movieList = movies && movies.map((each) =>
        <div key={each.id} className='details'>
                <img className='pic' src= {posterURL + each.poster_path}></img>
                <div>{each.original_title}</div>
            </div>
            
        )
        
        return (
            <div>
                <h2>Here are the search results</h2>
                {movieList}
            </div>
        );
    };

}
const mapStateToProps = state =>{
    console.log('state in results.js:', state);
    return{
        state

    }
}
export default connect(mapStateToProps)(Results)