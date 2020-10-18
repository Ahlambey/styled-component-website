import React from "react";
import { Button } from "../../globalStyles";
import { IconContext } from "react-icons/lib";
import { SiAffinitydesigner } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { RiTestTubeFill } from "react-icons/ri";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection id="services">
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <SiAffinitydesigner />
                </PricingCardIcon>
                <PricingCardPlan>UI/UX Design</PricingCardPlan>
                <PricingCardCost>$9.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 Courses</PricingCardFeature>
                  <PricingCardFeature>10 hands on projects</PricingCardFeature>
                  <PricingCardFeature>10 team projects</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <RiTestTubeFill />
                </PricingCardIcon>
                <PricingCardPlan>Testing</PricingCardPlan>
                <PricingCardCost>$20.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 Courses</PricingCardFeature>
                  <PricingCardFeature>10 hands on projects</PricingCardFeature>
                  <PricingCardFeature>10 team projects</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <BiCodeAlt />
                </PricingCardIcon>
                <PricingCardPlan>Web Developement</PricingCardPlan>
                <PricingCardCost>$250.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>200 courses</PricingCardFeature>
                  <PricingCardFeature>25 hands on projects</PricingCardFeature>
                  <PricingCardFeature>20 team projects</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
