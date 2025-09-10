import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ingredientsData from '../data/ingredients.json';

const IngredientScreen = ({ route, navigation }) => {
  const { dish } = route.params;
  const dishIngredients = ingredientsData.find(item => item.dishId === dish.id);

  const renderIngredientItem = ({ item }) => (
    <View style={styles.ingredientItem}>
      <Text style={styles.ingredientName}>{item.name}</Text>
      <Text style={styles.ingredientQuantity}>{item.quantity}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      
      <View style={styles.dishHeader}>
        <Image source={{ uri: dish.image }} style={styles.dishImage} />
        <View style={styles.dishInfo}>
          <Text style={styles.dishName}>{dish.name}</Text>
          <Text style={styles.dishDescription}>{dish.description}</Text>
          <Text style={styles.dishCategory}>{dish.category}</Text>
        </View>
      </View>
      
      <Text style={styles.ingredientsTitle}>Ingredients:</Text>
      
      <FlatList
        data={dishIngredients?.ingredients || []}
        renderItem={renderIngredientItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.ingredientsList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButtonText: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  dishHeader: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    margin: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  dishImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  dishInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  dishName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  dishDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  dishCategory: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  ingredientsList: {
    flex: 1,
    marginHorizontal: 10,
  },
  ingredientItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  ingredientName: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  ingredientQuantity: {
    fontSize: 16,
    color: '#666',
    fontWeight: 'bold',
  },
});

export default IngredientScreen;
