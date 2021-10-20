/*
  Main application component
  Unfolding Grace
  Copyright (c) 2021
*/

import React, { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const App: FunctionComponent = () => {
  /* Interactive State */
  const [loading, setLoading] = useState(true);
  const [verse, setVerse] = useState([]);

  /* Fetch New Verse */
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://uncovered-treasure-v1.p.rapidapi.com/today",
        {
          method: "GET",

          // better get yourself a key.

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
    };
    fetchData();
  }, []);

  /* Render */
  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.text}>Loading verse...</Text>
      ) : (
        <View style={styles.container}>
          {verse && (
            <>
              <Text style={styles.text}>{(verse[0] as any)?.text}</Text>
              <Text style={styles.context}>- {(verse[0] as any)?.context}</Text>
            </>
          )}
        </View>
      )}
    </View>
  );
};

/* Styles */
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(44,44,46)",
    padding: 20,
    textAlign: "center",
  },

  text: {
    color: "rgb(219,219,219)",
    fontFamily: "sans-serif",
    fontSize: 18,
    lineHeight: 26,
    display: "flex",
  },

  context: {
    display: "flex",
    justifyContent: "center",
    color: "rgb(180,180,180)",
    fontFamily: "sans-serif",
    fontSize: 16,
    lineHeight: 22,
    marginTop: 30,
  },
});

/* Export */
export default App;
