import React from 'react';
import Footer from './footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { AuthProvider } from "../contexts/AuthContext";
import Discussion from './discussion-forum/discussion';
import DiscussPost from './discussion-forum/post';
import Navbar from './navbar'
import './App.css';
import Landing from "./landing";
import CourseList from './courses/CourseList';
import Login from './Login';
import SignUp from './SignUp';
import Profile from './profile/profilepage';
import Course from './courses/Course';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='app'>
        <AuthProvider>
          <Switch>
            <Route exact path = '/discuss' component={Discussion} />
            <Route exact path = '/discuss/:id' component={DiscussPost} />
            <Route exact path = '/profile' component={Profile} />
            <Route exact path="/" component={Landing}></Route>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route exact path = '/courses' component={CourseList} />
            <Route exact path = '/courses/:id' component={Course} />
          </Switch>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
