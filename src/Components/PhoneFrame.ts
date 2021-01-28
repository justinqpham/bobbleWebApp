import styled from "styled-components";
import device from "../Utils/breakpoints";

// height: 926px;
//   width: 468px;
// z-index: -1;

const PhoneFrame = styled.div`
  background-color: black;
  border: 20px solid black;
  border-radius: 40px;
  // box-shadow: 10px 5px 5px black;
  position: absolute;

  @media only screen and (max-width: 600px) {
    border: none;
  }
`;

export default PhoneFrame;
