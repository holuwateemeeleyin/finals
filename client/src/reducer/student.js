export default function(state={},action){
    switch(action.type){
        case 'TEST_LOGIN':
            return {...state, signin:action.payload}
        case 'STUDENT_LOGIN':
            return{...state,signin:action.payload}
        case 'STUDENT_AUTH':
            return{...state,signin:action.payload}
        case 'GET_STUDENT':
            return {...state,students:action.payload}
        case 'STUDENT_REGISTER':
            return {
                ...state,
                register:action.payload.success,
                students:action.payload.students
            }
        default:
            return state;
    }
}