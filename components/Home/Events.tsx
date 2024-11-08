import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import events from '../../Aava_Events.ts';

const Events = () => {
  const handleEventPress = (event) => {
    // Handle the event click here
    console.log('Event clicked:', event);
  };

  return (
    <ScrollView horizontal>
      {events.map(event => (
        <TouchableOpacity key={event.id} onPress={() => handleEventPress(event)}>
          <View style={{ marginRight: 20, width: 300 }}>
            <Image source={{ uri: event.image }} style={{ width: '100%', height: 200 }} />
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{event.title}</Text>
              <Text>{event.date} | {event.time}</Text>
              {/* <Text>{event.location}</Text> */}
              {/* <Text>{event.description}</Text> */}
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Events;