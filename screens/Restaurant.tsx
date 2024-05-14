import {
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from "react-native";
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from "react-native-linear-gradient";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Restaurant = () => {

  const restaurants = [
    {
      key: 1,
      img: './imgs/restaurant.png',
      name: 'The Lighthouse Restaurant & Rooftor',
      occasion: 'Breakfast',
      reviews: '16 Reviews',
      rating: 4.6,
    },
    {
      key: 2,
      img: './imgs/restaurant.png',
      name: 'The Rustic Cabin Grill',
      occasion: 'Lunch',
      reviews: '22 Reviews',
      rating: 4.2,
    },
    {
      key: 3,
      img: './imgs/restaurant.png',
      name: 'Sunset Bistro & Beachfront Cafe',
      occasion: 'Dinner',
      reviews: '30 Reviews',
      rating: 4.8,
    },
    {
      key: 4,
      img: './imgs/restaurant.png',
      name: 'Mountain View Tavern',
      occasion: 'Happy Hour',
      reviews: '12 Reviews',
      rating: 4.4,
    },
    {
      key: 5,
      img: './imgs/restaurant.png',
      name: 'Harbor Side Seafood Shack',
      occasion: 'Brunch',
      reviews: '18 Reviews',
      rating: 4.7,
    },
    {
      key: 6,
      img: './imgs/restaurant.png',
      name: 'Cityscape Fusion Restaurant',
      occasion: 'Dinner',
      reviews: '25 Reviews',
      rating: 4.5,
    },
  ];

  const Stack = createNativeStackNavigator()

  return (
    <>
      <ScrollView>
        <View
          style={{height: '20%', width: '100%', backgroundColor: '#2eb065'}}>
          <SafeAreaView>
            <View
              style={{
                width: '85%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginHorizontal: 'auto',
                marginTop: 15,
                gap: 10,
              }}>
              <Image
                source={{
                  uri: 'https://media.licdn.com/dms/image/C4D03AQFxPL931ElfUQ/profile-displayphoto-shrink_200_200/0/1647116737476?e=1720656000&v=beta&t=NtOw40mAnjNl6BkQhhEor_N1lkuu5jXEEr_5vim61wA',
                }}
                style={{width: 45, height: 45, borderRadius: 50}}
              />
              <View>
                <Text style={{fontSize: 12, color: 'white'}}>Good Morning</Text>
                <Text style={{fontSize: 16, fontWeight: 700, color: 'white'}}>
                  Marco Furi
                </Text>
              </View>
              <IconCommunity name="food" size={30} color="white" />
            </View>
            <TextInput
              placeholder={'eg. "pizza"'}
              placeholderTextColor="white"
              style={styles.TextInput}></TextInput>
            <View style={styles.containerWaysToDeliver}>
              <View style={styles.coupledWaysToDeliver}>
                <View style={styles.waysToDeliver}>
                  <LinearGradient
                    colors={['#e2f5ea', 'white']}
                    style={styles.circleIcon}>
                    <IconCommunity name='food' size={20} color='black' />
                  </LinearGradient>
                  <Text style={styles.textWaysToDeliver}>Delivery</Text>
                </View>
                <View style={styles.waysToDeliver}>
                  <LinearGradient
                    colors={['#e2f5ea', 'white']}
                    style={styles.circleIcon}>
                    <IconCommunity name='truck-delivery' size={20} color='black'  />
                  </LinearGradient>
                  <Text style={styles.textWaysToDeliver}>Bargain</Text>
                </View>
              </View>
              <View style={styles.coupledWaysToDeliver}>
                <View style={styles.waysToDeliver}>
                  <LinearGradient
                    colors={['#e2f5ea', 'white']}
                    style={styles.circleIcon}>
                    <IconCommunity name='food-takeout-box' size={20} color='black'  />
                  </LinearGradient>
                  <Text style={styles.textWaysToDeliver}>Take Away</Text>
                </View>
                <View style={styles.waysToDeliver}>
                  <LinearGradient
                    colors={['#e2f5ea', 'white']}
                    style={styles.circleIcon}>
                    <MaterialIcon name='people' size={20} color='black' style={{}} />
                  </LinearGradient>
                  <Text style={styles.textWaysToDeliver}>Invite Friends</Text>
                </View>
              </View>
              <View style={styles.coupledWaysToDeliver}>
                <View style={styles.waysToDeliver}>
                  <LinearGradient
                    colors={['#e2f5ea', 'white']}
                    style={styles.circleIcon}>
                    <MaterialIcon name='table-restaurant' size={20} color='black'  />
                  </LinearGradient>
                  <Text style={styles.textWaysToDeliver}>Dine In</Text>
                </View>
                <View style={styles.waysToDeliver}>
                  <LinearGradient
                    colors={['#e2f5ea', 'white']}
                    style={styles.circleIcon}>
                    <MaterialIcon name='business-center' size={20} color='black' />
                  </LinearGradient>
                  <Text style={styles.textWaysToDeliver}>Corporate</Text>
                </View>
              </View>
            </View>
            <View style={{marginTop: 25}}>
              <ScrollView
                style={{
                  width: '85%',
                  marginHorizontal: 'auto',
                }}
                horizontal={true}>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <ImageBackground
                    source={{
                      uri: 'https://citynews-cibotoday.stgy.ovh/~media/square-hi/62867486759336/coquinarius-fiesole-2.jpg'
                    }}
                    style={styles.bannerContainer}>
                    <Text style={{fontSize: 30, fontWeight: 900, color: '#ecba26'}}>
                      50% OFF
                    </Text>
                    <TouchableOpacity
                      style={styles.buyNowButton}>
                      <Text
                        style={{color: 'black', fontSize: 12, fontWeight: 700}}>
                        Buy Now
                      </Text>
                    </TouchableOpacity>
                  </ImageBackground>
                  <ImageBackground
                    source={{
                      uri: 'https://citynews-cibotoday.stgy.ovh/~media/square-hi/62867486759336/coquinarius-fiesole-2.jpg'
                    }}
                    style={styles.bannerContainer}>
                    <Text style={{fontSize: 30, fontWeight: 900, color: '#ecba26'}}>
                      50% OFF
                    </Text>
                    <TouchableOpacity
                      style={styles.buyNowButton}>
                      <Text
                        style={{color: 'black', fontSize: 12, fontWeight: 700}}>
                        Buy Now
                      </Text>
                    </TouchableOpacity>
                  </ImageBackground>
                  <ImageBackground
                    source={{
                      uri: 'https://citynews-cibotoday.stgy.ovh/~media/square-hi/62867486759336/coquinarius-fiesole-2.jpg'
                    }}
                    style={styles.bannerContainer}>
                    <Text style={{fontSize: 30, fontWeight: 900, color: '#ecba26'}}>
                      50% OFF
                    </Text>
                    <TouchableOpacity
                      style={styles.buyNowButton}>
                      <Text
                        style={{color: 'black', fontSize: 12, fontWeight: 700}}>
                        Buy Now
                      </Text>
                    </TouchableOpacity>
                  </ImageBackground>
                  <ImageBackground
                    source={{
                      uri: 'https://citynews-cibotoday.stgy.ovh/~media/square-hi/62867486759336/coquinarius-fiesole-2.jpg'
                    }}
                    style={styles.bannerContainer}>
                    <Text style={{fontSize: 30, fontWeight: 900, color: '#ecba26'}}>
                      50% OFF
                    </Text>
                    <TouchableOpacity
                      style={styles.buyNowButton}>
                      <Text
                        style={{color: 'black', fontSize: 12, fontWeight: 700}}>
                        Buy Now
                      </Text>
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              </ScrollView>
            </View>
            <View
              style={{width: '85%', marginHorizontal: 'auto', marginTop: 20}}>
              <Text style={{color: 'grey'}}>LATEST RESTAURANT</Text>
            </View>
            {restaurants.map(item => (
              <View
                key={item.key}
                style={{
                  width: '90%',
                  marginHorizontal: 'auto',
                  flexDirection: 'row',
                  marginTop: 8,
                  padding: 15,
                  gap: 12,
                  paddingBottom: 15,
                  backgroundColor: 'white',
                  borderRadius: 8,
                }}>
                <Image
                  source={{
                    uri: 'https://citynews-cibotoday.stgy.ovh/~media/square-hi/62867486759336/coquinarius-fiesole-2.jpg',
                  }}
                  style={{width: 90, height: 90, borderRadius: 8}}
                />
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 13, fontWeight: 700}}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      width: '30%',
                      borderRadius: 16,
                      borderColor: 'grey',
                      borderWidth: 0.5,
                      marginTop: 6,
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                        padding: 4,
                        textAlign: 'center',
                        color: 'grey',
                      }}>
                      {item.occasion}
                    </Text>
                  </View>
                  <View style={{position: 'relative', marginTop: 26}}>
                    <Text
                      style={{color: '#5ebb86', fontSize: 12, fontWeight: 700}}>
                      {item.reviews}
                    </Text>
                    <View
                      style={{
                        position: 'absolute',
                        end: 0,
                        flexDirection: 'row',
                        alignItems: 'center'
                      }}>
                      <MaterialIcon name='star' color='#ecba26' size={18} />
                      <Text style={{
                        fontSize: 12,
                        fontWeight: 700,
                      }}>
                        {item.rating}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
            <View
              style={{
                marginTop: 30,
                marginBottom: 20,
                width: '85%',
                marginHorizontal: 'auto',
              }}>
              <Text style={{color: 'grey'}}>TOP PICKED ITEM</Text>
            </View>
            <ScrollView
              style={{
                width: '90%',
                marginHorizontal: 'auto',
                marginBottom: 15,
              }}
              horizontal={true}>
              <View style={{flexDirection: 'row', gap: 12}}>
                <ImageBackground
                  source={{
                    uri: 'https://www.shutterstock.com/image-photo/healthy-food-clean-eating-selection-600nw-722718082.jpg'
                  }}
                  style={styles.topPickedContainer}>
                  <Text style={{fontSize: 18, fontWeight: 900, color: 'white'}}>
                    Char Kway Teow
                  </Text>
                  <View style={styles.breakfastTopPick}>
                    <Text style={styles.breakfastTopPickText}>Breakfast</Text>
                  </View>
                  <View style={{marginTop: 10}}>
                    <View
                      style={{
                        position: 'absolute',
                        end: 0,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <MaterialIcon name='star' color='#ecba26' size={18} />
                      <Text style={{
                        color: 'white',
                        fontWeight: 800,
                      }}>
                        4.8
                      </Text>
                    </View>
                    <Text
                      style={{color: '#5ebb86', fontSize: 14, fontWeight: 900}}>
                      12 Reviews
                    </Text>
                  </View>
                </ImageBackground>
                <ImageBackground
                  source={{
                    uri: 'https://www.shutterstock.com/image-photo/healthy-food-clean-eating-selection-600nw-722718082.jpg'
                  }}
                  style={styles.topPickedContainer}>
                  <Text style={{fontSize: 18, fontWeight: 900, color: 'white'}}>
                    Char Kway Teow
                  </Text>
                  <View style={styles.breakfastTopPick}>
                    <Text style={styles.breakfastTopPickText}>Breakfast</Text>
                  </View>
                  <View style={{marginTop: 10}}>
                    <View
                      style={{
                        position: 'absolute',
                        end: 0,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <MaterialIcon name='star' color='#ecba26' size={18} />
                      <Text style={{
                        color: 'white',
                        fontWeight: 800,
                      }}>
                        4.8
                      </Text>
                    </View>
                    <Text
                      style={{color: '#5ebb86', fontSize: 14, fontWeight: 900}}>
                      12 Reviews
                    </Text>
                  </View>
                </ImageBackground>
                <ImageBackground
                  source={{
                    uri: 'https://www.shutterstock.com/image-photo/healthy-food-clean-eating-selection-600nw-722718082.jpg'
                  }}
                  style={styles.topPickedContainer}>
                  <Text style={{fontSize: 18, fontWeight: 900, color: 'white'}}>
                    Char Kway Teow
                  </Text>
                  <View style={styles.breakfastTopPick}>
                    <Text style={styles.breakfastTopPickText}>Breakfast</Text>
                  </View>
                  <View style={{marginTop: 10}}>
                    <View
                      style={{
                        position: 'absolute',
                        end: 0,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <MaterialIcon name='star' color='#ecba26' size={18} />
                      <Text style={{
                        color: 'white',
                        fontWeight: 800,
                      }}>
                        4.8
                      </Text>
                    </View>
                    <Text
                      style={{color: '#5ebb86', fontSize: 14, fontWeight: 900}}>
                      12 Reviews
                    </Text>
                  </View>
                </ImageBackground>
                <ImageBackground
                  source={{
                    uri: 'https://www.shutterstock.com/image-photo/healthy-food-clean-eating-selection-600nw-722718082.jpg'
                  }}
                  style={styles.topPickedContainer}>
                  <Text style={{fontSize: 18, fontWeight: 900, color: 'white'}}>
                    Char Kway Teow
                  </Text>
                  <View style={styles.breakfastTopPick}>
                    <Text style={styles.breakfastTopPickText}>Breakfast</Text>
                  </View>
                  <View style={{marginTop: 10}}>
                    <View
                      style={{
                        position: 'absolute',
                        end: 0,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <MaterialIcon name='star' color='#ecba26' size={18} />
                      <Text style={{
                        color: 'white',
                        fontWeight: 800,
                      }}>
                        4.8
                      </Text>
                    </View>
                    <Text
                      style={{color: '#5ebb86', fontSize: 14, fontWeight: 900}}>
                      12 Reviews
                    </Text>
                  </View>
                </ImageBackground>
                <ImageBackground
                  source={{
                    uri: 'https://www.shutterstock.com/image-photo/healthy-food-clean-eating-selection-600nw-722718082.jpg'
                  }}
                  style={styles.topPickedContainer}>
                  <Text style={{fontSize: 18, fontWeight: 900, color: 'white'}}>
                    Char Kway Teow
                  </Text>
                  <View style={styles.breakfastTopPick}>
                    <Text style={styles.breakfastTopPickText}>Breakfast</Text>
                  </View>
                  <View style={{marginTop: 10}}>
                    <View
                      style={{
                        position: 'absolute',
                        end: 0,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <MaterialIcon name='star' color='#ecba26' size={18} />
                      <Text style={{
                        color: 'white',
                        fontWeight: 800,
                      }}>
                        4.8
                      </Text>
                    </View>
                    <Text
                      style={{color: '#5ebb86', fontSize: 14, fontWeight: 900}}>
                      12 Reviews
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({

  circleIcon: {
    width: 45,
    height: 45,
    borderRadius: 50,
    borderColor: '#2eb065',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWaysToDeliver: {
    fontSize: 12,
    fontWeight: '800',
  },
  waysToDeliver: {
    gap: 8,
    alignItems: 'center',
  },
  coupledWaysToDeliver: {
    width: '90%',
    justifyContent: 'space-between',
    marginTop: 35,
    marginHorizontal: 'auto',
    gap: 40,
  },
  containerWaysToDeliver: {
    width: '85%',
    height: 250,
    marginHorizontal: 'auto',
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ebebeb',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  TextInput: {
    backgroundColor: '#58c084',
    width: '85%',
    height: 50,
    marginHorizontal: 'auto',
    paddingHorizontal: 25,
    marginTop: 30,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 0.2,
    color: 'white',
  },
  topPickedContainer: {
    width: 200,
    height: 200,
    backgroundColor: '#e2f5ea',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 20,
    justifyContent: 'flex-end',
  },
  bannerContainer: {
    width: 320,
    height: 140,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingBottom: 30,
    backgroundColor: '#e2f5ea',
    borderRadius: 8,
    overflow: 'hidden'
  },
  buyNowButton: {
    backgroundColor: 'white',
    height: 35,
    width: 100,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  breakfastTopPick: {
    width: 70,
    height: 25,
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderColor: 'grey',
    borderWidth: 0.5,
    marginTop: 6,
  },
  breakfastTopPickText: {
    fontSize: 10,
    padding: 4,
    textAlign: 'center',
    color: 'white',
    fontWeight: 900,
  },
  footerText: {
    color: 'grey',
    fontSize: 12,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default Restaurant;
