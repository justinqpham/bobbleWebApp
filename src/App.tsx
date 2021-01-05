import React from "react";
import styled from "styled-components";

import Routes from "./Routes";

const StyledRoot = styled.div`
  background-color: darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <StyledRoot>
      <Routes />
    </StyledRoot>
  );
}
