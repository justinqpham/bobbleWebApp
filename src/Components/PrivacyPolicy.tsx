import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';


const PrivacyDiv = styled.div`
  background-color: #fff;
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

const StyledExplainationText = styled.p`
  font-size: 15px;
  font-weight: lighter;
  margin-top: 109px;
  
`;


const PrivacyPolicy = () => {
    const history = useHistory();
  
    return (
        <PrivacyDiv>
            <StyledExplainationText>
                Blafkjabfkjagkbakbgajkb
            </StyledExplainationText>
        </PrivacyDiv>
    );
};

export default PrivacyPolicy;