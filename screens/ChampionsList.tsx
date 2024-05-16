import { Key, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image, ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { VersionLink } from "../Links/VersionLink.tsx";

const ChampionsList = ({ navigation } : NativeStackScreenProps <any> ) => {

  const [champsFetched, setChampsFetched] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch(VersionLink + 'data/en_US/champion.json')
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
    let champImg = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg`

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
          numColumns={2}
          style={{marginHorizontal: 10}}
        >
        </FlatList>
      }

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    flex:1,
    height:170,
    marginBottom: 20
  },
  touchableOpacityTextStyle: {
    width: 200,
    fontWeight: '800',
    color:'white',
    fontSize: 16,
    backgroundColor: '#022a4a',
    padding: 6
  },
  touchableOpacityImageStyle: {
    width:200,
    height:'90%'
  },
  safeAreaViewStyle: {
    marginTop: 3
  }
})

export default ChampionsList;
