import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import events from '../../Aava_Events.ts';

const Events = () => {
  const handleEventPress = (event) => {
    // Handle the event click here
    console.log('Event clicked:', event);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {events.map(event => (
        <TouchableOpacity key={event.id} onPress={() => handleEventPress(event)}>
          <View style={styles.eventContainer}>
            <Image source={{ uri: event.image }} style={styles.image} />
            <LinearGradient
              colors={['rgba(0, 0, 255, 0.6)', 'rgba(0, 0, 255, 0.2)', 'transparent']}
              start={[0, 1]}
              end={[1, 0]}
              style={styles.gradient}
            >
              <View style={styles.textContainer}>
                <Text style={styles.date}>{formatDate(event.date)}</Text>
                <Text style={styles.title}>{event.title}</Text>
                <Text style={styles.time}>{event.time.split(' - ')[0]}</Text>
              </View>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  eventContainer: {
    marginRight: 5,
    width: 250,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  date: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    color: 'white',
    fontSize: 14,
    marginBottom: 2,
  },
  time: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
  },
});

export default Events;