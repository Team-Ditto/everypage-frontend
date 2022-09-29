import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../screens/IndexScreen";
import { Provider } from "react-redux";
import configureStore from "../redux/store";

const reduxStore = configureStore();
const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={reduxStore}>
      <NavigationContainer>
        <Stack.Navigator initialRoute="Home">
          <Stack.Screen name="Home" component={IndexScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppStack;
