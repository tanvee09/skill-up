import React from 'react'
import collage from '../assets/center.jpg'
import review1 from '../assets/review1.png'
import review2 from '../assets/review2.png'
import review3 from '../assets/review3.png'
import carousel1 from '../assets/carousel1.jpg'
import carousel2 from '../assets/carousel2.jpg'
import carousel3 from '../assets/carousel3.jpg'
import block from '../assets/block.jpg'
import logo from '../assets/books.jpg'
import {Jumbotron, Card,Carousel,Button} from 'react-bootstrap'
import {Link } from "react-router-dom"
import './landing.css'
export default function landing() {
  return (
    //set photo of background
    <div className="landing w-100 align-content-center justify-content-center">
      <div className="top">
        
      </div>
      <div className="div2" >
        <Jumbotron >
          <div className="jumbo">
            <div className="brown">
              {/* <img  src={logo} alt="some pic" /> */}
            </div>
            <div className="mFarm">
              <h1 className="text-center text-uppercase">Via Topic</h1>
              <p className="text-center">
              A non profit rural upliftment project based on providing essential skills to the rural people deprived of stable internet connection by extending our medium of sharing the relevant content through messaging. The provided courses would provide multiple options to people to explore various domains and push them into finding new ways of making a living, and thus reducing the socio-economical gap between the city and rural population<br />
              </p>
              <Link to="/courses">
                <Button>
                  Explore Courses
                </Button>
              </Link>
            </div>
          </div>
        </Jumbotron>
      </div>
      <div className="carousel-outer">
      <div className="container container_carousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="w-100"
            src={carousel1}
            alt="learning"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src={carousel2}
            alt="Helping"
          />
          </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100 "
            src={carousel3}
            alt="Lab Inspection"
          />
          </Carousel.Item>
        </Carousel>
      </div>
      </div>
      <div>
        <Card className="cards">
          <Card.Header className="card-header">
            <div className="h1 text-uppercase">Reviews</div>
          </Card.Header>
          <Card.Body className="card2">
            <div
              className="row"
            >
              <div className=" pictures col-xl-4 col-md-6 col-12 "><img className="features img-fluid" src={review1} alt="Lab Verification" /><br></br>
              </div>
              <div className=" pictures col-xl-4 col-md-6 col-12 "><img className="features img-fluid" src={review2} alt="Stubble" /><br></br>
              </div>
              <div className="pictures col-xl-4 col-md-6 col-12"><img className="features img-fluid" src={review3} alt="Uncertain prices" /><br></br>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}