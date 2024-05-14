import Restaurant from './Restaurant.tsx';
import Bank from './Bank.tsx';
import PastOrders from "./PastOrders.tsx";
import OrderDetails from "./OrderDetails.tsx";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Inicons from "react-native-vector-icons/Ionicons";

function NavigationPageRestaurant() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const MainTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({route} : NativeStackScreenProps <any>) => ({
          tabBarIcon: ({focused, color} : ({focused: boolean, color: string})) => {
            let iconName

            if (route.name === "Restaurant") {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === "Bank") {
              iconName = focused ? 'card' : 'card-outline';
            } else if (route.name === "PastOrders") {
              iconName = focused ? 'bag' : 'bag-outline';
            }

            // @ts-ignore
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
          name="PastOrders"
          options={{title: 'Past Orders'}}
          component={PastOrders}
        />
        <Tab.Screen
          name="Bank"
          options={{title: 'Wallet'}}
          component={Bank} />
      </Tab.Navigator>
    )
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          options={{title: 'Home Page', headerShown: false}}
          component={MainTabNavigator}
        />
        <Stack.Screen
          name="Restaurant"
          options={{title: 'Home Page'}}
          component={Restaurant}
        />
        <Stack.Screen
          name="PastOrders"
          options={{title: 'Past Orders'}}
          component={PastOrders}
        />
        <Stack.Screen
          name="Bank"
          options={{title: 'Wallet'}}
          component={Bank} />
        <Stack.Screen
          name="OrderDetails"
          options={{title: 'Order Details', headerBackTitle: 'Back'}}
          component={OrderDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationPageRestaurant;
