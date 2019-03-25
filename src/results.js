import React from 'react';
import axios from './axios';
import { connect } from 'react-redux';


class Results extends React.Component {
    constructor() {
        super();
        this.state = {
            movies : []
        }
    }

    componentDidMount(){
        console.log('Mount in results.js')
        axios.get('https://api.themoviedb.org/3/movie/166428', {
            params: {
                api_key: '77da04c403c5708cfdf55c397aabb35c'
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        }); 
    }

    render() {

        // let movieList = [];

        // for ( const [index, movie] of this.state.movies.entries()){
        //     movieList.push(<li>{movie.name}</li>)
        // }
        return (
            <div>
                <h2>Here are the search results</h2>
    
            </div>
        );
    };

}
const mapStateToProps = state =>{
    console.log('state in results.js:');
    return{
        state

    }
}
export default connect(mapStateToProps)(Results)