import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';
import  App from './app';
/// REDUX 
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import{Provider} from 'react-redux';
const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxPromise)));
//

let elem;

if (location.pathname == '/welcome') {
    elem = (
                <p>Welcome to burtst your bubble</p>
        )
} else {
    elem = (
            <Provider store =  {store}>
                <App/>
            </Provider>
    );
}



ReactDOM.render(
    elem,
    document.querySelector('main')
);

