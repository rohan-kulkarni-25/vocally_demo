import React from "react";
import { KeyboardAvoidingView, View } from "react-native";

// Component Imports
import SearchBarComponent from "../components/SearchBar";
import Map from "../components/Map";
import FloatingButtons from "../components/FloatingButtons";
import FloatingCard from "../components/FloatingCard";
import SearchCard from "../components/SearchCard";

const MapScreen = () => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
      <SearchBarComponent />
      <FloatingButtons />
      <SearchCard />
      <Map />
      <FloatingCard />
    </KeyboardAvoidingView>
  );
};

export default MapScreen;
