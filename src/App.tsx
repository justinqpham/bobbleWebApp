import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Routes from "./Routes";
import StyledRoot from "./Components/StyledRoot";
import StyledPageRoot from "./Components/StyledPageRoot";
import PhoneFrame from "./Components/PhoneFrame";

const StyledDiv = styled.div``;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (min-width: 600px) {
    align-items: center;
  }
`;

export default function App() {
  return (
    <StyledDiv className="App">
      <StyledRoot>
        <Container>
          <PhoneFrame>
            <Routes />
          </PhoneFrame>
        </Container>
      </StyledRoot>
    </StyledDiv>
  );
}
