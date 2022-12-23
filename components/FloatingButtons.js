import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/ThemeSlice";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const FloatingButtons = () => {
  const theme = useSelector((state) => state.theme.theme);
  const isDarkTheme = theme == "dark";
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 140,
          right: 10,
          zIndex: 5,
          backgroundColor: isDarkTheme ? "grey" : "white",
          padding: 10,
          borderRadius: 100,
        }}
        onPress={() => dispatch(setTheme())}
      >
        <FontAwesome
          name={isDarkTheme ? "toggle-on" : "toggle-off"}
          size={24}
          color={isDarkTheme ? "white" : "black"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 200,
          right: 10,
          zIndex: 5,
          backgroundColor: isDarkTheme ? "grey" : "white",
          padding: 10,
          borderRadius: 100,
        }}
      >
        <Feather
          name="navigation"
          size={24}
          color={isDarkTheme ? "white" : "black"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FloatingButtons;
