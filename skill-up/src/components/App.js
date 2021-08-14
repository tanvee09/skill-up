import React from 'react';
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

function App() {
  const courses = [{
    title : "Course 1",
    instructor: "I1",
    intro:"welcome"
  },
  {
    title : "Course 1",
    instructor: "I1",
    intro:"welcome"
  },
  {
    title : "Course 1",
    instructor: "I1",
    intro:"welcome"
  },
  {
    title : "Course 1",
    instructor: "I1",
    intro:"welcome"
  }]
  return (
    <Router>
      <Navbar />
      <div className='app'>
        <AuthProvider>
          <Switch>
            <Route exact path = '/discuss' component={Discussion} />
            <Route exact path = '/discuss/123' component={DiscussPost} />
            <Route exact path = '/profile' component={Profile} />
            <Route exact path="/" component={Landing}></Route>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path = '/courses' render={ (props) => <CourseList {...props} courses={courses} />} />
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
