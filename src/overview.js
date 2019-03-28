import React from 'react';
import { connect } from 'react-redux';
import { showDetailsForMovie } from './actions';


class Overview extends React.Component {
    constructor() {
        super();

        this.close = this.close.bind(this);
    }
    
    close() {
        this.props.dispatch(showDetailsForMovie())
    }

    render() {  

        const posterURL = 'https://image.tmdb.org/t/p/w500'

        if(!this.props.state.movie) {
            return ""
        }
        
        return (
            <div className="overview">
                <div className="overview-background" onClick={this.close}></div>
                <div className="overview-content swing-in-top-fwd">
                    <img className="backdrop-image" src= {posterURL + this.props.state.movie.backdrop_path}></img>
                    <img className="poster-image" src= {posterURL + this.props.state.movie.poster_path}></img>
                    <div className="overview-details">
                        <div className="overview-text">
                            <h2>{this.props.state.movie.original_title}</h2>
                            <p>{this.props.state.movie.overview}</p>
                            <div className='streaming-partner'>
                            <a href="https://www.netflix.com" target="_blank"><img className='partner-logo' src='netflix.jpg'></img></a>
                            <a href="https://www.amazon.com" target="_blank"><img className='partner-logo' src='prime.jpg'></img></a>
                            <a href="https://www.itunes.com" target="_blank"><img className='partner-logo' src='itunes.png'></img></a>
                            </div>
                        </div>
                        <div className="overview-rating">
                            <img className="overview-star"src="yellow-star.png"></img>
                            <h4 className="overview-number-rating">{this.props.state.movie.vote_average}</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

}
const mapStateToProps = state =>{
    console.log('state in overview', state);
    return{
        state
  
    }
}
export default connect(mapStateToProps)(Overview)