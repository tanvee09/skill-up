import React from 'react'
import collage from '../assets/center.jpg'
import laptop from '../assets/laptop.jpg'
import carousel1 from '../assets/carousel1.jpg'
import carousel2 from '../assets/carousel2.jpg'
import carousel3 from '../assets/carousel3.jpg'
import block from '../assets/block.jpg'
import logo from '../assets/books.jpg'
import {Jumbotron, Card,Carousel} from 'react-bootstrap'
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
              Neither mushroom comes in animal or plant kingdom, nor the problems faced by mushroom farmers. <br /> In India,it is one of the most profitable agribusinesses that can be started with minimum investment and space. <br /> Mushroom farming in India is growing gradually as an alternative source of income.<br /> It is time to finally bring the much awaited 'Brown revolution' and also fight against pollution.<br />
              </p>
            </div>
          </div>
        </Jumbotron>
      </div>
      <div className="carousel-outer">
      <div className="container container_carousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="w-50"
            src={carousel1}
            alt="learning"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-50"
            src={carousel2}
            alt="Helping"
          />
          </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-50 "
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
              <div className=" pictures col-xl-4 col-md-6 col-12"><img className="features img-fluid" src={logo} alt="Lab Verification" /><br></br>
              <div className="text-center">
              mno
              <br />
              review
            </div>
              </div>
              <div className=" pictures col-xl-4 col-md-6 col-12"><img className="features img-fluid" src={logo} alt="Stubble" /><br></br>
              <div className="text-center">
              abc
              <br />
              review 1
            </div>
              </div>
              <div className="pictures col-xl-4 col-md-6 col-12"><img className="features img-fluid" src={logo} alt="Uncertain prices" /><br></br>
              <div className="text-center">
              xyz
              <br />
              review 2
            </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}