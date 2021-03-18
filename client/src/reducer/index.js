import { combineReducers } from "redux";
import admin from './admin_reducer' 
import courses from './course_reducer'
import student from './student'

const rootReducer = combineReducers ({
    admin,
    student,
    courses
})

export default rootReducer