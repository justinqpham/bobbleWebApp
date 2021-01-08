import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import lidomLogo from "../Static/lidomlogo.png"
import backButton from "../Static/backbutton.png"

const StyledPageRoot = styled.div`
  background-color: rgb(244, 244, 244);
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

const StyledFirstRowDiv = styled.div`
  margin-top: 100px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  height: 40px;
`;


const Buttons = () => {
    return (
      <StyledPageRoot>
        <StyledFirstRowDiv>
            <img src={backButton} alt="Back Button" />
            <img src={lidomLogo} alt="Lidom Logo" />
        </StyledFirstRowDiv>
        
      </StyledPageRoot>
    );
};

export default Buttons;