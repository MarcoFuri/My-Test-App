import { Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

export interface ChampDetails {
  name: string,
  title: string,
  skins: any[],
  tags: string[],
  lore: string,
  info: {
    attack: number,
    defense: number,
    magic: number,
    difficulty: number,
  },
  spells: any[],
  passive: any,
}

const ChampDetails = ({route} : any) => {
  const {champName} = route.params;

  const [champ, setChamp] = useState<ChampDetails | null>(null );


  useEffect(() => {
    fetch(`https://ddragon.leagueoflegends.com/cdn/14.9.1/data/en_US/champion/${champName}.json`)
      .then(res => res.json())
      .then(data => {
        console.log(data.data[champName])
        setChamp(data.data[champName]);
      })
  }, [champName])

  return (
    <SafeAreaView style={{backgroundColor: 'black', height: '100%'}}>
      <ScrollView>
        <Image
          source={{uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg`}}
          style={{width: '100%', height: 300, position: 'absolute', zIndex: -1}}
        />
        <View style={{backgroundColor: 'rgba(0,0,0,0.85)', padding: 24, marginHorizontal: 10, borderWidth: 0.2, borderColor: 'grey', marginTop: 200, borderRadius: 2}}>
          <Text style={{fontSize: 26, fontWeight: 900, color: 'white', fontStyle: 'italic'}}>{champ?.name.toUpperCase()}</Text>
          <Text style={{fontSize: 16, fontWeight: 700, color: 'white', fontStyle: 'italic'}}>{champ?.title.toUpperCase()}</Text>
          <View style={{flexDirection: 'row', marginVertical: 25, justifyContent: 'space-around'}}>
            <View>
              <Text style={{fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.8)', fontStyle: 'italic'}}>ROLE:</Text>
              <Text style={{fontWeight: 600, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic'}}>{champ?.tags.join(',')}</Text>
            </View>
            <View>
              <Text style={{fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.8)', fontStyle: 'italic'}}>DIFFICULTY:</Text>
              <Text style={{fontWeight: 600, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic'}}>{champ?.info.difficulty}/10</Text>
            </View>
          </View>
          <View>
            <Text style={{color: 'white'}}>{champ?.lore}</Text>
          </View>
        </View>
        <View style={{marginHorizontal: 30, marginVertical: 20}}>
          <Text style={{fontSize: 20, fontWeight: 900, color: 'white', fontStyle: 'italic'}}>SKILLS</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {champ?.spells.map((spell, index) => (
              <TouchableOpacity
                key={index}
                style={{width: '40%', alignItems: 'center', margin: 10}}
              >
                <Image
                  source={{uri:`https://ddragon.leagueoflegends.com/cdn/14.9.1/img/spell/${spell.image.full}`}}
                  style={{width: 80, height: 80, borderRadius: 8, marginVertical: 15}}
                />
                <Text style={{color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontStyle: 'italic'}}>{spell.name.toUpperCase()}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={{marginHorizontal: 30, marginVertical: 20}}>
          <Text style={{fontSize: 20, fontWeight: 900, color: 'white', fontStyle: 'italic'}}>UNIQUE PASSIVE</Text>
          <TouchableOpacity
            style={{alignItems: 'center', margin: 15}}
          >
            <Image
              source={{uri:`https://ddragon.leagueoflegends.com/cdn/14.9.1/img/passive/${champ?.passive.image.full}`}}
              style={{width: 80, height: 80, borderRadius: 8, marginVertical: 15}}
            />
            <Text style={{color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontStyle: 'italic'}}>
              {champ?.passive.name.toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 30, gap: 20}}>
          <Text style={{fontSize: 20, fontWeight: 900, color: 'white', fontStyle: 'italic'}}>SKINS</Text>
          {champ?.skins.map((skin, index) => (
            <ImageBackground
              key={index}
              source={{uri:`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_${skin.num}.jpg`}}
              style={{width: '100%', height: 220, justifyContent: 'flex-end'}}
            >
              <Text style={{color:'white', fontStyle: 'italic', fontWeight: 800, margin: 10}}>{skin.name.toUpperCase()}</Text>
            </ImageBackground>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ChampDetails;
