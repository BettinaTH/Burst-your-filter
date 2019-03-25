export default function reducer(state = {}, action){
    if(action.type == 'RECEIVE_MOVIES_YEAR'){
        state = Object.assign({}, state, {
            year: action.year
        });
    }

    
    return state
}
