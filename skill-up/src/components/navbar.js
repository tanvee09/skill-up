import "./navbar.css"
import { useAuth } from '../contexts/AuthContext'
import {Link} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'


export default function NavBar() {
  const { logout } = useAuth();
  const { currentUser } = useAuth();


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
            {!currentUser && <Nav.Link> <Link to="/login"> <span className="navItem">Login</span> </Link> </Nav.Link>}
            {currentUser && <Nav.Link> <Link onClick={logout} to="/"> <span className="navItem">Logout</span> </Link> </Nav.Link>}
            
            <Nav.Link>
              <Link to="/signup">
                <span className="navItem">Sign Up</span>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    </>
  );
}