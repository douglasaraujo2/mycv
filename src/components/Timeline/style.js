/* The actual timeline (the vertical ruler) */
/* Container around content */
import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    right: -17px;
    background-color: #010;
    border: 4px solid #9999;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
  /* Place the container to the left */
  .left {
    left: 0;
    &::before {
      content: " ";
      height: 0;
      position: absolute;
      top: 22px;
      width: 0;
      z-index: 1;
      right: 30px;
      border: medium solid white;
      border-width: 10px 0 10px 10px;
      border-color: transparent transparent transparent white;
    }
  }
  /* Place the container to the right */
  .right {
    left: 50%;
    &::before {
      content: " ";
      height: 0;
      position: absolute;
      top: 22px;
      width: 0;
      z-index: 1;
      left: 30px;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
    }
    &::after {
      left: -16px;
    }
    
    @media screen and (max-width: 600px) {
      /* Place the timelime to the left */

      /* Full-width containers */
      .container {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
      }

      /* Make sure that all arrows are pointing leftwards */
      .container::before {
        left: 60px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
      }

      /* Make sure all circles are at the same spot */
      .left::after,
      .right::after {
        left: 15px;
      }

      /* Make all right containers behave like the left ones */
      .right {
        left: 0%;
      }
    }
  }
`;

export const Content = styled.div`
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
`;
