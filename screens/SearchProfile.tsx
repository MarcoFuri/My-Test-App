import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const ApiKey = 'RGAPI-a151ee6a-a1bb-4da8-abc6-37eaec1aeddd'

const SearchProfile = () => {

  const PAGE_STATUS = {
    INITIAL: 'INITIAL',
    SEARCH_SUCCESS: 'SEARCH_SUCCESS',
    SEARCH_FAILED: 'SEARCH_FAILED',
  }

  const [pageStatus, setPageStatus] = useState<any>(PAGE_STATUS.INITIAL);
  const [searchParam, setSearchParam] = useState<string>('')

  const handleSearchQuery = async () => {
    await fetch()
  }

  return (
    <>
      <View style={styles.searchContainer}>
        <TextInput
          onChangeText = {newText => setSearchParam(newText)}
          style={styles.searchBarStyle}
          placeholder='Search Profile'
          placeholderTextColor='white'
        />
        <TouchableOpacity
          onPress={() => handleSearchQuery()}
          style={styles.searchButton}
        >
          <Ionicons name={'search'} size={30} color="white" />
        </TouchableOpacity>
      </View>
      {pageStatus === PAGE_STATUS.INITIAL &&
        <>
          <Text style={styles.welcomeStyle}>
            WELCOME!
          </Text>
          <Text
            style={styles.welcomeSubtitleStyle}>
            Look for your<Text style={styles.boldText}> profile </Text>
            and find out your latest
            <Text style={styles.boldText}> stats!</Text>
          </Text>
        </>
      }
    </>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    padding: 10
  },
  searchBarStyle: {
    flex: 5,
    height: 60,
    backgroundColor: '#022a4a',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 10
  },
  searchButton: {
    flex: 1,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: '#1a1f31',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeStyle: {
    fontSize: 22,
    fontWeight: '900',
    fontStyle: 'italic',
    color:'white',
    marginHorizontal: 20,
    marginVertical: 8,
  },
  welcomeSubtitleStyle: {
    width: '50%',
    fontSize: 20,
    fontWeight: '400',
    fontStyle: 'italic',
    color:'white',
    marginHorizontal: 20,
  },
  boldText: {
    fontWeight: '800',
  }
})

export default SearchProfile;
