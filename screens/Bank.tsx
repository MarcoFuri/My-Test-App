import { ScrollView, SafeAreaView, Text, TextInput, View, Image, TouchableOpacity, StyleSheet, FlatList, ImageBackground } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import IconFontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Bank = () => {
  const data=[
    {
      key: 'ETH',
      value: '+217,4210 (USD)',
      total: 4234.00,
      change: 7.12,
    },
    {
      key: 'BTC',
      value: '+54,320.50 (USD)',
      total: 12345.67,
      change: -2.50,
    },
    {
      key: 'XRP',
      value: '-0.732 (USD)',
      total: 123.45,
      change: -0.80,
    },
    {
      key: 'ADA',
      value: '+1.20 (USD)',
      total: 987.65,
      change: 1.25,
    },
    {
      key: 'LTC',
      value: '+176.80 (USD)',
      total: 5678.90,
      change: -3.75,
    },
    {
      key: 'DOGE',
      value: '+0.290 (USD)',
      total: 456.78,
      change: 0.25,
    },
    {
      key: 'XMR',
      value: '-224.60 (USD)',
      total: 345.67,
      change: -1.20,
    },
    {
      key: 'XLM',
      value: '+0.315 (USD)',
      total: 234.56,
      change: 1.50,
    },
    {
      key: 'LINK',
      value: '+25.40 (USD)',
      total: 3210.00,
      change: 2.80,
    },
    {
      key: 'BCH',
      value: '+690.50 (USD)',
      total: 8765.43,
      change: -0.90,
    },
    {
      key: 'EOS',
      value: '+5.80 (USD)',
      total: 987.65,
      change: 0.75,
    },
]

  const priceUsd = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})

return (
  <>
    <View
      style={{
        width: '90%',
        marginHorizontal: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 14,
      }}>
      <View>
        <Text style={{ fontSize: 26, fontWeight: 700 }}>
          Wallet
        </Text>
      </View>
      <View style={{flexDirection: 'row', gap: 10}}>
        <View style={{alignItems: 'center'}}>
          <IconFontAwesome6 name="hand-holding-dollar" size={16} color="black" style={{opacity: 0.75, marginBottom: 6}}></IconFontAwesome6>
          <Text style={{fontSize: 10}}>Send</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <IconFontAwesome6 name="sack-dollar" size={16} color="black" style={{opacity: 0.75, marginBottom: 6}}></IconFontAwesome6>
          <Text style={{fontSize: 10}}>Receive</Text>
        </View>
      </View>
    </View>
    <LinearGradient
      colors={['#7197cd', '#86c5e5']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{
        width: '90%',
        height: 220,
        borderRadius: 12,
        alignSelf: 'center',
        marginTop: 16,
        backgroundColor: '#79bfe1',
        padding: 10,
      }}>
      <View style={{ height: '60%', marginStart: 15, paddingTop: 15 }}>
        <Text style={{ color: 'white' }}>Total assets (USD)</Text>
        <Text style={{ color: 'white', fontSize: 25 }}>5,332.00</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 15,
        }}>
        <View>
          <Text style={{ color: 'white' }}>Total assets (USD)</Text>
          <Text style={{ color: 'white', fontSize: 18 }}>5,332.00</Text>
        </View>
        <View>
          <Text style={{ color: 'white' }}>Total assets (USD)</Text>
          <Text style={{ color: 'white', fontSize: 18 }}>5,332.00</Text>
        </View>
      </View>
    </LinearGradient>
    <View
      style={{width: '90%',
        height: 54,
        alignSelf: 'center',
        marginTop: 16,
        marginHorizontal: 'auto'
      }}
    >
      <ImageBackground
        // resizeMode="cover"
        source={{
          uri: 'https://cdn.shopify.com/s/files/1/0065/4780/0182/articles/majorcitiespollution_Desktop_b.jpg?v=1702102837'
        }}
        style={{borderRadius: 12, overflow: 'hidden', padding: 10}}
      >
        <Text
          style={{
            marginStart: 15,
            fontSize: 15,
            fontWeight: 800,
          }}>
          Coin in hand
        </Text>
        <Text style={{marginStart: 15, fontSize: 12 }}>
          Coin in hand coin in hand
        </Text>
      </ImageBackground>
    </View>
    <View
      style={{
        width: '90%',
        marginStart: 22,
        marginTop: 22,
        marginBottom: 10,
      }}>
      <Text style={{ fontWeight: 900 }}>ASSET LIST</Text>
    </View>
    <FlatList
      data = {data}
      style={{marginBottom: 5}}
      renderItem={({ item }) => (
        <View style={[styles.listElement]}>
          <View>
            <Text style={{ fontWeight: 700 }}>{item.key}</Text>
            <Text>{item.value}</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ fontWeight: 700 }}>{priceUsd.format(item.total)}</Text>
            <Text style={item.change >= 0 ? {color: 'green'} : {color: 'red'}}>{item.change >= 0 ? "+" + item.change.toFixed(2) : item.change.toFixed(2)}%</Text>
          </View>
        </View>
      )}
    />
  </>
);
}

const styles = StyleSheet.create({
  listElement: {
    flex: 1,
    backgroundColor: 'white',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
    borderRadius: 12,
    padding: 18,
    width: '90%',
    marginStart: 22,
    marginTop: 6,
  },
  bolderText: {
    fontWeight: 900,
  },
});

export default Bank;


