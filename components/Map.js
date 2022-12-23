import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { useSelector } from "react-redux";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { DarkMapStyle } from "../utlis/CustomMap";

const Map = () => {
  const theme = useSelector((state) => state.theme.theme);
  const isDarkTheme = theme == "dark";

  // Dummy Data
  const markersList = [
    {
      name: "Burger King",
      location: {
        latitude: 18.5204,
        longitude: 73.8567,
      },
      desc: "This is demo",
      url: "https://i.ibb.co/pKNjNB4/images-removebg-preview.png",
    },
    {
      name: "Burger King",
      location: {
        latitude: 18.5304,
        longitude: 73.8267,
      },
      desc: "This is demo",
      url: "https://i.ibb.co/pKNjNB4/images-removebg-preview.png",
    },
    {
      name: "Burger King",
      location: {
        latitude: 18.5504,
        longitude: 73.8167,
      },
      desc: "This is demo",
      url: "https://i.ibb.co/pKNjNB4/images-removebg-preview.png",
    },
    {
      name: "Burger King",
      location: {
        latitude: 18.5024,
        longitude: 73.8547,
      },
      desc: "This is demo",
      url: "https://i.ibb.co/pKNjNB4/images-removebg-preview.png",
    },
    {
      name: "Burger King",
      location: {
        latitude: 18.5054,
        longitude: 73.8597,
      },
      desc: "This is demo",
      url: "https://i.ibb.co/pKNjNB4/images-removebg-preview.png",
    },
    {
      name: "Burger King",
      location: {
        latitude: 18.5144,
        longitude: 73.8567,
      },
      desc: "This is demo",
      url: "https://i.ibb.co/pKNjNB4/images-removebg-preview.png",
    },
    {
      name: "Burger King",
      location: {
        latitude: 18.5004,
        longitude: 73.8467,
      },
      desc: "This is demo",
      url: "https://i.ibb.co/pKNjNB4/images-removebg-preview.png",
    },
    {
      name: "Burger King",
      location: {
        latitude: 18.5004,
        longitude: 73.8367,
      },
      desc: "This is demo",
      url: "https://i.ibb.co/pKNjNB4/images-removebg-preview.png",
    },
    {
      name: "Burger King",
      location: {
        latitude: 18.5004,
        longitude: 73.8697,
      },
      desc: "This is demo",
      url: "https://i.ibb.co/pKNjNB4/images-removebg-preview.png",
    },
    {
      name: "Burger King",
      location: {
        latitude: 18.5004,
        longitude: 73.8627,
      },
      desc: "This is demo",
      url: "https://i.ibb.co/pKNjNB4/images-removebg-preview.png",
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        userInterfaceStyle="dark"
        initialRegion={{
          latitude: 18.5204,
          longitude: 73.8567,
          latitudeDelta: 0.04,
          longitudeDelta: 0.05,
        }}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={isDarkTheme ? DarkMapStyle : []}
      >
        {markersList.map((place) => {
          return (
            <Marker
              key={markersList.indexOf(place)}
              coordinate={place.location}
            >
              <View>
                <Image
                  source={{ uri: place.url }}
                  style={{ height: 50, width: 50 }}
                />
              </View>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default Map;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
