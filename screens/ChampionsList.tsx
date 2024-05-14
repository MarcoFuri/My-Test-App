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


const ChampionsList = ({ navigation } : NativeStackScreenProps <any> ) => {

  const [champsFetched, setChampsFetched] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch("https://ddragon.leagueoflegends.com/cdn/14.9.1/data/en_US/champion.json")
      .then(res => res.json())
      .then(data => {
        const champs : string[] = [];
        for (let key in data.data) {
          champs.push(key)
        }
        setChampsFetched(champs)
        setLoading(false)
      })
      }, []);


  const renderChamps = (champName : string) => {
    let champImg = `https://ddragon.leagueoflegends.com/cdn/14.9.1/img/champion/${champName}.png`

    return (
        <TouchableOpacity
          onPress={() => navigation.navigate('ChampDetails', {champName: champName})}
          style={styles.touchableOpacityStyle}>
          <Image
            source={{uri: champImg}}
            style={styles.touchableOpacityImageStyle}
          />
          <Text style={styles.touchableOpacityTextStyle}>{champName}</Text>
        </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      {loading ?
        <ActivityIndicator />
        :
        <FlatList
          data={champsFetched}
          renderItem={({item, index}) => renderChamps(item)}
          horizontal={false}
          numColumns={3}
        >
        </FlatList>
      }

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
    color:'white'
  },
  touchableOpacityImageStyle: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginTop: 12
  },
  safeAreaViewStyle: {
    marginTop: 3
  }
})

export default ChampionsList;
