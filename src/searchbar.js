import React from 'react';
import axios from './axios';
import { connect } from 'react-redux';
import { setParam, setGenre } from './actions';
//import { Link } from 'react-router-dom';

class Searchbar extends React.Component {
    constructor() {
        super();
       
        this.handleChange = this.handleChange.bind(this);
        //this.handleGenre = this.handleGenre.bind(this);

        }
        
        handleChange(e) {
            this.props.dispatch(setParam(e.target.name, e.target.value))
            sessionStorage.setItem(e.target.name, e.target.value)
            console.log('STORAGE: ', sessionStorage)
        } 
      


    render() {
        return (
            <div className='searchbar'>
                <div>
                    <div>In wich year were you born?</div>
                    <input name="year" placeholder="e.g. 1982" onChange={this.handleChange}/>
                </div>
                <div>
                    <div>What is/ are your favourite genre</div>
                    <input name="genre" placeholder="comedy" onChange={this.handleChange}/>
                </div>
            </div>
        )
    };
}
const mapStateToProps = state => {
    return{
        state
    }
}
export default connect(mapStateToProps)(Searchbar)