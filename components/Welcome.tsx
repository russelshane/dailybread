/*
  Welcome Component
  Unfolding Grace
*/

import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../styles/globalColors";
import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";

const Welcome: FunctionComponent = () => {
  /* Initialize App Font Styles */
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
  });

  /* Check if fonts have been loaded, otherwise return loading... */
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <React.Fragment>
      <Headline style={{ fontFamily: "Inter_600Semibold" }}>Hi.</Headline>
    </React.Fragment>
  );
};

/* Styles */
const Headline = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: ${colors.foreground};
  margin: 80px 0;
`;

/* Export */
export default Welcome;
