/*
  Main application component
  Unfolding Grace
  Copyright (c) 2021
*/

import dayjs from "dayjs";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const App: FunctionComponent = () => {
  /* Interactive State */
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");
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
      console.log(results);

      const response2 = await fetch(
        "https://source.unsplash.com/1600x900/?nature,water",
        {
          method: "GET",
        }
      );

      const res = await response2.url;
      setImage(res);

      setLoading(false);
    };
    fetchData();
  }, []);

  /* Styles */
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(28,28,30,0.6)",
      padding: 20,
      textAlign: "center",
      borderRadius: 10,
    },

    backdrop: {
      flex: 1,
      padding: 20,
      backgroundColor: "rgb(28,28,30)",
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    },

    text: {
      color: "rgb(229,229,234)",
      fontFamily: "sans-serif",
      fontSize: 18,
      lineHeight: 26,
      display: "flex",
      marginTop: 30,
      textAlign: "center",
    },

    context: {
      display: "flex",
      justifyContent: "center",
      color: "rgb(209,209,214)",
      fontFamily: "sans-serif",
      fontSize: 14,
      marginTop: 30,
    },
  });

  /* Render */
  return (
    <View style={styles.backdrop}>
      <View style={styles.container}>
        {loading ? (
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri: "https://ik.imagekit.io/drs/unfolddinggrace/spinner_LW6IiDni2.svg",
            }}
          />
        ) : (
          <View style={styles.container}>
            {verse && (
              <>
                <Text style={styles.context}>{(verse[0] as any)?.context}</Text>
                <Text style={styles.text}>{(verse[0] as any)?.text}</Text>
                <Text style={styles.context}>
                  {dayjs().format("MMMM D, YYYY")}
                </Text>
              </>
            )}
          </View>
        )}
      </View>
    </View>
  );
};
/* Export */
export default App;
