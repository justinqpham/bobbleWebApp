import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Phone from "./Components/Phone";

import Routes from "./Routes";

const StyledRoot = styled.div`
  background-color: #272c35;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div``;

export default function App() {
  const [squish, setSquish] = useState(false);
  const [squished, setSquished] = useState(false);
  const renderStart = () => setSquish(true);
  const [phone, setPhone] = useState("");
  useEffect(() => {
    if (window.innerWidth > 420) {
      if (window.innerHeight < 903) {
        setPhone("block");
        setSquish(true);
      } else {
        setPhone("block");
      }
    }
  }, []);
  return (
    <StyledDiv className="App">
      <div style={{ display: phone }} id="phone">
        <div id="speaker"></div>
        <div id="camera"></div>
      </div>
      <Phone trigger={renderStart} squish={squish}>
        <StyledRoot>
          <Routes />
        </StyledRoot>
      </Phone>
    </StyledDiv>
  );
}
