import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Phone from "./Components/Phone";

import Routes from "./Routes";

const StyledRoot = styled.div`
  background-color: #272C35;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default function App() {
  const [squish, setSquish] = useState(false);
  const [squished, setSquished] = useState(false);
  const renderStart = ()=> setSquish(true);
  const [phone, setPhone] = useState("");
  useEffect(() => {
    if (window.innerWidth > 420) {
    if (window.innerHeight < 903) {
      setPhone("block")
      setSquish(true)
    } else {
      setPhone("block")
    }
  }
  }, [])
  return (
    <Phone trigger={renderStart} squish={squish}>
      <StyledRoot>
      <Routes />
    </StyledRoot>
    </Phone>
  );
}
