import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import lidomLogo from "../Static/lidomLogo.png";
import backButton from "../Static/backButton.png";
import leonesLogo from "../Static/leonesLogo.png";
import tigresLigo from "../Static/tigresLigo.png";
import liveIcon from "../Static/liveIcon.png";
import presidenteLogo from "../Static/presidenteLogo.png";
import booButton from "../Static/booButton.png";
import cheerButton from "../Static/cheerButton.png";
import letdownButton from "../Static/letdownButton.png";
import letsgoButton from "../Static/letsgoButton.png";
import clapButton from "../Static/clapButton.png";

import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import StyledFirstRowDiv from "./StyledFirstRowDiv";

const StyledButtonsPage = styled.div`
  background-color: rgb(244, 244, 244);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
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

const ButtonDiv = styled(motion.img)`
  height: 90%;
  width: 50%;
  cursor: pointer;
`;

const PresidenteLogo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

const ButtonBoardFirstRowDiv = styled.div`
  height: 100%;
  width: 100;
  align-items: center;
  justify-content: flex-start;
`;

const BackArrowButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  cursor: pointer;
  margin-left: 1rem;
`;

const ParentDiv = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
`;

const ButtonBoardDiv = styled.div`
  width: 100%;
  margin-top: 3.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const TeamBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
  background: #fff;
  width: 93%;
  padding: 1rem;
  border-radius: 30px;
  height: 200px;
`;

const LeonesLogo = styled.div`
  margin-top: 10px;
  flex: 1;
`;
const LogoDiv = styled.div`
  flex: 1;
`;

const Buttons = () => {
  const history = useHistory();

  return (
    <StyledButtonsPage>
      <ParentDiv>
        <BackArrowButton onClick={() => history.push("/")}>
          <img src={backButton} alt="Back Button" />
        </BackArrowButton>
        <StyledFirstRowDiv>
          <img
            style={{ width: "100px", height: "auto" }}
            src={lidomLogo}
            alt="Lidom Logo"
          />
        </StyledFirstRowDiv>
      </ParentDiv>
      <ParentDiv>
        <TeamBox>
          <LeonesLogo>
            <img src={leonesLogo} alt="Back Button" />
            <p
              style={{
                color: "#000",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                margin: "0",
                marginTop: "20px",
              }}
            >
              Leones del Escogido
            </p>
          </LeonesLogo>
          <LogoDiv>
            <img src={liveIcon} alt="Live Icon" />
          </LogoDiv>
          <LogoDiv>
            <img src={tigresLigo} alt="Tigres Logo" />
            <p
              style={{
                color: "#000",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                margin: "0",
                marginTop: "20px",
              }}
            >
              Tigres del Licey
            </p>
          </LogoDiv>
        </TeamBox>
      </ParentDiv>
      <ParentDiv>
        <PresidenteLogo>
          <img src={presidenteLogo} alt="Budweiser Logo" />
        </PresidenteLogo>
      </ParentDiv>
      <ButtonBoardDiv>
        <ButtonBoardFirstRowDiv>
          <ButtonDiv
            src={booButton}
            alt="Boo Button"
            whileTap={{
              scale: 0.9,
            }}
          />
          <ButtonDiv
            src={cheerButton}
            alt="Boo Button"
            whileTap={{ scale: 0.9 }}
          />
        </ButtonBoardFirstRowDiv>
        <ButtonBoardFirstRowDiv>
          <ButtonDiv
            src={letdownButton}
            alt="Boo Button"
            whileTap={{ scale: 0.9 }}
          />
          <ButtonDiv
            src={letsgoButton}
            alt="Boo Button"
            whileTap={{ scale: 0.9 }}
          />
        </ButtonBoardFirstRowDiv>
        <ButtonBoardFirstRowDiv>
          <ButtonDiv
            src={clapButton}
            alt="Boo Button"
            style={{ width: "70%" }}
            whileTap={{ scale: 0.9 }}
          />
        </ButtonBoardFirstRowDiv>
      </ButtonBoardDiv>
    </StyledButtonsPage>
  );
};

export default withRouter(Buttons);
