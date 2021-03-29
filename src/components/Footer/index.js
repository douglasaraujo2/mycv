import React from "react";
import { FooterArea } from "./styles";

// eslint-disable-next-line
const Footer = () => {
  return <FooterArea>&copy; Douglas Araujo {new Date().getFullYear()}</FooterArea>;
};

export default Footer;
