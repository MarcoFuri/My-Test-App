/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, Text, Image, View, Button, FlatList, StyleSheet, ImageBackground, TextInput, ScrollView, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

function App(): React.JSX.Element {

  // const styles = StyleSheet.create({
  //   listElement: {
  //     flex: 1,
  //     backgroundColor: '#f3f3f3',
  //     height: 80,
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     marginVertical: 4,
  //     borderRadius: 12,
  //     padding: 18,
  //     width: '90%',
  //     marginStart: 22,
  //     marginTop: 6,
  //   },
  //   bolderText: {
  //     fontWeight: 900,
  //   },
  // });
  //
  // // @ts-ignore
  // return (
  //   <SafeAreaView>
  //     <View
  //       style={{
  //         width: '90%',
  //         marginHorizontal: 'auto',
  //         flexDirection: 'row',
  //         justifyContent: 'space-between',
  //         alignItems: 'center',
  //       }}>
  //       <View>
  //         <Text style={{fontSize: 26, fontWeight: 700}}>
  //           Wallet
  //         </Text>
  //       </View>
  //       <View style={{flexDirection: 'row', gap: 10}}>
  //         <View>
  //           <Text>Send</Text>
  //         </View>
  //         <View>
  //           <Text>Receive</Text>
  //         </View>
  //       </View>
  //     </View>
  //     <View
  //       style={{
  //         width: '90%',
  //         height: 220,
  //         borderRadius: 12,
  //         alignSelf: 'center',
  //         marginTop: 16,
  //         backgroundColor: '#79bfe1',
  //         padding: 10,
  //       }}>
  //       <View style={{height: '60%', marginStart: 15, paddingTop: 15}}>
  //         <Text style={{color: 'white'}}>Total assets (USD)</Text>
  //         <Text style={{color: 'white', fontSize: 25}}>5,332.00</Text>
  //       </View>
  //       <View
  //         style={{
  //           flexDirection: 'row',
  //           justifyContent: 'space-between',
  //           marginHorizontal: 15,
  //         }}>
  //         <View>
  //           <Text style={{color: 'white'}}>Total assets (USD)</Text>
  //           <Text style={{color: 'white', fontSize: 18}}>5,332.00</Text>
  //         </View>
  //         <View>
  //           <Text style={{color: 'white'}}>Total assets (USD)</Text>
  //           <Text style={{color: 'white', fontSize: 18}}>5,332.00</Text>
  //         </View>
  //       </View>
  //     </View>
  //     <ImageBackground>
  //       <View
  //         style={{
  //           width: '90%',
  //           height: 54,
  //           borderRadius: 12,
  //           alignSelf: 'center',
  //           backgroundColor: '#ccd2e3',
  //           marginTop: 16,
  //           padding: 10,
  //         }}>
  //         <Text
  //           style={{
  //             color: 'white',
  //             marginStart: 15,
  //             fontSize: 15,
  //             fontWeight: 800,
  //           }}>
  //           Coin in hand
  //         </Text>
  //         <Text style={{color: 'white', marginStart: 15, fontSize: 12}}>
  //           Coin in hand coin in hand
  //         </Text>
  //       </View>
  //     </ImageBackground>
  //     <View
  //       style={{
  //         width: '90%',
  //         marginStart: 22,
  //         marginTop: 22,
  //         marginBottom: 10,
  //       }}>
  //       <Text style={{fontWeight: 900}}>ASSET LIST</Text>
  //     </View>
  //     <FlatList
  //       data={[
  //         {
  //           key: 'ETH',
  //           value: '+217,4210 (USD)',
  //           total: '$4,234.00',
  //           change: '+ 7.12 %',
  //         },
  //         {
  //           key: 'BTC',
  //           value: '+54,320.50 (USD)',
  //           total: '$12,345.67',
  //           change: '- 2.50 %',
  //         },
  //         {
  //           key: 'XRP',
  //           value: '-0.732 (USD)',
  //           total: '$123.45',
  //           change: '- 0.80 %',
  //         },
  //         {
  //           key: 'ADA',
  //           value: '+1.20 (USD)',
  //           total: '$987.65',
  //           change: '+ 1.25 %',
  //         },
  //         {
  //           key: 'LTC',
  //           value: '+176.80 (USD)',
  //           total: '$5,678.90',
  //           change: '- 3.75 %',
  //         },
  //         {
  //           key: 'DOGE',
  //           value: '+0.290 (USD)',
  //           total: '$456.78',
  //           change: '+ 0.25 %',
  //         },
  //         {
  //           key: 'XMR',
  //           value: '-224.60 (USD)',
  //           total: '$345.67',
  //           change: '- 1.20 %',
  //         },
  //         {
  //           key: 'XLM',
  //           value: '+0.315 (USD)',
  //           total: '$234.56',
  //           change: '+ 1.50 %',
  //         },
  //         {
  //           key: 'LINK',
  //           value: '+25.40 (USD)',
  //           total: '$3,210.00',
  //           change: '+ 2.80 %',
  //         },
  //         {
  //           key: 'BCH',
  //           value: '+690.50 (USD)',
  //           total: '$8,765.43',
  //           change: '- 0.90 %',
  //         },
  //         {
  //           key: 'EOS',
  //           value: '+5.80 (USD)',
  //           total: '$987.65',
  //           change: '+ 0.75 %',
  //         },
  //       ]}
  //       renderItem={({item}) => (
  //         <View style={[styles.listElement]}>
  //           <View>
  //             <Text style={{fontWeight: 700}}>{item.key}</Text>
  //             <Text>{item.value}</Text>
  //           </View>
  //           <View style={{alignItems: 'flex-end'}}>
  //             <Text style={{fontWeight: 700}}>{item.total}</Text>
  //             <Text>{item.change}</Text>
  //           </View>
  //         </View>
  //       )}
  //     />
  //   </SafeAreaView>
  // );

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

  const styles = StyleSheet.create({

    cyrcleIcon: {
      width: 45,
      height: 45,
      borderRadius: 50,
      backgroundColor: '#e2f5ea',
      borderColor: '#2eb065',
      borderWidth: 2,
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
      padding: 20,
      justifyContent: 'flex-end',
    },
    bannerContainer: {
      width: 320,
      height: 140,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-end',
      paddingBottom: 20,
      backgroundColor: '#e2f5ea',
      borderRadius: 8,
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
                source={require('./imgs/profile.jpg')}
                style={{width: 45, height: 45, borderRadius: 50}}
              />
              <View>
                <Text style={{fontSize: 12, color: 'white'}}>Good Morning</Text>
                <Text style={{fontSize: 16, fontWeight: 700, color: 'white'}}>
                  Marco Furi
                </Text>
              </View>
            </View>
            <TextInput
              placeholder={'eg. "pizza"'}
              placeholderTextColor="white"
              style={styles.TextInput}></TextInput>
            <View style={styles.containerWaysToDeliver}>
              <View style={styles.coupledWaysToDeliver}>
                <View style={styles.waysToDeliver}>
                  <View style={styles.cyrcleIcon}></View>
                  <Text style={styles.textWaysToDeliver}>Delivery</Text>
                </View>
                <View style={styles.waysToDeliver}>
                  <View style={styles.cyrcleIcon}></View>
                  <Text style={styles.textWaysToDeliver}>Bargain</Text>
                </View>
              </View>
              <View style={styles.coupledWaysToDeliver}>
                <View style={styles.waysToDeliver}>
                  <View style={styles.cyrcleIcon}></View>
                  <Text style={styles.textWaysToDeliver}>Take Away</Text>
                </View>
                <View style={styles.waysToDeliver}>
                  <View style={styles.cyrcleIcon}></View>
                  <Text style={styles.textWaysToDeliver}>Invite Friends</Text>
                </View>
              </View>
              <View style={styles.coupledWaysToDeliver}>
                <View style={styles.waysToDeliver}>
                  <View style={styles.cyrcleIcon}></View>
                  <Text style={styles.textWaysToDeliver}>Dine In</Text>
                </View>
                <View style={styles.waysToDeliver}>
                  <View style={styles.cyrcleIcon}></View>
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
                  <View style={styles.bannerContainer}>
                    <Text style={{fontSize: 25, color: '#2eb065'}}>
                      50% OFF
                    </Text>
                    <TouchableOpacity style={styles.buyNowButton}>
                      <Text
                        style={{color: 'black', fontSize: 12, fontWeight: 700}}>
                        Buy Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.bannerContainer}>
                    <Text style={{fontSize: 25, color: '#2eb065'}}>
                      50% OFF
                    </Text>
                    <TouchableOpacity style={styles.buyNowButton}>
                      <Text
                        style={{color: 'black', fontSize: 12, fontWeight: 700}}>
                        Buy Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.bannerContainer}>
                    <Text style={{fontSize: 25, color: '#2eb065'}}>
                      50% OFF
                    </Text>
                    <TouchableOpacity style={styles.buyNowButton}>
                      <Text
                        style={{color: 'black', fontSize: 12, fontWeight: 700}}>
                        Buy Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.bannerContainer}>
                    <Text style={{fontSize: 25, color: '#2eb065'}}>
                      50% OFF
                    </Text>
                    <TouchableOpacity style={styles.buyNowButton}>
                      <Text
                        style={{color: 'black', fontSize: 12, fontWeight: 700}}>
                        Buy Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.bannerContainer}>
                    <Text style={{fontSize: 25, color: '#2eb065'}}>
                      50% OFF
                    </Text>
                    <TouchableOpacity style={styles.buyNowButton}>
                      <Text
                        style={{color: 'black', fontSize: 12, fontWeight: 700}}>
                        Buy Now
                      </Text>
                    </TouchableOpacity>
                  </View>
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
                  width: '85%',
                  marginHorizontal: 'auto',
                  flexDirection: 'row',
                  marginTop: 18,
                  gap: 12,
                  borderBottomWidth: 0.2,
                  borderColor: 'grey',
                  paddingBottom: 15,
                }}>
                <Image
                  source={require('./imgs/restaurant.jpeg')}
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
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        position: 'absolute',
                        end: 0,
                      }}>
                      * {item.rating}
                    </Text>
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
                width: '85%',
                marginHorizontal: 'auto',
                marginBottom: 95,
              }}
              horizontal={true}>
              <View style={{flexDirection: 'row', gap: 12}}>
                <View style={styles.topPickedContainer}>
                  <Text style={{fontSize: 14, fontWeight: 700, color: '#2eb065'}}>
                    Char Kway Teow
                  </Text>
                  <View style={styles.breakfastTopPick}>
                    <Text style={styles.breakfastTopPickText}>Breakfast</Text>
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        position: 'absolute',
                        end: 0,
                      }}>
                      * 4.8
                    </Text>
                    <Text
                      style={{color: '#5ebb86', fontSize: 12, fontWeight: 700}}>
                      12 Reviews
                    </Text>
                  </View>
                </View>
                <View style={styles.topPickedContainer}>
                  <Text style={{fontSize: 14, fontWeight: 700, color: '#2eb065'}}>
                    Char Kway Teow
                  </Text>
                  <View style={styles.breakfastTopPick}>
                    <Text style={styles.breakfastTopPickText}>Breakfast</Text>
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        position: 'absolute',
                        end: 0,
                      }}>
                      * 4.8
                    </Text>
                    <Text
                      style={{color: '#5ebb86', fontSize: 12, fontWeight: 700}}>
                      12 Reviews
                    </Text>
                  </View>
                </View>
                <View style={styles.topPickedContainer}>
                  <Text style={{fontSize: 14, fontWeight: 700, color: '#2eb065'}}>
                    Char Kway Teow
                  </Text>
                  <View style={styles.breakfastTopPick}>
                    <Text style={styles.breakfastTopPickText}>Breakfast</Text>
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        position: 'absolute',
                        end: 0,
                      }}>
                      * 4.8
                    </Text>
                    <Text
                      style={{color: '#5ebb86', fontSize: 12, fontWeight: 700}}>
                      12 Reviews
                    </Text>
                  </View>
                </View>
                <View style={styles.topPickedContainer}>
                  <Text style={{fontSize: 14, fontWeight: 700, color: '#2eb065'}}>
                    Char Kway Teow
                  </Text>
                  <View style={styles.breakfastTopPick}>
                    <Text style={styles.breakfastTopPickText}>Breakfast</Text>
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        position: 'absolute',
                        end: 0,
                      }}>
                      * 4.8
                    </Text>
                    <Text
                      style={{color: '#5ebb86', fontSize: 12, fontWeight: 700}}>
                      12 Reviews
                    </Text>
                  </View>
                </View>
                <View style={styles.topPickedContainer}>
                  <Text style={{fontSize: 14, fontWeight: 700, color: '#2eb065'}}>
                    Char Kway Teow
                  </Text>
                  <View style={styles.breakfastTopPick}>
                    <Text style={styles.breakfastTopPickText}>Breakfast</Text>
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        position: 'absolute',
                        end: 0,
                      }}>
                      * 4.8
                    </Text>
                    <Text
                      style={{color: '#5ebb86', fontSize: 12, fontWeight: 700}}>
                      12 Reviews
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </ScrollView>
      <View
        style={{
          width: '100%',
          height: 85,
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'rgba(248, 255, 255, 1)',
          borderWidth: 2,
          borderColor: '#ebebeb',
        }}>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
            marginHorizontal: 'auto',
          }}>
          <View>
            <Text style={styles.footerText}>HOME</Text>
          </View>
          <View>
            <Text style={styles.footerText}>HISTORY</Text>
          </View>
          <View>
            <Text style={styles.footerText}>NOTIFICATION</Text>
          </View>
          <View>
            <Text style={styles.footerText}>ACCOUNT</Text>
          </View>
        </View>
      </View>
    </>
  );
}

export default App;
