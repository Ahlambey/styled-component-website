import React from "react";
import { Container, Button } from "../../globalStyles";
import {
  InfoSec,
  InfoColum,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ImgWrapper,
  Img
} from "./InfoSectionElements";
import { Link } from "react-router-dom";

export default function InfoSection({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  buttonLabel,
  description,
  headLine,
  topLine,
  primary,
  img, 
  alt, 
  start,
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColum>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <SubTitle lightTextDesc={lightTextDesc}>
                  {" "}
                  {description}
                </SubTitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColum>
            <InfoColum>
                <ImgWrapper start={start}>
                  <Img src={img} alt={alt}/>
                </ImgWrapper>
            </InfoColum>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}
