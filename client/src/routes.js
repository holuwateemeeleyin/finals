import React from 'react'
import { Redirect } from "react-router-dom";
// import Home from './component/adminComponent/home'
import { AdminLayout, Plain } from './hoc/layouts'
import Admin from './component/admin'
import AdminSignIn from './containers/admin/signin';
import Register from './containers/student/register'
import Dashboard from './containers/HorizontalMenu/dashboard';
import RegisterAdmin from './containers/admin/register';
import Admins from './containers/admin/admins'
import TableEditablePage from './containers/admin/test'
import AddCourse from './containers/course/add';
import AdminAuth from './hoc/auth/admin';
import registerAdminTest from './containers/admin/registerTest'
// import CourseView from './component/course/courseView'
// import Login from './containers/student/login'
// import TestV from './component/course/text'


// student Layout
import Home from './component/Home'
import LoginTest from './containers/student/test'
import Question from './component/questions';
import StudentAuth from './hoc/auth/student'
import LoginView from './containers/student/loginView'

export default [
    {
      path: "/",
      exact: true,
      layout: Plain,
      component: () => <Redirect to="/home" />
    },
    {
        path: "/admin",
        layout: AdminLayout,
        component: AdminAuth(Admin, true)
    },
    {
      path: "/admin-signin",
      layout: Plain,
      component: AdminSignIn
  },
  {
    path: "/register",
    layout: AdminLayout,
    component: AdminAuth(Register, true)
  },
  {
    path: "/register-admin",
    layout: AdminLayout,
    component: AdminAuth(RegisterAdmin, true)
  },
  {
    path: "/testRegister",
    layout: AdminLayout,
    component: AdminAuth(registerAdminTest, true)
  },
  {
    path: "/admins",
    layout: AdminLayout,
    component: AdminAuth(Admins, true)
  },
  {
    path: "/test",
    layout: AdminLayout,
    component: TableEditablePage
  },
  {
    path: "/add-course",
    layout: AdminLayout,
    component: AdminAuth(AddCourse, true)
  },
  {
    path:"/dashboard",
    layout:AdminLayout,
    component: AdminAuth(Dashboard,true)
  },

  {
    path: "/home",
    layout: Plain,
    component: StudentAuth(Home,null)
  },
  {
    path:"/questions",
    layout:Plain,
    component:StudentAuth(Question, true)
  },
  //the loginview is also the course view

  {
    path:"/course/:id",
    layout:Plain,
    component:StudentAuth(LoginView, null)
  }

  ];
  