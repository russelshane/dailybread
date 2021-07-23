/*
  Main application component
  Unfolding Grace
  Copyright (c) 2021
*/

import loadable from "@loadable/component";
import Button from "./ui/Button";
import React, { useState, Fragment, FunctionComponent, useEffect } from "react";
import { Container } from "./ui/Container";
import { Text } from "react-native";
import AppLoading from "expo-app-loading";

/* Dynamic Components */
const Welcome = loadable(() => import("./components/Welcome"));

const App: FunctionComponent = () => {
  /* Interactive State */
  const [welcome, setWelcome] = useState(true);
  const [verse, setVerse] = useState([]);
  const [loading, setLoading] = useState(true);

  /* Fetch New Verse */
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://uncovered-treasure-v1.p.rapidapi.com/today",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "7055c4aa75mshdfe5c5a3cfaf98bp1a6155jsn919e1202d396",
            "x-rapidapi-host": "uncovered-treasure-v1.p.rapidapi.com",
          },
        }
      );

      const { results } = await response.json();

      setVerse(results);
      setLoading(false);
      console.log(loading);
    };
    fetchData();
  }, []);

  /* Render */
  return (
    <Fragment>
      <Container>
        {welcome && (
          <React.Fragment>
            <Welcome />
            <Button onPress={() => setWelcome(false)}>Continue</Button>
          </React.Fragment>
        )}
        {!welcome && (
          <React.Fragment>
            {verse ? (
              verse.map((val: any, index) => (
                <React.Fragment key={index}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#ddd",
                      textAlign: "center",
                      padding: "20px",
                    }}
                  >
                    {val.text}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#999999",
                      textAlign: "center",
                      padding: "10px 20px",
                    }}
                  >
                    {val.context}
                  </Text>
                </React.Fragment>
              ))
            ) : (
              <AppLoading />
            )}
          </React.Fragment>
        )}
      </Container>
    </Fragment>
  );
};

/* Export */
export default App;
