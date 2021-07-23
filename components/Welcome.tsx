/*
  Welcome Component
  Unfolding Grace
*/

import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../styles/globalColors";

const Welcome: FunctionComponent = () => {
  return <Headline>Hi.</Headline>;
};

/* Stylesj */
const Headline = styled.Text`
  font-size: 24px;
  font-weight: 600;
  font-family: sans-serif;
  color: ${colors.foreground};
`;

/* Export */
export default Welcome;
