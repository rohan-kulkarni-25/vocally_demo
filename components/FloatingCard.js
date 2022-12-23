import React from "react";
import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import { Card } from "@rneui/themed";

const FloatingCard = () => {
  const theme = useSelector((state) => state.theme.theme);
  const isDarkTheme = theme == "dark";

  return (
    <Card
      wrapperStyle={{ flexDirection: "row" }}
      containerStyle={{
        marginTop: 15,
        position: "absolute",
        bottom: 110,
        width: "90%",
        borderRadius: 10,
        backgroundColor: isDarkTheme ? "gray" : "white",
        borderWidth: 0,
      }}
    >
      <Image
        source={{
          uri: "https://i.ibb.co/pKNjNB4/images-removebg-preview.png",
        }}
        style={{ height: 60, width: 60, borderRadius: 10 }}
      />
      <View
        style={{
          marginLeft: 20,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            color: isDarkTheme ? "white" : "black",
          }}
        >
          Lokal Hamburk
        </Text>
        <Text style={{ fontSize: 12, color: isDarkTheme ? "white" : "gray" }}>
          Pub in progress
        </Text>
      </View>
    </Card>
  );
};

export default FloatingCard;
