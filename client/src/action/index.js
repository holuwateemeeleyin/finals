import axios from 'axios'


// Admin 
export function signInAdmin({adminID,password}) {
    const request = axios.post('/api/admin/login', {adminID,password})
                    .then(response =>response.data)
        return {
            type:'ADMIN_LOGIN',
            payload:request
        }
    
}

export function adminAuth (){
    const request = axios.get('/api/admin/adminAuth')
                    .then(response => response.data);

    return {
        type:'ADMIN_AUTH',
        payload:request
    }
}


// export function registerAdmin(admin,adminList){
//     const request = axios.post(`/api/admin/register-admin`,admin)

//     return (dispatch) =>{
//         request.then(({data})=>{
//             // let admins = data.success ? [...adminList, data.admin]:adminList
//             let admins = data.success ? [data.admin]:admin

//             let response = {
//                 success:data.success,
//                 admins
//             }
//             dispatch({
//                 type:'ADMIN_REGISTER',
//                 payload:response
//             })
//         })
//     }
// }

export function registerAdmin(admin){
    const request = axios.post(`/api/admin/register-admin`,admin)
        .then(response=>response.data);

    return {
        type:'ADMIN_REGISTER',
        payload:request
    }
}

export function getAdmins(){
    const request = axios.get(`/api/admin/all`)
                   .then(response => response.data)

    return {
        type:'GET_ADMIN',
        payload:request
    }
}


// Course
export function addCourse(course){
    const request = axios.post('/api/course/add-course',course)
        .then(response=>response.data);

    return {
        type:'ADD_COURSE',
        payload:request
    }
}

export function clearNewCourse(){
    return {
        type:'CLEAR_NEWCOURSE',
        payload:{}
    }
}


export function getCourses(
    limit = 10,
    start = 0,
    order = 'desc',
    list = ''
){
    
    const request = axios.get(`/api/course/all-courses?limit=${limit}&skip=${start}&order=${order}`)
                    .then(response=> {
                            if(list){
                                return[...list,...response.data]
                            }else{
                                return response.data

                            }
                        }
                   )
    return {
        type: 'GET_COURSES',
        payload:request
    }
    
}

export function getCourseView (id){
    const request = axios.get(`/api/course/getcourse?id=${id}`)

    return (dispatch) => {
        request.then(({data}) => {
            let course = data;
            // console.log(course);
            let response = {
                course
            }
            // console.log(response);
            dispatch ({
                type: 'GET_COURSE_VIEW',
                payload: response
            })
        })
    }
}


// Student

export function register(student,studentList){
    const request = axios.post(`/api/student/register`,student)

    return (dispatch) =>{
        request.then(({data})=>{
            // let students = data.success ? [...studentList, data.student]:studentList
            let response = {
                success:data.success,
                students:[...studentList,data.student]
            }
            dispatch({
                type:'STUDENT_REGISTER',
                payload:response
            })
        })
    }
}
export function signInStudent({matric, password}){
    const request = axios.post(`/api/student/sign-in`,{matric,password})
                    .then(response => response.data)
        return {
            type:'STUDENT_LOGIN',
            payload: request
        }
}


export function loginTest({matric,password}){
    const request = axios.post('/api/student/sign-in', {matric,password})
                    .then(response => response.data)
    return {
        type: 'TEST_LOGIN',
        payload:request
    }
}

export function studentAuth () {
    const request = axios.get('/api/student/auth')
                    .then (response => response.data)
    return {
        type: 'STUDENT_AUTH',
        payload:request
    }
}