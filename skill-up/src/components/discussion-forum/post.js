import React, {useState, useEffect} from 'react';
import {Row, Col, Card, Container,ListGroup, InputGroup, Form} from 'react-bootstrap';
import './../../css/discussion-forum/discussion.css'
import './../../css/discussion-forum/post.css'
import profileimg from './../../assets/profile.png'
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';

export default function DiscussPost(props) {  
  const [commentText, setCommentText] = useState('');

  const { currentUser } = useAuth();
  let uid = currentUser.uid;
  let courseId = props.match.params.cid;
  let postId = props.match.params.pid;

  const [PostContent, setPostContent] = useState('');
  const [PostTitle, setPostTitle] = useState('');
  const [Username, setUsername] = useState('');

  const [allDiscussPosts, setAllDiscussPosts] = useState([]);
  const [gotPosts, setGotPosts] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    let data = {
      comment: commentText,
      uid: uid,
      cid: courseId,
      pid: postId
    };
    axios.post('/add/comment', data)
            .then((response) => {
              console.log(response)
              let allpostsd = allDiscussPosts.slice()
              allpostsd.unshift(response.data)
              console.log(allpostsd)
              setAllDiscussPosts(allpostsd)
            })
            .catch(err => console.log('error --> ', err));
  }

  useEffect(() => {
    axios.post('/getcomments', {pid: postId})
        .then(res => {
          function compare(a, b) {
              if (a.date < b.date)
                  return 1;
              else if (a.date > b.date)
                  return -1;
              else
                  return 0;
          }
          let allposts = res.data;
          console.log(allposts)
          setAllDiscussPosts(allposts);
          setGotPosts(true);
        })
        .catch(err => console.log('error->', err));
    axios.post('/getpost', {pid: postId, uid: uid})
        .then(res => {
          setPostContent(res.data.post.content);
          setPostTitle(res.data.post.title);
          setUsername(res.data.username);
        })
        .catch(err => console.log('error->', err));
  }, [])

  function createNewPost(post) {
    if (post) {
      let {content, author, date, _id} = post;
      date = new Date(date)
      let d = date.getDate() + '/' + date.getMonth() + '/' + date.getYear()
      return <ListGroup.Item key={_id}>
        <strong className="mr-2">{author}</strong><span className="date-time">{d}</span><br/>
        {content}
      </ListGroup.Item>;
    }
    return <></>;
  }
  
  return (
    <>
    <div className="discuss post">
    <Container id="post-box">
		  <Card.Title id="username">
				<img src={profileimg} alt='Profile' className="profile-image"/> {Username}
			</Card.Title>
		  <Card>
        <Card.Header>
				  {PostTitle}
        </Card.Header>
        <Card.Body>
          <Card.Text>{PostContent}</Card.Text>
        </Card.Body>
      </Card>

      <hr/>

      <Form className="mt-4" onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Control as="textarea" placeholder="Create a comment" aria-label="Comment" onInput = {e => setCommentText(e.target.value)}/>
          <InputGroup.Append><button className="btn discussion-btn" id="submitComment" type="submit"><i className="fa fa-send-o"></i></button></InputGroup.Append>
        </InputGroup>
      </Form>



      <ListGroup variant="flush" className="mt-5">
        {gotPosts && allDiscussPosts.map(post => createNewPost(post))}
      </ListGroup>
    </Container>
    </div>
    </>
  );
};