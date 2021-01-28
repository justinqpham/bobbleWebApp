import styled from "styled-components";
import device from "../Utils/breakpoints";

const PhoneFrame = styled.div`
  height: 926px;
  width: 468px;
  background-color: black;
  border-radius: 40px;
  // box-shadow: 10px 5px 5px black;
  position: absolute;
  z-index: -1;
  
  @media ${device.laptop} { 
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 900px;
    max-height: 900px;
`;

export default PhoneFrame;
