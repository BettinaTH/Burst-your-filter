import React from 'react';
import { connect } from 'react-redux';
import { receiveMoviesByYear, showDetailsForMovie } from './actions';



class Results extends React.Component {
    constructor() {
        super();
    
    }
    showOverview(movieID){
        this.props.dispatch(showDetailsForMovie(movieID))
    }


    componentWillReceiveProps(nextProps) {
        if(nextProps.state.year != this.props.state.year && nextProps.state.year.length == 4) {
            this.props.dispatch(receiveMoviesByYear(nextProps.state.year));
        }
    }


    render() {
        
        const posterURL = 'https://image.tmdb.org/t/p/w500'
        const movies = this.props.state.yearList
        //console.log("const movies in RESULTS: ", movies)
        const movieList = movies && movies.map((movie) =>
        <div key={movie.id} onClick={() => this.showOverview(movie.id)} className='details swing-in-top-fwd '>
                <img className='pic' src= {posterURL + movie.poster_path}></img>
                <h3 className='results-title'>{movie.original_title}</h3>
            </div>   
        )
        
        return (
            <div>
                <div className='results-heading'>
                    <h2>Here is a list of movies</h2>
                    <h4>which are older than you.</h4>
                </div>
                {movieList}} 
            </div>
        );
    };

}
const mapStateToProps = state =>{
    //console.log('state in results.js:', state);
    return{
        state
    }
}
export default connect(mapStateToProps)(Results)