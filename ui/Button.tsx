/*
  Global Button Component
  Unfolding Grace
*/

import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../styles/globalColors";

/* TS */
type ButtonProps = {
  children: React.ReactNode;
  onPress?: any;
};

const Button: FunctionComponent<ButtonProps> = ({ children, onPress }) => {
  return (
    <React.Fragment>
      <ButtonContainer onPress={onPress}>
        <ButtonText>{children}</ButtonText>
      </ButtonContainer>
    </React.Fragment>
  );
};

/* Styles */
const ButtonContainer = styled.TouchableOpacity`
  padding: 16px 20px;
  border-radius: 5px;
  border: none;
  background: ${colors.foreground};
  color: ${colors.background};
`;

const ButtonText = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  text-align: center;
`;

/* Export */
export default Button;
