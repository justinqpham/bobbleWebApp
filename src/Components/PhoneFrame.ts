import styled from "styled-components";
import device from "../Utils/breakpoints";

const PhoneFrame = styled.div`
  height: 926px;
  width: 468px;
  border: 20px solid black;
  border-radius: 40px;
  box-shadow: 10px 5px 5px black;

  @media ${device.laptop} { 
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 900px;
    max-height: 300px;
`;

export default PhoneFrame;
