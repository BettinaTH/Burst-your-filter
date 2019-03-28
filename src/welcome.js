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
                    <h2 className='letters'>BURST YOUR BUBBLE</h2>
                </div>
                <div className='container-row'>
                    <div>
                        <Searchbar/>
                    </div>
                </div>
                <div className='container-row'>
                <button className='call-to-action' onClick={this.submit}>Burst your bubble</button>
                </div>
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