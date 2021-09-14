// export function increment() {
//     return {type: 'PLUS_ONE'}
// }
// export function decrement() {
//     return {type: 'MINUS_ONE'}
// }
// export function changeText(text) {
//     return {type: 'CHANGE_TEXT', text}
// }
// export function showModal() {
//     return {type: 'SHOW_MODAL'}
// }
// export function switchTabAction(index) {
//     return {type: 'SWITCH_TAB', index}
// }
// export function changeBool(index) {
//     return {type: 'CHANGE_BOOLEAN_TO_SHOW', index}
// }
export function logIn(userInfo) {
    return {type: 'LOG_IN', userInfo}
}
export function signUp(userInfo) {
    return {type: 'SIGN_UP', userInfo}
}
export function showSuccessMessage() {
    return {type: 'SHOW_SUCCESS_MESSAGE'}
}
export function showSuccessName() {
    return {type: 'CHANGE_SUCCESS_NAME_PAGE'}
}
export function isEdit() {
    return {type: 'EDIT_ITEM_TOGGLE'}
}
export function setUploadedPicObj(pic) {
    return {type: 'SET_SELECTED_PIC', pic}
}
export function addNewToDo(text) {
    return {type: 'ADD_NEW_TODO', text}
}
