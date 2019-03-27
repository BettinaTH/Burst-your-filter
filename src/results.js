import React from 'react';
import { connect } from 'react-redux';
import { receiveMoviesByYear } from './actions';
import Overview from './overview';


class Results extends React.Component {
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
        if(nextProps.state.year != this.props.state.year && nextProps.state.year.length == 4) {
            this.props.dispatch(receiveMoviesByYear(nextProps.state.year));
        }
    }

// set property of uploader to each movie
    render() {
        
        const posterURL = 'https://image.tmdb.org/t/p/w500'
        const movies = this.props.state.yearList
        
        const movieList = movies && movies.map((each) =>
        <div key={each.id} onClick={this.showUploader} className='details'>
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
    console.log('state in results.js:', state);
    return{
        state
        //year: state.yearList
    }
}
export default connect(mapStateToProps)(Results)