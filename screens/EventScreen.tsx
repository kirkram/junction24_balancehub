import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import events from '../Aava_Events.ts';

type RouteParams = {
    eventId: string;
};

const EventScreen = () => {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>(); 
    const { eventId } = route.params;
    const event = events.find(e => e.id === eventId);

    if (!event) {
        return (
            <View style={styles.container}>
                <Text>Event not found</Text>
            </View>
        );
    }

    const handleRegisterEvent = () => {
        console.log('Event registered:', event);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="chevron-back" size={20} color="black" />
                </TouchableOpacity>
                <View style={styles.dateContainer}>
                    <Icon name="calendar" size={20} color="black" style={{ marginRight: 5 }} />
                    <Text style={styles.dateText}>{new Date(event.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</Text>
                </View>
            </View>
            <Image source={{ uri: event.image }} style={styles.image} />
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.description}>{event.description}</Text>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.registerButton} onPress={handleRegisterEvent}>
                    <Text style={styles.registerButtonText}>Take Part</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: 16,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    backButton: {
        padding: 8,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        left: '50%',
        transform: [{ translateX: -50 }],
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 7,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        alignSelf: 'flex-start',
    },
    description: {
        fontSize: 16,
        marginBottom: 16,
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
    bottomContainer: {
        marginTop: 'auto',
        width: '100%',
        alignItems: 'center',
        paddingBottom: 3,
    },
    dateText: {
        fontSize: 14,
        color: 'gray',
        fontWeight: 'bold',
    },
    registerButton: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 7,
    },
    registerButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EventScreen;