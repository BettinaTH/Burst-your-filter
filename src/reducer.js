export default function reducer(state = {}, action){
   
    if(action.type == 'RECEIVE_MOVIES_YEAR'){
        state = Object.assign({}, state, {
            yearList: action.yearList
        });
    } 

    if(action.type == 'RECEIVE_MOVIES_GENDER'){
        state = Object.assign({}, state, {
            genderList: action.genderList
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

    if(action.type == 'SET_GENDER'){
        state = Object.assign({}, state, {
            gender: action.value
        });
    }
    if (action.type == 'OVERVIEW_VISIBILE'){
        state = Object.assign({}, state, {
            visible: action.visible
        })
    }
    if (action.type == 'OVERVIEW_HIDE'){
        state = Object.assign({}, state, {
            hide: action.hide
        })
    }
    
    return state
}
