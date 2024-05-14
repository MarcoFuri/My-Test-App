import { Key, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ChampDetails from "./ChampDetails.tsx";

interface ItemsDetails  {
  id: string,
  name: string
}

const ItemsList = ({ navigation } : NativeStackScreenProps <any> ) => {

  const [itemsFetched, setItemsFecthed] = useState<ItemsDetails[] | any>(null );
  // const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch("https://ddragon.leagueoflegends.com/cdn/14.9.1/data/en_US/item.json")
      .then(res => res.json())
      .then(data => {
        const items : ItemsDetails[] = [];
        for (let key in data.data) {
          items.push({
            id: key,
            name: data.data[key].name
          })
        }
        setItemsFecthed(items)
      })
  }, []);


  // @ts-ignore
  const renderItems = (item) => {
    let itemImg = `https://ddragon.leagueoflegends.com/cdn/14.9.1/img/item/${item.id}.png`
    
    return (
      <TouchableOpacity
        // onPress={() => navigation.navigate('ChampDetails', {champName: champName})}
        key = {item.id}
        style={styles.touchableOpacityStyle}>
        <Text style={styles.touchableOpacityTextStyle}>{item.name}</Text>
        <Image
          source={{uri: itemImg}}
          style={styles.touchableOpacityImageStyle}
        />
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>

        <FlatList
          data={itemsFetched}
          renderItem={({item}) => renderItems(item)}
          horizontal={false}
          numColumns={3}
        >
        </FlatList>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    width: 80,
    height: 100,
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 8,
    margin: 3,
    backgroundColor: '#3c3c3c',
  },
  touchableOpacityTextStyle: {
    fontWeight: '800',
    marginVertical: 5,
    color:'white'
  },
  touchableOpacityImageStyle: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  safeAreaViewStyle: {
    marginTop: 3
  }
})


export default ItemsList;
