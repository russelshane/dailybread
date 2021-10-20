/*
  Global Button Component
  Unfolding Grace
*/

import React, { FunctionComponent } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/globalColors";

/* TS */
type ButtonProps = {
  children: React.ReactNode;
  onPress?: any;
};

const Button: FunctionComponent<ButtonProps> = ({ children, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.buttonStyles}>
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

/* Styles */
const styles = StyleSheet.create({
  buttonStyles: {
    borderRadius: 10,
    padding: "16px 20px",
    border: "none",
    background: colors.foreground,
    color: colors.background,
  },

  buttonText: {
    color: colors.background,
  },
});

/* Export */
export default Button;
