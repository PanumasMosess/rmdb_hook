import React from "react";
import PropTypes from "prop-types";

//styled
import { Warpper, Content, Text } from "./Heroimage.styles";

const HeroImage = ({ image, title, text }) => (
  <Warpper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Warpper>
);

HeroImage.propsType = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default HeroImage;
