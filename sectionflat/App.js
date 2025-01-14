// Import các thư viện cần thiết
import React from 'react';
import { FlatList, SectionList, View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// Danh sách sản phẩm
const products = [
  { id: '1', name: 'Product A', price: '1.00' },
  { id: '2', name: 'Product B', price: '3.00' },
  { id: '3', name: 'Product C', price: '2.00' },
];

// Danh sách nhóm sản phẩm
const groupedProducts = [
  { title: 'Category A', data: ['Product A1', 'Product A2', 'Product A3'] },
  { title: 'Category B', data: ['Product B1', 'Product B2', 'Product B3'] },
  { title: 'Category C', data: ['Product C1', 'Product C2', 'Product C3'] },
];

const App = () => {
  // Hàm xử lý khi bấm vào sản phẩm
  const handlePress = (productName) => {
    Alert.alert('Product Selected', `You selected: ${productName}`);
  };

  // Hàm render từng sản phẩm trong FlatList
  const renderFlatListItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => handlePress(item.name)}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>FlatList - Products</Text>
      <FlatList
        data={products} // Dữ liệu
        keyExtractor={(item) => item.id} // Khóa duy nhất là id
        renderItem={renderFlatListItem} // Hàm render từng sản phẩm
        style={styles.flatList}
      />

      <Text style={styles.sectionTitle}>SectionList - Grouped Products</Text>
      <SectionList
        sections={groupedProducts} // Dữ liệu
        keyExtractor={(item, index) => item + index} // Khóa duy nhất cho mỗi sản phẩm
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Text style={styles.item}>{item}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
};

// StyleSheet cho ứng dụng
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'green',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color:'yellow',
  },
  flatList: {
    marginBottom: 20,
  },
  headerContainer: {
    backgroundColor: 'violet',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'yellow',
  },
  item: {
    fontSize: 16,
    padding: 10,
    backgroundColor: 'pink',
    marginVertical: 3,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 8,
    backgroundColor: 'pink',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'yellow',
  },
  productPrice: {
    fontSize: 16,
    color: 'white',
  },
});

export default App;
