import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../screens/IndexScreen";
import { Provider } from "react-redux";
import configureStore from "../redux/store";
import Login from "../screens/User/Login";
import Signup from "../screens/User/Signup";
import Scanner from "../screens/Assets/Scanner";
import Wishlist from "../screens/Wishlist/Wishlist";

const reduxStore = configureStore();
const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={reduxStore}>
      <NavigationContainer>
        <Stack.Navigator initialRoute="Home">
          <Stack.Screen name="Home" component={IndexScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Scanner" component={Scanner} />
          <Stack.Screen name="Wishlist" component={Wishlist} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppStack;
