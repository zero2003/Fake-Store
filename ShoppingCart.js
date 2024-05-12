import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ActivityIndicator, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { getCartItems, getCartSummary } from './src/components/ShoppingCartSlice';
import Item from './src/components/Item';


export default function ShoppingCart({ navigation }) {
  const cartItems = useSelector(getCartItems)
  const { totalPrice, totalQty } = useSelector(getCartSummary)


  const renderItem = ({ item }) => {
    return (
      <Item
        imgSrc={item.img}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        id={item.id}
      />
    );
  };

  return (

    
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Shopping Cart</Text>
      </View>

      <FlatList
        ListEmptyComponent={
          <Text style={styles.emptyText}>No Items in Cart !</Text>
        }
        ListHeaderComponent={
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryText}>Quantity: {totalQty}</Text>
            <Text style={styles.summaryText}>Price: ${totalPrice}</Text>
          </View>
        }
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'flex-start',
  // },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    backgroundColor: "#7A8450",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    alignSelf: "stretch",
    marginHorizontal: 10,
    marginBottom: 25,
  },
  titleText: {
    fontFamily: "Helvetica",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 30,
    padding: 5,
    color: "black",
  },
  summaryContainer: {
    backgroundColor: "#f5e0df",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    alignSelf: "stretch",
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  summaryText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 100,
  },
});

