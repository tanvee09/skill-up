import React from 'react';
import Footer from './footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { AuthProvider , useAuth } from "../contexts/AuthContext";
import Discussion from './discussion-forum/discussion';
import DiscussPost from './discussion-forum/post';
import Navbar from './navbar'
import './App.css';
import Landing from "./landing";
import CourseList from './courses/CourseList';
import Login from './Login';
import SignUp from './SignUp';
import Profile from './profile/profilepage';
import AddLecture from './courses/AddLecture';
import Course from './courses/Course';
import 'tachyons';
import InstructorLanding from './InstructorLanding';
import StudentLanding from './StudentLanding';
import PrivateRoute from './PrivateRoute';
import AddCourse from './AddCourse';
import { useState } from 'react';

function App() {

  const [uid, setUid] = useState() 
 /*  const result  = useAuth();
  const {currentUser} = ''
  if (result)
    currentUser = result.currentUser
  console.log(currentUser , result) */
  const courses = {};
  return (
    <Router>
      
      <div className='app'>
        <AuthProvider>
        <Navbar uid = {uid} setUid={setUid} />
          <Switch>
            <Route exact path = '/courses/:cid/discuss' component={Discussion} />
            <Route exact path = '/courses/:cid/discuss/:pid' component={DiscussPost} />
            <Route exact path = '/profile' component={Profile} />
            <Route exact path = '/courses/:cid/addlecture' component={AddLecture} />
            <Route exact path="/" component={Landing}></Route>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route exact path = '/courses' component={CourseList} />
            <Route exact path = '/courses/:id' component={Course} />
            <PrivateRoute exact path = '/courses/:id' component={ (props) => { <Course {...props}  uid={uid} />} } />
            <PrivateRoute path="/instructorLanding" component={InstructorLanding} />
            <PrivateRoute path="/studentLanding" component={StudentLanding} />
            <PrivateRoute path="/addCourse" component={AddCourse} />
          </Switch>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
