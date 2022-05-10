import React from "react";
import netflix from "../image/netflix.png";
import "./Hero.css";
import tvImage from "../image/tv.png";
import chidrenImage from "../image/cartoon.png"
import Footer from "../Footer";
const Hero = () => {
  return (
    <div className="hero">
      <section className="hero_section">
        <div className="hero_fadeTop">
          <div className="hero_navbar row">
            <img
              className="hero_logo col-3 col-lg-1"
              src={netflix}
              alt="Netflix logo"
            />
            <div className="hero_navbar_left col-9 col-lg-3 col-md-3 ">
              <div className="footer_select">
                <i
                  className="fa fa-globe"
                  style={{ fontSize: "24px", color: "white" }}
                ></i>
                <select name="lang" id="lang">
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                </select>
              </div>
              <button className="hero_signin">Sign In</button>
            </div>
          </div>
        </div>
        <div className="hero_content">
          <div className="hero_content_items">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <br></br>
            <h5>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h5>
            <br></br>
            <div className="hero_email_div row">
              <input
                type="text"
                className="hero_email col-lg-7 col-md-12 col-sm-12"
                placeholder="Email address"
              />
              <button className="hero_get_started col-lg-4 col-md-5 col-sm-4">
                Get Started &gt;
              </button>
            </div>
          </div>
        </div>
        <div className="hero_fadeBottom"></div>
      </section>

      <hr className="hero_hr"></hr>

      <section
        className="section_tv"
        style={{
          minHeight: "50vh",
          width: "99%",
          marginTop: '150px'

        }}
      >
        <div className="row justify-content-center  p-0 h-100">
          <div className="col-12 col-lg-6 col-md-6 p-0 section_tv_col">
            <div
              style={{
                width: "65%",
              }}
            >
              <h1
                style={{
                  fontWeight: "bolder",
                }}
              >
                Enjoy on your TV.
              </h1>
              <h4
                style={{
                  fontWeight: "400",
                }}
              >
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </h4>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-md-6 p-0 section_tv_col">
            {/* <img className="img-fluid h-75" src={tvImage} alt="tv" style={{
              maxHeight: '400px',
            }}>
            </img> */}
            <div className="img-fluid section_tv_image" >
              <img className="img-fluid h-50" src={tvImage} alt="tv" style={{
                maxHeight: '400px',
            }}>
            </img>
            </div>
            <video className = "section_tv_video" autoPlay muted>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
              </video> 
          </div>
        </div>
      </section>
      <hr className="hero_hr"></hr>

      <section
        className="section_tv"
        style={{
          minHeight: "50vh",
          width: "99%",
          marginTop: '100px'
        }}
      >
        <div className="row justify-content-center  p-0 h-100">
          

          <div className="col-12 col-lg-6 col-md-6 p-0 section_tv_col">
            {/* <img className="img-fluid h-75" src={tvImage} alt="tv" style={{
              maxHeight: '400px',
            }}>
            </img> */}
            <div className="img-fluid" >
              <img className="img-fluid h-50" src={chidrenImage} alt="tv" style={{
                maxHeight: '400px',
            }}>
            </img>
            </div>
          
          </div>

          <div className="col-12 col-lg-6 col-md-6 p-0 section_tv_col">
            <div
              style={{
                width: "65%",
              }}
            >
              <h1
                style={{
                  fontWeight: "bolder",
                }}
              >
                Create profiles for children.
              </h1>
              <h4
                style={{
                  fontWeight: "400",
                }}
              >
                Send children on adventures with their favourite characters in a space made just for them—free with your membership.
              </h4>
            </div>
          </div>

        </div>
      </section>
      <hr className="hero_hr"></hr>

      <Footer />
    </div>
  );
};

export default Hero;
