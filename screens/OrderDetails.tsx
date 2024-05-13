import { ImageBackground, ScrollView, Text, View } from "react-native";

// @ts-ignore
const OrderDetails = ({route}) => {

  const {order} = route.params
  const priceUsd = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})

  // const oggetto = {
  //   'key1': 'ciao',
  //   'key2': 'mamma',
  // }
  // for(const item in oggetto) {
  //   console.log(item);
  // }

  const renderOrderItems = () => {
    const views = [];
    let i = 0;

    for(const item of order.cart) {
      views.push(
        <View
          key={i}
          style={{
            flexDirection: 'row',
            gap: 15,
            alignItems: 'flex-start',
            marginBottom: 10,
            position: 'relative',
          }}>
          <Text style={{fontSize: 18, fontWeight: 800}}>x{item.quantity}</Text>
          <View>
            <Text style={{fontSize: 18, fontWeight: 500}}>{item.product}</Text>
            <Text style={{fontSize: 14, fontWeight: 300}}>{item.extras && item.extras.join(', ')}</Text>
          </View>
          <Text style={{position:'absolute', right: 20, fontSize: 16, fontWeight: 600}}>{priceUsd.format(item.price)}</Text>
        </View>
      )
      i = i + 1;
    }

    return views;
  }

  return (
    <ScrollView style={{
      width: '95%',
      marginHorizontal: 'auto',
      borderTopEndRadius: 8,
      borderTopStartRadius: 8,
      marginTop: 8,
    }}>
      <ImageBackground
        source={{
          uri: order.img
        }}
        style={{
          height: 200,
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          paddingBottom: 30,
          paddingStart: 30,
          position: 'relative'
        }}
      >
        <Text style={{
          color: 'white',
          fontSize: 30,
          fontWeight: 900,
          backgroundColor: 'rgba(0,0,0,0.4)',
          padding: 5,
          paddingHorizontal: 15,
          borderRadius: 8,
          overflow: 'hidden',
        }}>
          {order.name}
        </Text>
        <Text style={{
          position: 'absolute',
          top: 10,
          right: 10,
          color: 'white',
          fontWeight: 700,
        }}>Order #{order.key}</Text>
      </ImageBackground>
      <View style={{
        backgroundColor: 'white',
        padding: 20
      }}>
        <Text style={{
          fontWeight: 800,
          fontSize: 25,
          marginVertical: 20,
        }}>
          YOUR ORDER
        </Text>
        {renderOrderItems()}
      </View>
      <View style={{
        backgroundColor: 'white',
        padding: 20,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
      }}>
        <Text style={{
          fontWeight: 800,
          fontSize: 25,
          marginBottom: 20,
        }}>
          SUMMARY
        </Text>
        <View style={{gap: 5}}>
          <Text style={{fontSize: 16}}>Delivery Expenses: <Text style={{fontWeight: 600}}>{priceUsd.format(order.deliveryExpenses)}</Text></Text>
          <Text style={{fontSize: 16}}>Service Expenses: <Text style={{fontWeight: 600}}>{priceUsd.format(order.serviceExpenses)}</Text></Text>
          <Text style={{fontSize: 18, fontWeight: 600, marginBottom: 8}}>Total: {priceUsd.format(order.total)}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default OrderDetails;
