import { ScrollView, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListItem, Icon } from "@rneui/themed";
import { setShow } from "../store/SearchCardSlice";

const SearchCard = () => {
  const isHidden = useSelector((state) => state.searchCard.show);
  const theme = useSelector((state) => state.theme.theme);
  const isDarkTheme = theme == "dark";
  const dispatch = useDispatch();
  console.log(isHidden);

  // Dummy DataSet
  const list = [
    {
      title: "Burger King",
    },
    {
      title: "Cafe Burger",
    },
    {
      title: "Crazy Burgers",
    },
    {
      title: "Burger King",
    },
    {
      title: "Cafe Burger",
    },
    {
      title: "Crazy Burgers",
    },
  ];

  return (
    <View
      style={{
        position: "absolute",
        top: 140,
        zIndex: 10,
        width: "90%",
        right: "5%",
        borderRadius: 10,
        display: isHidden ? "flex" : "none",
      }}
    >
      <Icon
        name="close"
        onPress={() => dispatch(setShow())}
        style={{ alignSelf: "flex-start" }}
        color={isDarkTheme ? "white" : "black"}
      />
      <ScrollView
        style={{ height: 200, borderRadius: 10 }}
        showsVerticalScrollIndicator={false}
      >
        {list.map((item, i) => (
          <ListItem
            key={i}
            bottomDivider
            containerStyle={{
              backgroundColor: isDarkTheme ? "gray" : "white",
            }}
          >
            <Icon name="location-pin" color={isDarkTheme ? "white" : "black"} />
            <ListItem.Content>
              <ListItem.Title
                style={{ color: isDarkTheme ? "white" : "black" }}
              >
                {item.title}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchCard;
