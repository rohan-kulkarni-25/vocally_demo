import MapScreen from ".././screens/MapScreen";
import { useSelector } from "react-redux";
import { View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const theme = useSelector((state) => state.theme.theme);
  const isDarkTheme = theme == "dark";
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        showLable: false,
        tabBarStyle: {
          borderTopWidth: 0,
          paddingBottom: 10,
          paddingTop: 5,
          position: "absolute",
          elevation: 0,
          height: 70,
          backgroundColor: isDarkTheme ? "black" : "#ffffff",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <MaterialIcons
              name="explore"
              size={30}
              color={isDarkTheme ? "white" : "black"}
            />
          ),
        }}
        name="Explore"
        component={MapScreen}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <MaterialIcons
              name="map"
              size={30}
              color={isDarkTheme ? "white" : "black"}
            />
          ),
        }}
        name="Map"
        component={MapScreen}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <View
              style={{
                backgroundColor: "red",
                padding: 15,
                borderRadius: 100,
                position: "absolute",
                top: -25,
              }}
            >
              <MaterialIcons name="add" color={"white"} size={30} />
            </View>
          ),
        }}
        name="Add"
        component={MapScreen}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <MaterialIcons
              name="notifications"
              size={30}
              color={isDarkTheme ? "white" : "black"}
            />
          ),
        }}
        name="Notifications"
        component={MapScreen}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <MaterialIcons
              name="person"
              size={30}
              color={isDarkTheme ? "white" : "black"}
            />
          ),
        }}
        name="Profile"
        component={MapScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
