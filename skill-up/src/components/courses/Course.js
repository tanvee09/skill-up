import {ListGroup, Form, Nav, Container , Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../../css/discussion-forum/discussion.css'
import './../../css/discussion-forum/post.css'
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useAuth} from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";


export default function Course(props){
    
    const {currentUser} = useAuth()
    const [course, setcourse] = useState([]);
    const [isInstructor, setisInstructor] = useState(false);
    const [enrolled, setEnrolled] = useState(false);
    const [lecturelist, setlecturelist] = useState([])
    
    let history = useHistory();

    async function enroll (e){
      e.preventDefault();
      try{
        console.log("posting")
        let data = {
          cid: props.match.params.id,
          uid: currentUser.uid
        }
        const response = await axios.post('/enroll', data);
        console.log(response);
        history.push('/studentLanding');
      }
      catch (err){
          console.log(err);
      }
              // .then((response) => {
              //   console.log(response);
              //   history.push('/courses/' + props.match.params.id)
              // })
              // .catch(err => console.log('error --> ', err));
    }

    const [ar, setar] = useState('')

    useEffect(async () => {
        const { id } = props.match.params;
        if (currentUser) {
          const uid = currentUser.uid;
          fetch(`/api/courses/${id}/${uid}`)
          .then(response => response.json())
          .then( response => {
              console.log(response)
              setcourse(response.course)
              setisInstructor(response.isInstructor)
              setEnrolled(response.enrolled)
              
              let arr = []
              let lectures = response.course.Lectures
              
              if(lectures && lectures.length > 0){
                let a = lectures.map( (lecture) => {
                  return (
                    <ListGroup.Item>
                      <strong className="mr-2">{lecture.title}</strong><span className="date-time">{lecture.date}</span><br/>
                        {lecture.content}
                    </ListGroup.Item>
                    )
                })

                console.log('aaaa', a)

                arr = <> 
                  <ListGroup variant="flush" className="mt-5">
                    {a}
                  </ListGroup>
                </>
                console.log("array", arr)
              }
              console.log('arr', arr)
              setar(arr);
            })
        } else {
          fetch(`/api/coursespreview/${id}`)
          .then(response => response.json())
          .then( response => {
              console.log(response)
              setcourse(response.course)
              
              let arr = []
              let lectures = response.course.Lectures
              
              if(lectures && lectures.length > 0){
                let a = lectures.map( (lecture) => {
                  return (
                    <ListGroup.Item>
                      <strong className="mr-2">{lecture.title}</strong><span className="date-time">{lecture.date}</span><br/>
                        {lecture.content}
                    </ListGroup.Item>
                    )
                })

                console.log('aaaa', a)

                arr = <> 
                  <ListGroup variant="flush" className="mt-5">
                    {a}
                  </ListGroup>
                </>
                console.log("array", arr)
              }
              console.log('arr', arr)
              setar(arr);
            })
        }
        
    }, [])
    
    return (
      <>
      <div className="discuss post">
        <Container id="post-box">
          <Card.Title id="username">
          Instructor: {course.inst_name}
          </Card.Title>
          <Card>
            <Card.Header>
              {course.title}
            </Card.Header>
            <Card.Body>
              <Card.Text>{course.introduction}</Card.Text>
            </Card.Body>
          </Card>
          {(isInstructor || enrolled) && <Link to={'/courses/' + props.match.params.id + '/discuss'}><button className='btn discussion-btn mt-2' id='submitComment'>Go to Discussion Forum</button></Link>}
          <hr/>
          {isInstructor && <Link to={'/courses/' + props.match.params.id + '/addlecture'}><button className='btn discussion-btn mt-2' id='submitComment' type='submit'>Add Lecture</button></Link>}
          {!isInstructor && !enrolled && <Form className='my-4' onSubmit={enroll}><button className='btn discussion-btn mt-2' id='submitComment' type='submit'>Enroll for the course</button></Form>}
          {(isInstructor || enrolled) && ar}
        </Container>
      </div>
    </>
    )
}

// import React from 'react';
// import {ListGroup, Form, Nav, Container , Card} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './../../css/discussion-forum/discussion.css'
// import './../../css/discussion-forum/post.css'
// import axios from 'axios';

// class Course extends React.Component {   
  
//   constructor (props) {
//       super(props)
//       this.state = {
//           title : '',
//           isInstructor : '',
//           introduction : '',
//           Lectures : [],
//           instructor : '',
//       }
//   }

//   componentDidMount()
//   {
//     console.log(this.props)
//     const { id } = this.props.match.params;
//     // const uid = this.props.uid
//     let uid = 'jSyyKVoIpeYdAbh9UqgCwNTtHtn2'
//     fetch(`/api/courses/${id}/${uid}`)
//     .then(response => response.json())
//     .then( response => {
//       console.log(response)
//         this.setState({ 
//           title: response.course.title, 
//           introduction : response.course.introduction,
//           Lectures : response.course.Lectures,
//           instructor : response.course.inst_name,
//           enrolled : response.course.numEnrolled,
//           isInstructor : response.isInstructor
//         })
//       })
//   }

//   render() {
//     const {isInstructor , title, instructor, introduction, Lectures} = this.state;
//     let arr = ""
//     if(Lectures && Lectures.length > 0){
//         arr = Lectures.map( (lecture) => {
//         return (
//           <ListGroup.Item>
//             <strong className="mr-2">{lecture.title}</strong><span className="date-time">{lecture.date}</span><br/>
//               {lecture.content}
//           </ListGroup.Item>
//           )
//       })
//     }
//     else
//     {
//       arr = <Form className='my-4' ><button className='btn discussion-btn mt-2' id='submitComment' type='submit'>Enroll for the course</button></Form>
//     }
//     const form = '';
//     const handleSubmit = (e)=>{
//       e.preventDefault();
//       console.log("posting")
//       axios.post('/enroll')
//               .then(response => console.log(response))
//               .catch(err => console.log('error --> ', err));
//     }
//     if (isInstructor){ 
//       form = "<Link to='/addLecture'> addLecture </Link>"
//     }
    
//     return (
//       <>
//       <div className="discuss post">
//         <Container id="post-box">
//           <Card.Title id="username">
//             Instructor : {instructor}
//           </Card.Title>
//           <Card>
//             <Card.Header>
//               {title}
//             </Card.Header>
//             <Card.Body>
//               <Card.Text>{introduction}</Card.Text>
//             </Card.Body>
//           </Card>

//           <hr/>
//           {form}
//           <p className="mt-5"><strong>Lectures</strong></p>
//           <ListGroup variant="flush" className="mt-2">
//             {arr}
//           </ListGroup>
//         </Container>
//       </div>
//     </>
//     )
//   }
// };
// export default Course;