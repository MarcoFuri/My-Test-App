import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

// @ts-ignore
const PastOrders = ({navigation}) => {
  const orders = [
    {
      key: 1,
      name: `Kebab's House`,
      img: 'https://www.bellacarne.it/wp-content/uploads/2021/03/kebab-ricetta-originale.jpg',
      cart: [
        {
          product: 'Kebab piada',
          quantity: 1,
          price: 5,
          extras: ['Extra Garlic Sauce']
        },
        {
          product: 'Kebab burger',
          quantity: 1,
          price: 5
        },
        {
          product: 'Kebab piada',
          quantity: 1,
          price: 5
        },
        {
          product: 'Chicken Shawarma Wrap',
          quantity: 1,
          price: 6,
          extras: ['Extra Hummus', 'Extra Tahini Sauce']
        },
        {
          product: 'Falafel Wrap',
          quantity: 1,
          price: 5,
          extras: ['Extra Tzatziki Sauce']
        }
      ],
      deliveryExpenses: 1.49,
      serviceExpenses: 0.30,
      total: 36.49
    },
    {
      key: 2,
      name: `Pizza Palace`,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzjv05q-yfBmjM21OEhsIecjt4waNCzd8yuBYtI1iNJg&s',
      cart: [
        {
          product: 'Margherita Pizza',
          quantity: 2,
          price: 8
        },
        {
          product: 'Pepperoni Pizza',
          quantity: 1,
          price: 10
        },
        {
          product: 'Garlic Breadsticks',
          quantity: 1,
          price: 5,
          extras: ['Extra Garlic Butter']
        },
        {
          product: 'Supreme Pizza',
          quantity: 1,
          price: 12,
          extras: ['Extra Olives', 'Extra Mushrooms']
        },
        {
          product: 'Caprese Salad',
          quantity: 1,
          price: 7
        }
      ],
      deliveryExpenses: 2.00,
      serviceExpenses: 0.50,
      total: 45.50
    },
    {
      key: 3,
      name: `Sushi Spot`,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ8QOF_O-Zrs0LJoimlxTQ52gXQUl-md3IJ90GvYf4FA&s',
      cart: [
        {
          product: 'California Roll',
          quantity: 3,
          price: 6
        },
        {
          product: 'Salmon Nigiri',
          quantity: 2,
          price: 4
        },
        {
          product: 'Spicy Tuna Roll',
          quantity: 1,
          price: 7,
          extras: ['Extra Wasabi', 'Extra Ginger']
        },
        {
          product: 'Tempura Shrimp Roll',
          quantity: 1,
          price: 8
        },
        {
          product: 'Edamame',
          quantity: 1,
          price: 3
        }
      ],
      deliveryExpenses: 1.99,
      serviceExpenses: 0.40,
      total: 33.39
    },
    {
      key: 4,
      name: `Burger Bar`,
      img: 'https://imageproxy.wolt.com/mes-image/43bb7be3-03c2-4337-9d52-99cba2b1650d/85493202-0013-44f0-b7c1-59262d53e9ff',
      cart: [
        {
          product: 'Classic Burger',
          quantity: 2,
          price: 7
        },
        {
          product: 'Cheeseburger',
          quantity: 1,
          price: 6
        },
        {
          product: 'BBQ Bacon Burger',
          quantity: 1,
          price: 9,
          extras: ['Extra BBQ Sauce']
        },
        {
          product: 'Mushroom Swiss Burger',
          quantity: 1,
          price: 8,
          extras: ['Extra Mushrooms', 'Extra Swiss Cheese']
        },
        {
          product: 'Onion Rings',
          quantity: 1,
          price: 4
        }
      ],
      deliveryExpenses: 1.75,
      serviceExpenses: 0.35,
      total: 42.10
    },
    {
      key: 5,
      name: `Pasta Place`,
      img: 'https://pbs.twimg.com/profile_images/415075453863358464/ls0QzChQ_400x400.jpeg',
      cart: [
        {
          product: 'Spaghetti Carbonara',
          quantity: 1,
          price: 9
        },
        {
          product: 'Fettuccine Alfredo',
          quantity: 1,
          price: 10
        },
        {
          product: 'Garlic Bread',
          quantity: 1,
          price: 4,
          extras: ['Extra Garlic Butter']
        },
        {
          product: 'Caesar Salad',
          quantity: 1,
          price: 6
        },
        {
          product: 'Tiramisu',
          quantity: 1,
          price: 5
        }
      ],
      deliveryExpenses: 2.50,
      serviceExpenses: 0.60,
      total: 37.10
    },
    {
      key: 6,
      name: `Taco Stand`,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpC9qxHW-3u2d_gab95zYouA6yPqKOp0LFitku0_9CQ&s',
      cart: [
        {
          product: 'Beef Taco',
          quantity: 3,
          price: 3
        },
        {
          product: 'Chicken Quesadilla',
          quantity: 2,
          price: 6
        },
        {
          product: 'Chips and Guacamole',
          quantity: 1,
          price: 5
        },
        {
          product: 'Fish Taco',
          quantity: 1,
          price: 4
        },
        {
          product: 'Street Corn',
          quantity: 1,
          price: 3
        }
      ],
      deliveryExpenses: 1.25,
      serviceExpenses: 0.25,
      total: 25.75
    },
    {
      key: 7,
      name: `Smoothie Shack`,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWN_ug4WnTjpQgIcNVibayDcXPbX_NSMxUfjmCHcMVwA&s',
      cart: [
        {
          product: 'Berry Blast Smoothie',
          quantity: 2,
          price: 5
        },
        {
          product: 'Green Machine Smoothie',
          quantity: 1,
          price: 6
        },
        {
          product: 'Tropical Paradise Smoothie',
          quantity: 1,
          price: 7,
          extras: ['Extra Mango', 'Extra Pineapple']
        },
        {
          product: 'Protein Power Smoothie',
          quantity: 1,
          price: 8,
          extras: ['Extra Protein Powder']
        },
        {
          product: 'Acai Bowl',
          quantity: 1,
          price: 9
        }
      ],
      deliveryExpenses: 2.75,
      serviceExpenses: 0.55,
      total: 40.30
    },
    {
      key: 8,
      name: `BBQ Joint`,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-jwbiDJFDivQXM5A5e-XCMo2p6U1pesz-XGnFVNufTQ&s',
      cart: [
        {
          product: 'Brisket Platter',
          quantity: 1,
          price: 15
        },
        {
          product: 'Pulled Pork Sandwich',
          quantity: 2,
          price: 8
        },
        {
          product: 'BBQ Ribs',
          quantity: 1,
          price: 12,
          extras: ['Extra BBQ Sauce']
        },
        {
          product: 'Smoked Sausage',
          quantity: 1,
          price: 6
        },
        {
          product: 'Mac and Cheese',
          quantity: 1,
          price: 5
        }
      ],
      deliveryExpenses: 3.50,
      serviceExpenses: 0.70,
      total: 50.20
    },
    {
      key: 9,
      name: `Ice Cream Parlor`,
      img: 'https://media-cdn.tripadvisor.com/media/photo-s/12/a0/b0/fa/scoop-ice-cream-parlour.jpg',
      cart: [
        {
          product: 'Chocolate Sundae',
          quantity: 2,
          price: 7
        },
        {
          product: 'Vanilla Cone',
          iceCreamFlavor: 'Vanilla',
          quantity: 3,
          price: 3
        },
        {
          product: 'Strawberry Milkshake',
          quantity: 1,
          price: 6,
          extras: ['Extra Whipped Cream', 'Extra Cherry']
        },
        {
          product: 'Banana Split',
          quantity: 1,
          price: 8,
          extras: ['Extra Chocolate Sauce', 'Extra Nuts']
        },
        {
          product: 'Pistachio Gelato',
          quantity: 1,
          price: 4
        }
      ],
      deliveryExpenses: 1.99,
      serviceExpenses: 0.40,
      total: 44.99
    }
  ];

  const priceUsd = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})

  return (
    <ScrollView>
      <View style={{marginBottom: 10}}>
      {orders.map((order) => (
        <TouchableOpacity
          key={order.key}
          onPress={() =>
          navigation.navigate('OrderDetails', {order: order})}
          style={{
            width: '95%',
            marginHorizontal: 'auto',
            flexDirection: 'row',
            marginTop: 8,
            padding: 15,
            gap: 12,
            paddingBottom: 15,
            backgroundColor: 'white',
            borderRadius: 8,
            position: 'relative',
          }}>
          <Image
            source={{
              uri: order.img,
            }}
            style={{width: 90, height: 90, borderRadius: 8}}
          />
          <View style={{flex: 1}}>
            <Text style={{fontSize: 15, fontWeight: 700}}>
              {order.name}
            </Text>
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Text style={{fontWeight: 700}}>x{order.cart[0].quantity}</Text>
              <Text style={{fontSize: 12}}>{order.cart[0].product}</Text>
            </View>
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Text style={{fontWeight: 700}}>x{order.cart[1].quantity}</Text>
              <Text style={{fontSize: 12}}>{order.cart[1].product}</Text>
            </View>
            <View style={{marginTop: 26}}>
              <Text>{priceUsd.format(order.total)}</Text>
            </View>
          </View>
          <Text
            style={{
              position: 'absolute',
              fontSize: 20,
              right: 15,
              color: 'grey',
              alignSelf: 'center'
            }}>
            {">"}
          </Text>
        </TouchableOpacity>
      ))}
      </View>
    </ScrollView>
  )

}

export default PastOrders
