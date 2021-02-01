import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import enterButtonImage from "../Static/enterButton.png";
import bobbleLogoLarge from "../Static/bobbleSportsLogoLarge.png";
import innerClap from "../Static/innerclapButton.png";
import outterClap from "../Static/outterclapButton.png";

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

const StyledClapDiv = styled.div`
  margin-top: 101px;
`;

const StyledOutterClapDiv = styled.div`
  position: relative;
  // display: flex;
  // justify-content: center;
`;

const StyledInnerClapDiv = styled(motion.div)`
  position: absolute;
  display: flex;
  align-item: center;
  justify-content: center;
  // top: 50px;
  // left: 50px;
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
        <img src={bobbleLogoLarge} alt="Bobble Sports Logo" width="65%" />
      </StyledLogoDiv>
      <StyledSoundSpan>Turn on sound!</StyledSoundSpan>
      <StyledExplanationText>
        Your button presses will be combined with reaction from other fans to
        create a collective crowd audio stream delivered to your device!
      </StyledExplanationText>
      <StyledTapFaster>
        Tap buttons faster <br></br>for a more intense reaction!
      </StyledTapFaster>
      <StyledClapDiv>
        <StyledOutterClapDiv>
          <img src={outterClap} alt="Clap" width="50%" height="auto" />
        </StyledOutterClapDiv>
        <StyledInnerClapDiv
          whileTap={{ scale: 0.8 }}
          onClick={() => history.push("/board")}
        >
          <img src={innerClap} alt="Clap" width="40%" height="auto" />
        </StyledInnerClapDiv>
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
