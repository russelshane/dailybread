/*
  Main application component
  Unfolding Grace
  Copyright (c) 2021
*/

import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { Container } from "./ui/Container";
import loadable from "@loadable/component";

/* Dynamic Components */
const Welcome = loadable(() => import("./components/Welcome"));

const App: FunctionComponent = () => {
  return (
    <React.Fragment>
      <Container>
        <StatusBar style="auto" />
        <Welcome />
      </Container>
    </React.Fragment>
  );
};

/* Export */
export default App;
