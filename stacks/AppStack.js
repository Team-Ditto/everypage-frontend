import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IndexScreen from "../screens/IndexScreen";
import { Provider } from "react-redux";
import configureStore from "../redux/store";
import Login from "../screens/User/Login";
import Signup from "../screens/User/Signup";
import Scanner from "../screens/Assets/Scanner";
import SingleBook from "../screens/Cards/Book/SingleBook";
import TabStack from "./TabStack";
import AddBook from "../screens/Main/Book/AddBook";
const reduxStore = configureStore();
const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={reduxStore}>
      <NavigationContainer>
        <Stack.Navigator initialRoute="BottomTab">
          <Stack.Screen
            name="BottomTab"
            component={TabStack}
            options={({ route }) => ({
              headerShown: false,
            })}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Scanner" component={Scanner} />
          <Stack.Screen name="SingleBook" component={SingleBook} />
          <Stack.Screen name="AddBook" component={AddBook} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppStack;
