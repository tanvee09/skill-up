import React, {useState, useEffect} from 'react';
import {Card, Container, Nav, Form, Navbar} from 'react-bootstrap';
import './../../css/discussion-forum/discussion.css'
import profileimg from './../../assets/profile.png'
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import {Link} from 'react-router-dom';

export default function Discussion(props) { 
  const { currentUser } = useAuth();
  let uid = currentUser.uid;
  let courseId = props.match.params.cid;
  const [addPost, setAddPost] = useState('');
  var PostTitle = '';
  var PostContent = '';
  const [allDiscussPosts, setAllDiscussPosts] = useState([]);
  const [gotPosts, setGotPosts] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    let data = {
      title: PostTitle,
      content: PostContent,
      cid: courseId,
      uid: uid
    };
    axios.post('add/post', data)
            .then((response) => {
              console.log(response);
              let allpostsd = allDiscussPosts.slice()
              allpostsd.unshift(response.data)
              console.log(allpostsd)
              setAllDiscussPosts(allpostsd)
            })
            .catch(err => console.log('error --> ', err));
  }

  function getAddPost() {
    if (addPost == '')
      setAddPost(<>
        <hr/>
        <Form className="my-4" onSubmit={handleSubmit}>
          <Form.Control className="mr-sm-2 mb-2" placeholder="Post Title" aria-label="Post Title " onInput={e => PostTitle = e.target.value}/>
          <Form.Control className="mr-sm-2" as="textarea" placeholder="Post Content" aria-label="Post Content" onInput={e => PostContent = e.target.value}/>
          <button className="btn discussion-btn mt-2" id="submitComment" type="submit">Create Post</button>
        </Form>
        <hr/>
      </>);
    else
      setAddPost('');
  }

  function createNewPost(post) {
    if (post) {
      let {title, content, author, cid} = post;
      let pid = post._id;
      let link = `discuss/${pid}`;
      return <Card key={pid}>
        <Card.Header>
          <img src={profileimg} alt='Profile' className="profile-image"/> {author}
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <Link to={link} className="btn discussion-btn">Go to discussion</Link>
        </Card.Body>
      </Card>;
    }
    return <></>;
  }

  useEffect(() => {
    axios.post('getposts', {cid: courseId})
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
    
}, [])

  return (
    <>
    <div className="discuss">
    <Container id="post-box">
      <Navbar id="discussion-heading" className="justify-content-between">
        <h1 className="navbar-brand"><strong>Discussion Forum</strong></h1>
        <Nav>
          <button className="postAddBtn" onClick={getAddPost}>+</button>
        </Nav>
      </Navbar>

      {addPost}

      {gotPosts && allDiscussPosts.map(post => createNewPost(post))}
    </Container>
    </div>
    </>
  );
};