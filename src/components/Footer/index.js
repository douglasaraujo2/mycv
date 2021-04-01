import React from "react";
import { FooterArea, Paragraph, IconsArea } from "./styles";
import { FaLinkedin, FaGithub } from 'react-icons/fa'
// eslint-disable-next-line
const Footer = () => {
  return (
    <FooterArea>
      <Paragraph>Minhas redes sociais</Paragraph>
      <IconsArea>
        <a href="https://www.linkedin.com/in/douglasaaraujo/" rel="noreferrer" target="_blank">
          <FaLinkedin size={17} color="#FFF" />
        </a>
        <a href="https://github.com/douglasaraujo2/" target="_blank" rel="noreferrer">
          <FaGithub size={17} color="#FFF"/>
        </a>

      </IconsArea>
    </FooterArea>);
};

export default Footer;
