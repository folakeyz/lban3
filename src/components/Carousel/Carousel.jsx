import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";


const content = [
  {
    title: "Lotus Beta Analytics",
    description:
      "We are focused on the provision of Information Technology Solutions and Services that are built on a world-class, secure, resilient infrastructure, delivered according to global best practices in partnership with the world’s leading technology vendor.",
    button: "Read More",
    image: "http://lotusbetaanalytics.ca/img/software.jpg",

  },
  {
    title: "C | E H",
    description:
      "To beat a Hacker! You Must think like a Hacker! Be the White-Hat Hacker! a CERTIFIED ETHICAL HACKER Today!. Enroll and Be Certified",
    button: "Discover",
    image: "http://lotusbetaanalytics.ca/img/hackss.jpg",
  
  },
  {
    title: "Microsoft Cloud Solutions Provider",
    description:
      "The Microsoft Cloud Solution Provider program is a licensing program that allows you manage, sell and support a customer entirely. The road map towards cloud has become inevitability for enterprise organization as they embrace evolution in the role and use of technology.",
    button: "Read More",
    image: "http://lotusbetaanalytics.ca/img/cloud.jpg",
 
  }
];

const Sliders = () => {
    return(
  <div>
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>{item.button}</button>
          </div>
       
        </div>
      ))}
    </Slider>
  </div>
    );
}


export default Sliders