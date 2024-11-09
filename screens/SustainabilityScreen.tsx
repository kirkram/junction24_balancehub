import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeStackParamList } from '../@types/navigation.ts';

const SustainabilityScreen = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MainHome' as never)} style={styles.backButton}>
        <Icon name="chevron-back" size={20} color="black" />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Our Commitment to Sustainability</Text>
          <Text style={styles.description}>
            Our company is dedicated to promoting sustainability in all aspects of our business. 
            We strive to reduce our environmental impact by implementing eco-friendly practices 
            and using sustainable materials. Our goal is to create a positive impact on the planet 
            and contribute to a healthier, more sustainable future for all.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  textContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default SustainabilityScreen;