import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { setShow } from "./../store/SearchCardSlice";
import { SearchBar } from "@rneui/themed";

const SearchBarComponent = () => {
  const theme = useSelector((state) => state.theme.theme);
  const isDarkTheme = theme == "dark";
  const dispatch = useDispatch();
  return (
    <SearchBar
      containerStyle={{
        position: "absolute",
        width: "90%",
        zIndex: 2,
        top: 80,
        right: "5%",
        left: "5%",
        padding: 0,
        height: 45,
        borderRadius: 10,
        backgroundColor: isDarkTheme ? "gray" : "white",
      }}
      platform="ios"
      inputContainerStyle={{
        backgroundColor: isDarkTheme ? "gray" : "white",
      }}
      lightTheme={isDarkTheme ? false : true}
      placeholder="Search here"
      placeholderTextColor={isDarkTheme ? "white" : "gray"}
      onCancel={() => dispatch(setShow())}
      onFocus={() => dispatch(setShow())}
      on
    />
  );
};

export default SearchBarComponent;
