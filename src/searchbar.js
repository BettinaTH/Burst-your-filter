import React from 'react';
import { connect } from 'react-redux';
import { setParam } from './actions';

class Searchbar extends React.Component {
    constructor() {
        super();
       
        this.handleChange = this.handleChange.bind(this);

        }
        
        handleChange(e) {
            this.props.dispatch(setParam(e.target.name, e.target.value))
            sessionStorage.setItem(e.target.name, e.target.value)
            //console.log('STORAGE: ', sessionStorage)
        } 
      


    render() {
        return (
            <div className='searchbar'>
                <div className='search-category'>
                    <h3 className='question'>In what year were you born?</h3>
                    <input name="year" placeholder="e.g. 1982" onChange={this.handleChange} value={this.props.state.year}/>
                </div>
                <div className='search-category'>
                    <h3 className='question'>What are your favourite  movie genre?</h3>
                    <input name="genre" placeholder="e.g. Comedy" onChange={this.handleChange} value={this.props.state.genre}/>
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