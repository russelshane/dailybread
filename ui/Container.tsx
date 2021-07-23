/*
  Global Container Styles
  Unfolding Grace
*/

import styled from "styled-components/native";
import { colors } from "../styles/globalColors";

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};
  width: 100%;
  height: 100%;
`;
