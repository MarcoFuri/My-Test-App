import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import ChampionsList from "./ChampionsList.tsx";
import ChampDetails from './ChampDetails.tsx'
import {useColorScheme} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Inicons from "react-native-vector-icons/Ionicons";
import Restaurant from "./Restaurant.tsx";
import ItemsList from "./ItemsList.tsx";
import ItemDetails from "./ItemDetails.tsx";

const NavigationLol = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const theme = useColorScheme();

  const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({route} : NativeStackScreenProps <any>) => ({
        tabBarIcon: ({focused, color} : ({focused: boolean, color: string})) => {
          let iconName

          if (route.name === 'ChampionsList') {
            iconName = focused ? 'list-circle-sharp' : 'list-circle-outline';
          } else if (route.name === 'ItemsList') {
            iconName = focused ? 'list-circle-sharp' : 'list-circle-outline';
          }
          // @ts-ignore
          return <Inicons name={iconName} size={20} color={color}/>
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
      })}>
        <Tab.Screen
          name='ChampionsList'
          options={{title: `CHAMPION'S LIST`}}
          component={ChampionsList}
        />
        <Tab.Screen
          name='ItemsList'
          options={{title: `ITEM'S LIST`}}
          component={ItemsList}
        />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          options={{title: `Champion's List`, headerShown: false}}
          component={BottomTabNavigator}
        />
        <Stack.Screen
          name='ChampionList'
          options={{title: `Champion's List`}}
          component={ChampionsList}
        />
        <Stack.Screen
          name='ChampDetails'
          options={{title: 'Champion Details', headerBackTitle: 'Back'}}
          component={ChampDetails}
        />
        <Stack.Screen
          name='ItemDetails'
          options={{title: `Item's Detail`, headerBackTitle: 'Back'}}
          component={ItemDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationLol;
