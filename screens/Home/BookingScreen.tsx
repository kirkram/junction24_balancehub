import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import bookings from '../../companies_filler/Companies_Booking.ts';
import Colors from '../../constants/Colors.ts';

type RouteParams = {
    bookingId: string;
};

const BookingScreen = () => {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
    const { bookingId } = route.params;
    const booking = bookings.find(e => e.id === bookingId);

    if (!booking) {
        return (
            <View style={styles.container}>
                <Text>Booking not found</Text>
            </View>
        );
    }

    const handleBookEvent = () => {
        console.log('Booking confirmed:', booking);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="chevron-back" size={20} color="black" />
                </TouchableOpacity>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{booking.title}</Text>
                </View>
            </View>
            <Image source={{ uri: booking.image }} style={styles.image} />
            <Text style={styles.title}>{booking.title}</Text>
            <Text style={styles.description}>{booking.description}</Text>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.bookButton} onPress={handleBookEvent}>
                    <Text style={styles.bookButtonText}>Book Now</Text>
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
    bookButton: {
        backgroundColor: Colors.ss.primary,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 7,
    },
    bookButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default BookingScreen;