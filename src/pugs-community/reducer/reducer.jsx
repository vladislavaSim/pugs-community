import {combineReducers} from "redux";

// export function calc(state = 0, action) {
//     switch(action.type) {
//         case 'PLUS_ONE':
//             return state + 1
//         case 'MINUS_ONE':
//             return state - 1
//         default:
//             return state
//     }
// }
//
// export function showText(state = '', action) {
//     switch (action.type) {
//         case 'CHANGE_TEXT':
//             return state = action.text
//         default:
//             return state
//     }
// }
//
// export function showModalWindow(state = false, action) {
//     switch (action.type) {
//         case 'SHOW_MODAL':
//             return state = !state
//         default:
//             return state
//     }
// }
//
// export function switchContentToShow(state = 0, action) {
//     switch (action.type) {
//         case 'SWITCH_TAB':
//             return action.index
//         default:
//             return state
//     }
// }
// export function showNewsText(state = new Array(titles.length).fill(false), action) {
//     switch (action.type) {
//         case 'CHANGE_BOOLEAN_TO_SHOW':
//             return state.map((item, index) => {
//                 if(action.index === index) {
//                     item = !item;
//                 }
//                 return item;
//             });
//         default:
//             return state
//     }
// }
export function logInReducer(state = {username: '', password: ''}, action) {
    switch (action.type) {
        case 'LOG_IN':
            return action.userInfo;
        default:
            return state;
    }
}
export function signUpReducer(state = {email: '', username: '', password: ''}, action) {
    switch (action.type) {
        case 'SIGN_UP':
            return action.userInfo;
        default:
            return state;
    }
}
export function showSuccess(state = {show: false, text: []}, action) {
    switch (action.type) {
        case 'SHOW_SUCCESS_MESSAGE':
            return { ...state, show: !state.show }
        case 'CHANGE_SUCCESS_NAME_PAGE':
            return { ...state, text: ['signed up', 'logged in'] }
        default:
            return state
    }
}
export function toggleItemToEdit(state = false, action) {
    switch (action.type) {
        case 'EDIT_ITEM_TOGGLE':
            return state = !state
        default:
            return state
    }
}
export function selectPic(state = null, action) {
    switch (action.type) {
        case 'SET_SELECTED_PIC':
            return state = action.pic
        default:
            return state
    }
}
export function newToDo(state = '', action) {
    switch (action.type) {
        case 'ADD_NEW_TODO':
            return state = action.text
        default:
            return state
    }
}
export function newCocktail(state = {}, action) {
    switch (action.type) {
        case 'NEW_COCKTAIL':
            return state = action
        default:
            return state
    }
}
/**
 * // it is STORE(STATE) AND IT IS OBJECT
 */
export default combineReducers({
    // calc,
    // showText,
    // showModalWindow,
    // switchContentToShow,
    // showNewsText,
    logInReducer,
    signUpReducer,
    showSuccess,
    toggleItemToEdit,
    selectPic,
    newToDo
})