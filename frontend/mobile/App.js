import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./Screens/Restaurant/HomeScreen";
import SignupScreen from "./Screens/auth/SignupScreen";
import SigninScreen from "./Screens/auth/SigninScreen";
import RecipeDetailScreen from "./Screens/Restaurant/RecipeDetailScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import DATA from "./Restaurant/DATA";
import { Provider } from 'react-redux';
import store from './app/store'

const Stack = createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='welcome'
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="Details" recipe={DATA[0].recipes[1]} component={RecipeDetailScreen} />
          <Stack.Screen name="welcome" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({

});
