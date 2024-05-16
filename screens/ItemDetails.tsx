import { useEffect, useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { VersionLink } from "../Links/VersionLink.tsx";
import FontAwesomeIcons6 from "react-native-vector-icons/FontAwesome6";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const ItemDetails = ({route, navigation} : NativeStackScreenProps<any>) => {

  const {item} = route.params;
  const [builtFrom, setBuiltFrom] = useState<string[]>([]);
  const [buildInto, setBuildInto] = useState<string[]>([]);

  useEffect(() => {
    if (item.details && item.details.into) {
      const into = item.details.into
      fetch(VersionLink + 'data/en_US/item.json')
        .then(res => res.json())
        .then(data => {
          const filteredData : any[] = Object.keys(data.data)
            .filter(id => into.includes(id))
            .map(id => ({ id: id, details: data.data[id] }));

          setBuildInto(filteredData);
          })}
    }, [item])

  useEffect(() => {
    if (item.details && item.details.from) {
      const from = item.details.from
      fetch(VersionLink + 'data/en_US/item.json')
        .then(res => res.json())
        .then(data => {
          const filteredData : any[] = Object.keys(data.data)
            .filter(id => from.includes(id))
            .map(id => ({ id: id, details: data.data[id] }));
          setBuiltFrom(filteredData);
        })}
  }, [item])


  const decodeStats = (text: string) => {
    const decodedText = text.replace(/\\u003C/g, '<')
      .replace(/\\u003E/g, '>')
      .replace(/<br>/g, '\n');

    const breakPoint = '</stats>'
    const lastUnit = decodedText.indexOf(breakPoint)
    let cleanText = decodedText.substring(0, lastUnit + breakPoint.length)

    cleanText = cleanText.replace(/<attention>/g, '+')
      .replace(/<[^>]*>/g, '');

    return cleanText;
  }

  const decodePassive = (text: string) => {
    const decodedText = text.replace(/\\u003C/g, '<')
      .replace(/\\u003E/g, '>')
      .replace(/<br>/g, '\n');

    const startPoint = '<passive>'
    const firstUnit = decodedText.indexOf(startPoint)
    let cleanText;
    if (firstUnit !== -1){
      cleanText = decodedText.substring(firstUnit + startPoint.length, decodedText.length)
      cleanText = cleanText.replace(/<[^>]*>/g, '')
    }
    return cleanText;
  }

  return (
    <ScrollView>
      <View style={{borderWidth: 0.4, borderColor:'rgba(255,255,255, 0.3)', margin: 20, padding: 20}}>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: 'space-evenly', gap: 10}}>
          <Image
            source={{
              uri: VersionLink + `img/item/${item.id}.png`
          }}
            style={{
              width: 140,
              height: 140,
              borderRadius: 4,
          }}
          />
          <Text style={{color: 'white', fontSize: 26, fontWeight: 900, fontStyle: 'italic', flexWrap: 'wrap', flex: 1}}>{item.details.name}</Text>
        </View>
        <View>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 800, marginVertical: 20}}>{decodeStats(item.details.description)}</Text>
        </View>
        {decodePassive(item.details.description) &&
          <View>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 700, fontStyle: 'italic', marginBottom: 10}}>UNIQUE PASSIVE(S)</Text>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 500}}>{decodePassive(item.details.description)}</Text>
          </View>
        }
      </View>
      <View style={{marginHorizontal: 25}}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 800, fontStyle: 'italic', marginBottom: 5}}>ITEM COST</Text>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 700, fontStyle: 'italic', marginBottom: 10}}><FontAwesomeIcons6 name='coins'size={14} color={'white'}/> {item.details.gold.base}</Text>
      </View>
      {item.details.into &&
        <>
          <View style={{marginHorizontal: 25, marginVertical: 20}}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 800, fontStyle: 'italic'}}>BUILD INTO:</Text>
          </View>
          <View style={{width:'90%', marginHorizontal: 'auto'}}>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 5}}>
              {buildInto.map((el : any, index : number) => (
                <TouchableOpacity
                  onPress={() => {
                    console.log(item)
                    navigation.navigate("ItemDetails", {item: el});
                  }}
                  style={{width: '49%', height: 90, flexDirection: 'row', gap: 15, borderWidth: 0.4, borderColor: 'rgba(255,255,255,0.4)', marginBottom: 5, padding: 5, borderRadius: 4}}>
                  <Image
                    key={el.id}
                    source={{
                      uri:`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/${el.details.image.full}`
                    }}
                    style={{width: 80, height: 'auto'}}
                  />
                  <Text style={{color: 'white', fontSize: 14, fontWeight: 500, fontStyle: 'italic', flexWrap: 'wrap', flex: 1}}>{el.details.name}</Text>
                </TouchableOpacity>
              ))
              }
            </View>
          </View>
        </>
      }
      {item.details.from &&
        <>
          <View style={{marginHorizontal: 25, marginVertical: 20}}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 800, fontStyle: 'italic'}}>BUILT FROM:</Text>
          </View>
          <View style={{width:'90%', marginHorizontal: 'auto'}}>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 5}}>
              {builtFrom.map((el : any, index : number) => (
                <TouchableOpacity
                  onPress={() => {
                    console.log(item)
                    navigation.navigate("ItemDetails", {item: el});
                  }}
                  style={{width: '49%', height: 90, flexDirection: 'row', gap: 15, borderWidth: 0.4, borderColor: 'rgba(255,255,255,0.4)', marginBottom: 5, padding: 5, borderRadius: 4}}>
                  <Image
                    key={el.id}
                    source={{
                      uri:`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/${el.details.image.full}`
                    }}
                    style={{width: 80, height: 'auto'}}
                  />
                  <Text style={{color: 'white', fontSize: 14, fontWeight: 500, fontStyle: 'italic', flexWrap: 'wrap', flex: 1}}>{el.details.name}</Text>
                </TouchableOpacity>
              ))
              }
            </View>
          </View>
        </>
      }
    </ScrollView>
)
}

export default ItemDetails;
