import React from "react";
import PropTeypes from 'prop-types';
//Styles
import { Wrapper, Content } from "./Grid.styleds";

const Grid = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

Grid.propTeypes = {
  header: PropTeypes.string
}

export default Grid;
