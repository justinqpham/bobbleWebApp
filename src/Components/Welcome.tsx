import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";

import bobbleLogo from "../Static/bobbleSportsLogo.png";
import bobbleLogoLarge from "../Static/bobbleSportsLogoLarge.png";

import enterButtonImage from "../Static/enterButton.png";
import enterButtonLarge from "../Static/enterButtonLarge.png";
import PhoneFrame from "../Components/PhoneFrame";
import Phone from "./Phone";

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
  height: 886px;
  width: 428px;
  border-radius: 20px;
`;

const StyledLogoDiv = styled.div`
  margin-top: 120px;
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
  margin-top: 90px;
`;

const StyledClapDiv = styled(motion.div)`
  height: 140px;
  width: 140px;
  border-radius: 50%;
  color: yellow;
  margin-top: 42px;
`;

const TOSDiv = styled.div`
  display: flex;
  margin-top: 50px;
`;

const StyledA = styled.a`
  color: #fff;
  text-decoration: none;
`;

const Welcome = () => {
  const history = useHistory();
  return (
    <PhoneFrame>
      <StyledPageRoot>
        <StyledLogoDiv>
          <img src={bobbleLogo} alt="Bobble Sports Logo" />
        </StyledLogoDiv>
        <StyledSoundSpan>Turn on sound!</StyledSoundSpan>
        <StyledExplainationText>
          Your button presses will be combined with reaction from other fans to
          create a collective crowd audio stream delivered to your device!
        </StyledExplainationText>
        <StyledTapFaster>
          Tap buttons faster for a more intense reaction!
        </StyledTapFaster>
        <StyledClapDiv
          whileTap={{ scale: 0.8 }}
          onClick={() => history.push("/board")}
        >
          <img src={enterButtonImage} alt="Clap" />
        </StyledClapDiv>
        <TOSDiv>
          <StyledA onClick={() => history.push("/privacy")}>
            Privacy Policy
          </StyledA>{" "}
          |{" "}
          <StyledA target="_blank" rel="noreferrer" href="https://google.com">
            Terms of Service
          </StyledA>
        </TOSDiv>
      </StyledPageRoot>
    </PhoneFrame>
  );
};

export default withRouter(Welcome);
