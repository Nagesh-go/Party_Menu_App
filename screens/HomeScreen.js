import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import FilterToggle from '../components/FilterToggle';
import DishCard from '../components/DishCard';
import dishesData from '../data/dishes.json';

const HomeScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('Starter');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegFilter, setVegFilter] = useState('all');
  const [selectedDishes, setSelectedDishes] = useState([]);

  const categories = ['Starter', 'Main Course', 'Dessert', 'Sides'];

  const filteredDishes = dishesData.filter(dish => {
    const matchesCategory = dish.category === selectedCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVegFilter = 
      vegFilter === 'all' || 
      (vegFilter === 'veg' && dish.isVeg) || 
      (vegFilter === 'nonveg' && !dish.isVeg);
    
    return matchesCategory && matchesSearch && matchesVegFilter;
  });

  const getSelectedCount = (category) => {
    return selectedDishes.filter(dishId => {
      const dish = dishesData.find(d => d.id === dishId);
      return dish && dish.category === category;
    }).length;
  };

  const toggleDishSelection = (dishId) => {
    setSelectedDishes(prev => 
      prev.includes(dishId) 
        ? prev.filter(id => id !== dishId)
        : [...prev, dishId]
    );
  };

  const handleViewIngredients = (dish) => {
    navigation.navigate('Ingredient', { dish });
  };

  const renderDishItem = ({ item }) => (
    <DishCard
      dish={item}
      isSelected={selectedDishes.includes(item.id)}
      onToggleSelection={toggleDishSelection}
      onViewIngredients={handleViewIngredients}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Party Menu Selection</Text>
      
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search dishes..."
      />
      
      <FilterToggle
        vegFilter={vegFilter}
        onVegToggle={() => setVegFilter(vegFilter === 'veg' ? 'all' : 'veg')}
        onNonVegToggle={() => setVegFilter(vegFilter === 'nonveg' ? 'all' : 'nonveg')}
      />
      
      <View style={styles.tabContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.tab,
              selectedCategory === category && styles.activeTab
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[
              styles.tabText,
              selectedCategory === category && styles.activeTabText
            ]}>
              {category} ({getSelectedCount(category)})
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <FlatList
        data={filteredDishes}
        renderItem={renderDishItem}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
      />
      
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Selected: {selectedDishes.length} dishes
        </Text>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#333',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#4CAF50',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  continueButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
