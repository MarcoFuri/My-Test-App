import React from 'react';
import Restaurant from "./screens/Restaurant.tsx";
import Bank from "./screens/Bank.tsx";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIconComm from "react-native-vector-icons/MaterialCommunityIcons";
import Inicons from "react-native-vector-icons/Ionicons";

function App(): React.JSX.Element {
  // const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      {/*<SafeAreaView>*/}
      {/*  <Restaurant />*/}
      {/*</SafeAreaView>*/}
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            let iconName

            if (route.name === "Restaurant") {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === "Bank") {
              iconName = focused ? 'bag' : 'bag-outline';
            }
            
            return <Inicons name={iconName} size={20} color={color}/>
          },
          tabBarActiveTintColor: '#2eb065',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen
          name="Restaurant"
          options={{title: 'Home Page'}}
          component={Restaurant}
        />
        <Tab.Screen
          name="Bank"
          options={{title: 'Payments'}}
          component={Bank} />
      </Tab.Navigator>
      {/*<Stack.Navigator>*/}
          {/*<Stack.Screen name="Restaurant" component={Restaurant} />*/}
          {/*<Stack.Screen name="Bank" options={{title: 'Payment section'}} component={Bank} />*/}
      {/*</Stack.Navigator>*/}
    </NavigationContainer>
  );
}

export default App;
