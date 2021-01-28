import styled from "styled-components";
import device from "../Utils/breakpoints";

const StyledPageRoot = styled.div`
  background-color: rgb(244, 244, 244);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  color: #fff;
  text-align: center;
  font-family: "Montserrat";
  height: 886px;
  width: 428px;
  border-radius: 20px;
  @media only screen and (max-width: 600px) {
    border-radius: 0;
  }
`;

export default StyledPageRoot;
