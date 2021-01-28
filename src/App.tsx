import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Routes from "./Routes";
import StyledRoot from "./Components/StyledRoot";

const StyledDiv = styled.div``;

export default function App() {
  return (
    <StyledDiv className="App">
      <StyledRoot>
        <Routes />
      </StyledRoot>
    </StyledDiv>
  );
}
