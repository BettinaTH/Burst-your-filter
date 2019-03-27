export default function reducer(state = {}, action){
   
    if(action.type == 'RECEIVE_MOVIES_YEAR'){
        state = Object.assign({}, state, {
            yearList: action.yearList
        });
    } 


    if(action.type == 'RECEIVE_MOVIES_GENRE'){
        state = Object.assign({}, state, {
            genreList: action.genreList
        });
    } 

    if(action.type == 'SET_YEAR'){
        state = Object.assign({}, state, {
            year: action.value
        });
    }

    if(action.type == 'SET_GENRE'){
        state = Object.assign({}, state, {
            genre: action.value
        });
    }
   
    return state
}
