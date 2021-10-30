/**
 * Verse of the Day component
 *
 * @author darsler
 */

import dayjs from "dayjs";
import React from "react";
import {
  View,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  Share,
} from "react-native";
import Button from "@ant-design/react-native/lib/button";
import { IconFill } from "@ant-design/icons-react-native";

type VerseProps = {
  verse: any;
  loading: boolean;
  image: string;
};

const Verse: React.FC<VerseProps> = ({ verse, loading, image }) => {
  /* Styles */
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(28,28,30,0.6)",
      paddingTop: 40,
      padding: 20,
      textAlign: "center",
      borderRadius: 10,
    },

    backdrop: {
      flex: 1,
      height: "100%",
      backgroundColor: "rgb(28,28,30)",
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

  const bgLink = {
    uri: image ? image : undefined,
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${verse[0].text} - ${verse[0].context}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(28,28,30)",
      }}
    >
      {loading ? (
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: "https://ik.imagekit.io/drs/unfolddinggrace/spinner_LW6IiDni2.svg",
          }}
        />
      ) : (
        <ImageBackground source={bgLink} style={styles.backdrop}>
          <View style={styles.container}>
            <View style={styles.container}>
              {verse && (
                <>
                  <Text style={styles.context}>
                    {(verse[0] as any)?.context}
                  </Text>
                  <Text style={styles.text}>{(verse[0] as any)?.text}</Text>
                  <Text style={styles.context}>
                    {dayjs().format("MMMM D, YYYY")}
                  </Text>
                </>
              )}
              <Button
                onPress={onShare}
                style={{
                  marginTop: 20,
                  borderWidth: 0,
                  backgroundColor: "#D14343",
                }}
              >
                <IconFill color="#fff" name="heart" />
              </Button>
            </View>
          </View>
        </ImageBackground>
      )}
    </View>
  );
};

export default Verse;
