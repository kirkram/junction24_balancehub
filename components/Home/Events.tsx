import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
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
    <ScrollView horizontal>
      {events.map(event => (
        <TouchableOpacity key={event.id} onPress={() => handleEventPress(event)}>
          <View style={styles.eventContainer}>
            <Image source={{ uri: event.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.date}>{formatDate(event.date)}</Text>
              <Text style={styles.title}>{event.title}</Text>
              <Text style={styles.time}>{event.time.split(' - ')[0]}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  eventContainer: {
    marginRight: 10,
    width: 175, // Smaller width
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 100, // Smaller height
    borderRadius: 10, // Rounded corners
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 255, 0.35)', // Blue background dimming
    borderRadius: 10, // Rounded corners
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