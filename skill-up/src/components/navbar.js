import "./navbar.css"
import { useAuth } from '../contexts/AuthContext'
import {Link} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import { useEffect, useState } from "react"
import axios from "axios"


export default function NavBar(props) {
  const { logout } = useAuth();
  const { currentUser } = useAuth();
  const [landing,setLanding] = useState('');
  
  useEffect(()=> {
    console.log(currentUser.uid)
    props.setUid(currentUser.uid)
  } , [currentUser]) 

  async function getLanding (){
    let uid = currentUser.uid;
    axios.post('http://localhost:3000/user/get', {uid: uid})
    .then(response =>{
      if(response.data.student)
        setLanding('/studentLanding');
      else
        setLanding('/instructorLanding');
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <>
    <div className="navbartop">
      <Navbar sticky="top" expand="lg" >
        <Navbar.Brand>
          <Link to="/" >
          <span className="navItem">Skill-UP</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ backgroundColor: "#fffddd" }}
        />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ml-auto">
            {currentUser &&
              (<Nav.Link>
                <Link onClick={getLanding} to={landing}>
                  <span className="navItem">My Courses</span>
                </Link>
              </Nav.Link>)
              }
            {!currentUser && <Nav.Link> <Link to="/login"> <span className="navItem">Login</span> </Link> </Nav.Link>}
            {currentUser && <Nav.Link> <Link onClick={logout} to="/"> <span className="navItem">Logout</span> </Link> </Nav.Link>}
            
            {!currentUser &&
            (<Nav.Link>
              <Link to="/signup">
                <span className="navItem">Sign Up</span>
              </Link>
            </Nav.Link>)
            }

            {currentUser &&
            (<Nav.Link>
              <Link to="/profile">
                <span className="navItem">Profile</span>
              </Link>
            </Nav.Link>)
            }

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    </>
  );
}