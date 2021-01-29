import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import bobbleLogo from "../Static/bobbleSportsLogo.png";
import enterButtonImage from "../Static/enterButton.png";

const StyledWelcomePage = styled.div`
  background-color: rgb(198, 13, 13);
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
  @media only screen and (max-width: 600px) {
    border-radius: 0;
  }
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

const StyledExplanationText = styled.p`
  font-size: 15px;
  font-weight: normal;
  margin-top: 25px;
`;

const StyledTapFaster = styled.p`
  font-weight: bold;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  margin-top: 25px;
`;

const StyledClapDiv = styled(motion.div)`
  height: 140px;
  width: 140px;
  border-radius: 50%;
  color: yellow;
  margin-top: 101px;
`;

const TOSDiv = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: normal;
  margin-top: 110px;
`;

const StyledA = styled.a`
  color: #fff;
  text-decoration: none;
`;

const Welcome = () => {
  const history = useHistory();
  return (
    <StyledWelcomePage>
      <StyledLogoDiv>
        <img src={bobbleLogo} alt="Bobble Sports Logo" />
      </StyledLogoDiv>
      <StyledSoundSpan>Turn on sound!</StyledSoundSpan>
      <StyledExplanationText>
        Your button presses will be combined with reaction from other fans to
        create a collective crowd audio stream delivered to your device!
      </StyledExplanationText>
      <StyledTapFaster>
        Tap buttons faster <br></br>for a more intense reaction!
      </StyledTapFaster>
      <StyledClapDiv
        whileTap={{ scale: 0.8 }}
        onClick={() => history.push("/board")}
      >
        <img src={enterButtonImage} alt="Clap" />
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
    </StyledWelcomePage>
  );
};

export default withRouter(Welcome);
