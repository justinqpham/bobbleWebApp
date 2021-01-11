import React from 'react';
import styled from 'styled-components';

import lidomLogo from '../Static/lidomlogo.png';
import backButton from '../Static/backbutton.png';
import leoneslogo from '../Static/leoneslogo.png';
import tigresligo from '../Static/tigresligo.png';
import liveicon from '../Static/liveicon.png';
import boobutton from '../Static/boobutton.png';
import cheerbutton from '..Static/cheerbutton.png';
import presidentelogo from '..Statis/presidentelogo.png';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';

const StyledPageRoot = styled.div`
  background-color: rgb(244, 244, 244);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  color: #fff;
  text-align: center;
  font-family: 'Montserrat';
  height: 926px;
  width: 428px;
`;

const StyledFirstRowDiv = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-right: 1.2rem;
`;

const StyledButtonBoardFirstRowDiv = styled.div`
  height: 100%;
  width: 100;
  align-items: center;
  justify-content: flex-start;
  border: 2px solid black;
`;

const BackArrowButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  cursor: pointer;
`;

const ParentDiv = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  border: 2px solid black;
`;

const TeamBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  background: #fff;
  width: 75%;
  padding: 1rem;
  border-radius: 12px;
  height: 200px;
`;


const booButton = styled.div`
  flex: 1;
`;

const cheerButton = styled.div`
  flex: 1;
`;


const LeonesLogo = styled.div`
  margin-top: 10px;
  flex: 1;
`;
const LiveLogo = styled.div`
  flex: 1;
`;
const TigresLogo = styled.div`
  flex: 1;
`;

const PresidenteLogo = styled.div`
  flex: 1;
`;

const Buttons = () => {
  const history = useHistory();

  return (
    <StyledPageRoot>
      <ParentDiv>
        <BackArrowButton onClick={() => history.push('/')}>
          <img src={backButton} alt="Back Button" />
        </BackArrowButton>
        <StyledFirstRowDiv>
          <img src={lidomLogo} alt="Lidom Logo" />
        </StyledFirstRowDiv>
      </ParentDiv>
      <ParentDiv>
        <TeamBox>
          <LeonesLogo>
            <img src={leoneslogo} alt="Back Button" />
            <p
              style={{
                color: '#000',
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                margin: '0',
                marginTop: '20px',
              }}
            >
              Leones del Escogido
            </p>
          </LeonesLogo>
          <LiveLogo>
            <img src={liveicon} alt="Back Button" />
          </LiveLogo>
          <TigresLogo>
            <img src={tigresligo} alt="Back Button" />
            <p
              style={{
                color: '#000',
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                margin: '0',
                marginTop: '20px',
              }}
            >
              Tigres del Licey
            </p>
          </TigresLogo>
        </TeamBox>
      </ParentDiv>
      <presidenteLogo>
        <img src={presidentelogo} alt="Presidente Logo" />
      </presidenteLogo>
    </StyledPageRoot>
  );
};

export default withRouter(Buttons);