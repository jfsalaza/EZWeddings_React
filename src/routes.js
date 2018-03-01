import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
//import AboutPage from './components/about/AboutPage';
//import CoursesPage from './components/course/CoursesPage';
import Login from './components/login/Login';
import MyAccount from './components/my_account/MyAccount';
//import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import MyPartners from './components/my_partners/MyPartners';
import Partner from './components/partner/Partner';
import Settings from './components/settings/Settings';
import Register from './components/register/Register';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="login" component={Login} />
    <Route path="my_account" component={MyAccount} />
    <Route path="my_partners" component={MyPartners} />
    <Route path="partner" component={Partner} />
    <Route path="settings" component={Settings} />
    <Route path="register" component={Register} />
  </Route>
);
