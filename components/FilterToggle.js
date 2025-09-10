import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const FilterToggle = ({ vegFilter, onVegToggle, onNonVegToggle }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, vegFilter === 'veg' && styles.activeButton]}
        onPress={onVegToggle}
      >
        <Text style={[styles.buttonText, vegFilter === 'veg' && styles.activeText]}>
          Veg
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, vegFilter === 'nonveg' && styles.activeButton]}
        onPress={onNonVegToggle}
      >
        <Text style={[styles.buttonText, vegFilter === 'nonveg' && styles.activeText]}>
          Non-Veg
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
  },
  activeButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    fontSize: 16,
    color: '#666',
  },
  activeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FilterToggle;
