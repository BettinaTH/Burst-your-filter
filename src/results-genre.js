import React from 'react';
import { connect } from 'react-redux';
import { receiveMoviesByGenre } from './actions';
import Overview from './overview';
//import Teaser from './teaser';


class Genre extends React.Component {
    constructor() {
        super();
        this.state ={
            overviewIsVisible: false
        }
    this.showOverview = this.showOverview.bind(this);
    }
    showOverview(){
        this.setState({
            overviewIsVisible: true
        })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.state.genre != this.props.state.genre) {
            this.props.dispatch(receiveMoviesByGenre(nextProps.state.genre));
        }
    }

    render() {
        const posterURL = 'https://image.tmdb.org/t/p/w500'
        const movies = this.props.state.genreList
        console.log('const movies in Genre: ', movies)
        const movieList = movies && movies.map((each) =>
        <div key={each.id} onClick={this.showOverview} className='details'>
                <img className='pic' src= {posterURL + each.poster_path}></img>
                <div>{each.original_title}</div>
                {this.state.overviewIsVisible && <Overview each={each.overview}/>}
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
    console.log('state in Genre.js:', state);
    return{
        state
        //genre: state.genreList && state.genreList.filter(genreList =>genreList.genre_ids[0])

    }
}
export default connect(mapStateToProps)(Genre)