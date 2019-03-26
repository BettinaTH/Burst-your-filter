import React from 'react';
import { connect } from 'react-redux';
//import { popUp } from './actions';
//import Teaser from './teaser';


class Overview extends React.Component {
    constructor() {
        super();
        
    }
    


    render() {  
        
        return (
            <div>
                <h2>Here is a overview</h2>
                <p>{this.props.each.overview}</p>

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