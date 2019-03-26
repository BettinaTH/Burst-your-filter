import React from 'react';
import { connect } from 'react-redux';
import { receiveMoviesByGender } from './actions';
//import Teaser from './teaser';


class Gender extends React.Component {
    constructor() {
        super();
    }

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.state.year != this.props.state.year && nextProps.state.year.length == 4) {
    //         this.props.dispatch(receiveMoviesByYear(nextProps.state.year));
    //     }
    // }

    componentDidMount(){
        console.log('Mount in Gender.js')
        this.props.dispatch(receiveMoviesByGender());

    }

    render() {
        //const posterURL = 'https://image.tmdb.org/t/p/w500'
        const movies = this.props.state.genderList
        console.log('const movies in Gender: ', movies)
        const movieList = movies && movies.map((each) =>
        <div key={each.id} className='details'>
                <img className='pic' src= {each.poster_path}></img>
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
    console.log('state in Gender.js:', state);
    return{
        
        state

    }
}
export default connect(mapStateToProps)(Gender)