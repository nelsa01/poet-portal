import React, { useState } from "react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/sea-green';
import "./middle.css";
import "./ContentSlider.css";

import SlideImageOne from "./assets/profile1.jpeg";
import SlideImageTwo from "./assets/profile2.jpeg";
import SlideImageThree from "./assets/profile3.jpeg";
import Heart from "./assets/heart.svg";
import Comment from "./assets/comment.svg";
import homeimg from '../../../resources/homeimg.PNG'
// import Upper from '../Upper/Upper'

import ArrowLeft from "./assets/arrow-left.svg";
import ArrowRight from "./assets/arrow-right.svg";

function ContentSlider() {
  const [isHover, setHover] = useState(true);
  let options={ perPage:2, height: `350px`, gap:1, pagination: true }
    
  // let data = [
  //   {
  //     title: "",
  //     summary: "",
  //     authorImage: "",
  //     authorName: "",


  //   }
  // ];

  function addActiveStyles() {
    setHover(val => {
      return false;

    });

    console.log("add active", isHover);
  }

  function removeActiveStyles() {
    setHover(val => {
      return true;
    });
    console.log("remove active", isHover);
  }

  return (
    // <Upper />
      <div className="middleDiv">
        <div className='landingpage'>
<div className='picture'>
<img src={homeimg} alt="homeimg" />
<p>Poetry connects you with 
  people all around the globe.</p>   
       
   

</div><br />
<h5>Popular Poems</h5>
    </div>
          <Splide
          className="mySlide"
          hasTrack={ false }
          options={options}
          aria-labelledby="reactivity-example-heading"
        >
          <SplideTrack>
          <SplideSlide>
            
            <div onMouseLeave={removeActiveStyles} onMouseOver={addActiveStyles} className={isHover? "noactive poemContainer" : "active poemContainer"}>
              <div className="poemContainerTitle">
                <h1>How Do I Love Thee (Sonnet 43), How Do I Love Thee (Sonnet 43)How Do I Love Thee (Sonnet 43)</h1>
              </div>

              <div className="poemContainerContent">
                <p>
                "How do I love thee? Let me count the ways.I love thee to the depth and breadth and heightMy soul can reach, when feeling out of sight
  For the ends of Being and ideal GraceI love thee to the level of everyday's
                </p>
              </div>

              <div className="poemContainerAuthor">
                <div><h3>By</h3> <img src={SlideImageOne} alt="writter" /> <h3>Username</h3></div>
              </div>

              <div className="poemContainerStats">
                <div>
                  <img className="noactiveImg" src={Heart} alt="heart"/>
                  <h4>200</h4>
                </div>
                <div>
                  <img className="noactiveImg" src={Comment} alt="comment"/>
                  <h4>100</h4>
                </div>
              </div>
            </div>
            
          </SplideSlide>
          <SplideSlide>
            
          <div onMouseLeave={removeActiveStyles} onMouseOver={addActiveStyles} className={isHover? "noactive poemContainer" : "active poemContainer"}>
              <div className="poemContainerTitle">
                <h1>How Do I Love Thee (Sonnet 43), How Do I Love Thee (Sonnet 43)How Do I Love Thee (Sonnet 43)</h1>
              </div>

              <div className="poemContainerContent">
                <p>
                "How do I love thee? Let me count the ways.I love thee to the depth and breadth and heightMy soul can reach, when feeling out of sight
  For the ends of Being and ideal GraceI love thee to the level of everyday's
                </p>
              </div>

              <div className="poemContainerAuthor">
                <div><h3>By</h3> <img src={SlideImageOne} alt="writter" /> <h3>Username</h3></div>
              </div>

              <div className="poemContainerStats">
                <div>
                  <img className="noactiveImg" src={Heart} alt="heart"/>
                  <h4>200</h4>
                </div>
                <div>
                  <img className="noactiveImg" src={Comment} alt="comment"/>
                  <h4>100</h4>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            
          <div onMouseLeave={removeActiveStyles} onMouseOver={addActiveStyles} className={isHover? "noactive poemContainer" : "active poemContainer"}>
              <div className="poemContainerTitle">
                <h1>How Do I Love Thee (Sonnet 43), How Do I Love Thee (Sonnet 43)How Do I Love Thee (Sonnet 43)</h1>
              </div>

              <div className="poemContainerContent">
                <p>
                "How do I love thee? Let me count the ways.I love thee to the depth and breadth and heightMy soul can reach, when feeling out of sight
  For the ends of Being and ideal GraceI love thee to the level of everyday's
                </p>
              </div>

              <div className="poemContainerAuthor">
                <div><h3>By</h3> <img src={SlideImageOne} alt="writter" /> <h3>Username</h3></div>
              </div>

              <div className="poemContainerStats">
                <div>
                  <img className="noactiveImg" src={Heart} alt="heart"/>
                  <h4>200</h4>
                </div>
                <div>
                  <img className="noactiveImg" src={Comment} alt="comment"/>
                  <h4>100</h4>
                </div>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            
            <div onMouseLeave={removeActiveStyles} onMouseOver={addActiveStyles} className={isHover? "noactive poemContainer" : "active poemContainer"}>
              <div className="poemContainerTitle">
                <h1>How Do I Love Thee (Sonnet 43), How Do I Love Thee (Sonnet 43)How Do I Love Thee (Sonnet 43)</h1>
              </div>

              <div className="poemContainerContent">
                <p>
                "How do I love thee? Let me count the ways.I love thee to the depth and breadth and heightMy soul can reach, when feeling out of sight
  For the ends of Being and ideal GraceI love thee to the level of everyday's
                </p>
              </div>

              <div className="poemContainerAuthor">
                <div><h3>By</h3> <img src={SlideImageOne} alt="writter" /> <h3>Username</h3></div>
              </div>

              <div className="poemContainerStats">
                <div>
                  <img className="noactiveImg" src={Heart} alt="heart"/>
                  <h4>200</h4>
                </div>
                <div>
                  <img className="noactiveImg" src={Comment} alt="comment"/>
                  <h4>100</h4>
                </div>
              </div>
            </div>
            
          </SplideSlide>
          <SplideSlide>
            
          <div onMouseLeave={removeActiveStyles} onMouseOver={addActiveStyles} className={isHover? "noactive poemContainer" : "active poemContainer"}>
              <div className="poemContainerTitle">
                <h1>How Do I Love Thee (Sonnet 43), How Do I Love Thee (Sonnet 43)How Do I Love Thee (Sonnet 43)</h1>
              </div>

              <div className="poemContainerContent">
                <p>
                "How do I love thee? Let me count the ways.I love thee to the depth and breadth and heightMy soul can reach, when feeling out of sight
  For the ends of Being and ideal GraceI love thee to the level of everyday's
                </p>
              </div>

              <div className="poemContainerAuthor">
                <div><h3>By</h3> <img src={SlideImageOne} alt="writter" /> <h3>Username</h3></div>
              </div>

              <div className="poemContainerStats">
                <div>
                  <img className="noactiveImg" src={Heart} alt="heart"/>
                  <h4>200</h4>
                </div>
                <div>
                  <img className="noactiveImg" src={Comment} alt="comment"/>
                  <h4>100</h4>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            
          <div onMouseLeave={removeActiveStyles} onMouseOver={addActiveStyles} className={isHover? "noactive poemContainer" : "active poemContainer"}>
              <div className="poemContainerTitle">
                <h1>How Do I Love Thee (Sonnet 43), How Do I Love Thee (Sonnet 43)How Do I Love Thee (Sonnet 43)</h1>
              </div>

              <div className="poemContainerContent">
                <p>
                "How do I love thee? Let me count the ways.I love thee to the depth and breadth and heightMy soul can reach, when feeling out of sight
  For the ends of Being and ideal GraceI love thee to the level of everyday's
                </p>
              </div>

              <div className="poemContainerAuthor">
                <div><h3>By</h3> <img src={SlideImageOne} alt="writter" /> <h3>Username</h3></div>
              </div>

              <div className="poemContainerStats">
                <div>
                  <img className="noactiveImg" src={Heart} alt="heart"/>
                  <h4>200</h4>
                </div>
                <div>
                  <img className="noactiveImg" src={Comment} alt="comment"/>
                  <h4>100</h4>
                </div>
              </div>
            </div>
          </SplideSlide>

          </SplideTrack>
          

          <div id="slideControls" className="splide__arrows">
          <button className="splide__arrow--prev"><img src={ArrowLeft} alt="left"/></button>
          <button className="splide__arrow--next"><img src={ArrowRight} alt="right"/></button>
          
    </div>
      </Splide>

      </div>
  );
}

export default ContentSlider;
