import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  TypeWriter,
} from "./HeroSection.elements";
import Video from "../../videos/video.mp4";
import { Button } from "../../globalStyles";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="Home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Learn Web Development to Become a Great Team Player</HeroH1>
        <TypeWriter>
          <h1>&lt;&gt;Learn HTML, CSS, Javascrip, Reactjs&lt;/&gt;</h1>
        </TypeWriter>

        <HeroP>Start Your Web Developement journey Sign Up Now</HeroP>
        <HeroBtnWrapper>
          <Link to="/sign-up">
            <Button
              big
              primary
              fontBig
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </Link>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

// Vidéo de Bedrijfsfilmspecialist.nl provenant de Pexels
