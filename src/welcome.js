import React from 'react';
import { connect } from 'react-redux';
import Searchbar from './searchbar';


class Welcome extends React.Component {
    constructor() {
        super();
        this.submit = this.submit.bind(this);
    }

    submit(e){
        location.replace('/')
    }
    render(){
    return (
        <div className='welcome'>
            <div className='container-homepage'>
                <div className='container-col'>
                    <img className="logo-home vibrate-1" src="bubble.png" alt="bubble"/>
                    <p>BURST YOUR BUBBLE</p>
                </div>
                <div>
                    <Searchbar/>
                </div>  
                    <button onClick={this.submit}>burst your bubble</button>
            </div>
        </div>
    );
}
}
const mapStateToProps = state =>{
    return{
        state
    }
}
export default connect(mapStateToProps)(Welcome)