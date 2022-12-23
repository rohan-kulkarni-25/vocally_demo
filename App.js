import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import { store } from "./store/store";
import { Provider } from "react-redux";
import TabNavigator from "./navigation/TabNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <TailwindProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </TailwindProvider>
    </Provider>
  );
}
