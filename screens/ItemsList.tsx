import { Key, SetStateAction, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text, TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { VersionLink } from "../Links/VersionLink.tsx";

interface ItemsDetails {
  id: string,
  details: {
    name: string
  }
}

const ItemsList = ({ navigation }: NativeStackScreenProps<any>) => {

  const PAGE_STATUS = {
    INITIAL: 'INITIAL',
    SEARCHING: 'SEARCHING',
  }

  const [pageStatus, setPageStatus] = useState<any>(PAGE_STATUS.INITIAL);
  const [itemsFetched, setItemsFetched] = useState<ItemsDetails[] | any>(null);
  const [itemsSearched, setItemsSearched] = useState<[]>([]);

  useEffect(() => {
    fetch(VersionLink + 'data/en_US/item.json')
      .then(res => res.json())
      .then(data => {
        const items: {id: string, details: ItemsDetails}[] = [];
        const itemNames : any[] = []

        for (let key in data.data) {
          //non-purchasable items has the key 'inStore' equal to false
          if (data.data[key].inStore !== false && data.data[key].requiredAlly !== 'Ornn') {
            const itemName = data.data[key].name
            if (!itemNames.includes(itemName)){
              items.push({id: key, details: data.data[key]});
              itemNames.push(itemName);
            }
          }
        }
        setItemsFetched(items);
      });
  }, []);


  // @ts-ignore
  const renderItems = (item) => {
    let itemImg = `https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/${item.details.image.full}`;
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ItemDetails", {item: item});
        }}
        key={item.id}
        style={styles.itemTouchableOpacityStyle}
      >
        <Image
          source={{ uri: itemImg }}
          style={styles.touchableOpacityImageStyle}
        />
        <Text style={styles.touchableOpacityTextStyle}>{item.details.name}</Text>
      </TouchableOpacity>
    );
  };

  const handleChangeText = (newText: SetStateAction<string>)=> {
    const searchedElements = itemsFetched.filter((item: { details: { name: SetStateAction<string>[]; }; }) => item.details.name.includes(newText))
    setItemsSearched(searchedElements);
    setPageStatus(PAGE_STATUS.SEARCHING);
  }

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          onChangeText = {newText => handleChangeText(newText)}
          style={styles.textInputStyle}
          placeholder='Search Item'
          placeholderTextColor='white'
        />
        <TouchableOpacity
          style={styles.filterTouchableOpacityStyle}
        >
          <Text style={{color: 'white'}}>Filters</Text>
          <Ionicons name={'filter-sharp'} size={20} color="white" />
        </TouchableOpacity>
      </View>
      {pageStatus === PAGE_STATUS.INITIAL &&
        <FlatList
          data={itemsFetched}
          renderItem={({item}) => renderItems(item)}
          horizontal={false}
          numColumns={4}
        >
        </FlatList>
      }
      {pageStatus === PAGE_STATUS.SEARCHING &&
        <FlatList
          data={itemsSearched}
          renderItem={({item}) => renderItems(item)}
          horizontal={false}
          numColumns={4}
        />
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  itemTouchableOpacityStyle: {
    flex:1,
    maxWidth: "22%",
    height:'auto',
    marginVertical: 5,
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: '#022a4a',
    paddingTop: 5,
  },
  touchableOpacityTextStyle: {
    width: 'auto',
    fontWeight: '800',
    color:'white',
    fontSize: 12,
    padding: 6,
    flexWrap: 'wrap'
  },
  touchableOpacityImageStyle: {
    width:80,
    height:80,
    marginBottom: 5,
    alignSelf: 'center'
  },
  safeAreaViewStyle: {
    marginTop: 3
  },
  textInputStyle: {
    backgroundColor: '#022a4a',
    width: '75%',
    padding: 12,
    margin: 5,
    color: 'white',
    borderRadius: 2
  },
  filterTouchableOpacityStyle: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default ItemsList;
