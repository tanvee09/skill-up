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
import AddLecture from './courses/AddLecture';
import Course from './courses/Course';
import 'tachyons';
import InstructorLanding from './InstructorLanding';
import PrivateRoute from './PrivateRoute';
import AddCourse from './AddCourse';

function App() {
  const courses = {};
  return (
    <Router>
      
      <div className='app'>
        <AuthProvider>
        <Navbar />
          <Switch>
            <Route exact path = '/discuss' component={Discussion} />
            <Route exact path = '/discuss/:id' component={DiscussPost} />
            <Route exact path = '/profile' component={Profile} />
            <Route exact path = '/lecture/add' component={AddLecture} />
            <Route exact path="/" component={Landing}></Route>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route exact path = '/courses' component={CourseList} />
            <Route exact path = '/courses/:id' component={Course} />
            <Route path = '/courses' render={ (props) => <CourseList {...props} courses={courses} />} />
            <PrivateRoute path="/instructorLanding" component={InstructorLanding} />
            <PrivateRoute path="/addCourse" component={AddCourse} />
          </Switch>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
