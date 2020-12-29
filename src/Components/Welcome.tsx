import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// @ts-ignore
import BobbleSportsLogo from "../Static/bobblesportslogo.png";
// @ts-ignore
import EnterButtonImage from "../Static/enterbutton.png";

const StyledPageRoot = styled.div`
  background-color: rgb(198, 13, 13);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 25px;
  color: #fff;
  text-align: center;
  font-family: "Montserrat";
  height: 926px;
  width: 428px;
`;

const StyledLogoDiv = styled.div`
  margin-top: 142px;
`;

const StyledSoundSpan = styled.span`
  font-weight: bold;
  font-size: 15px;
  font-style: normal;
  font-weight: bold;
  margin-top: 101px;
`;

const StyledExplainationText = styled.p`
  font-size: 15px;
  font-weight: lighter;
  margin-top: 109px;
`;

const StyledTapFaster = styled.p`
  font-size: 15px;
  font-weight: normal;
  margin-top: 97px;
`;

const StyledClapDiv = styled(motion.div)`
  height: 140px;
  width: 140px;
  border-radius: 50%;
  color: yellow;
  margin-top: 47px;
`;

const TOSDiv = styled.div`
  display: flex;
`;

const StyledA = styled.a`
  color: #fff;
  text-decoration: none;
`;

const Welcome = () => {
  return (
    <StyledPageRoot>
      <StyledLogoDiv>
        <img src={BobbleSportsLogo} alt="Bobble Sports Logo" />
      </StyledLogoDiv>
      <StyledSoundSpan>Turn on sound!</StyledSoundSpan>
      <StyledExplainationText>
        Your button presses will be combined with reaction from other fans to
        create a collective crowd audio stream delivered to your device!
      </StyledExplainationText>
      <StyledTapFaster>
        Tap buttons faster for a more intense reaction!
      </StyledTapFaster>
      <StyledClapDiv whileTap={{ scale: 0.8 }}>
        <img src={EnterButtonImage} alt="Clap" />
      </StyledClapDiv>
      <TOSDiv>
        <StyledA target="_blank" rel="noreferrer" href="https://google.com">
          Privacy Policy
        </StyledA>{" "}
        |{" "}
        <StyledA target="_blank" rel="noreferrer" href="https://google.com">
          Terms of Service
        </StyledA>
      </TOSDiv>
    </StyledPageRoot>
  );
};

export default Welcome;
