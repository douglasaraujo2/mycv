import React from "react";
import { Container, Content } from "./style.js";

export const Page = (props) => {
  // const className = { props.className ?  'container '  + props.className : 'container'};

  return (
    <Container className="left"> 
      <Content>
        <h2>{props.date}</h2>
        <p>{props.description}</p>
      </Content>
    </Container>
    // <div className="container right">
    //   <div className="content">
    //   </div>
    // </div>
  );
};

export default Page;
