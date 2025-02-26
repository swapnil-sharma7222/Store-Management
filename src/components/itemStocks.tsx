import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface StockItem {
  name: string;
  quantity: number;
}

const ItemStocks = () => {
  const data: StockItem[] = [
    { name: 'Wheat', quantity: 5 },
    { name: 'Rice', quantity: 5 },
    { name: 'Choco', quantity: 15 },
    { name: 'Water', quantity: 5 },
    { name: 'Dal', quantity: 25 },
    { name: 'Wheat', quantity: 85 },
    { name: 'Wheat', quantity: 85 },
    { name: 'Wheat', quantity: 85 },
    { name: 'Wheat', quantity: 85 },
    { name: 'Wheat', quantity: 25 },
    { name: 'Wheat', quantity: 5 },
    { name: 'Wheat', quantity: 5 },
    { name: 'Wheat', quantity: 5 },
    { name: 'Wheat', quantity: 5 },
    { name: 'Wheat', quantity: 45 },
    { name: 'Wheat', quantity: 25 },
    { name: 'Wheat', quantity: 25 },
    { name: 'Wheat', quantity: 25 },
    { name: 'Wheat', quantity: 25 },
    { name: 'Wheat', quantity: 25 },
    { name: 'Wheat', quantity: 15 },
    { name: 'Wheat', quantity: 15 },
    { name: 'Wheat', quantity: 15 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Quantity</Text>
      </View>

      <View style={styles.list}>
        <View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }: {item: StockItem}) => (
              <Item item={item} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

const Item: React.FC<{item: StockItem}> = ({ item }: {item: StockItem}) => {
  return (
    <View
      style={[
        styles.item,
        { backgroundColor: item.quantity < 20 ? 'red' : 'green' },
      ]}
    >
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>{item.quantity}</Text>
    </View>
  )
}
export default ItemStocks;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  list: {
    marginTop: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  itemText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
