/*
  Main application component
  Unfolding Grace
  Copyright (c) 2021
*/

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import Verse from "./components/Verse";

const App: React.FC = () => {
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

    const loadFonts = async () => {
      await Font.loadAsync(
        "antoutline",
        // eslint-disable-next-line
        require("@ant-design/icons-react-native/fonts/antoutline.ttf")
      );

      await Font.loadAsync(
        "antfill",
        // eslint-disable-next-line
        require("@ant-design/icons-react-native/fonts/antfill.ttf")
      );
    };

    fetchData();
    loadFonts();
  }, []);

  if (loading) {
    return <AppLoading />;
  }

  /* Render */
  return <Verse image={image} loading={loading} verse={verse} />;
};
/* Export */
export default App;
