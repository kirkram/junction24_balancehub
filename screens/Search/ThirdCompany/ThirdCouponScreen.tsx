import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import coupons from '../../../companies_filler/Company3_Coupons.ts';
import Colors from '../../../constants/Colors.ts';

type RouteParams = {
    couponId: string;
};

const CouponScreen = () => {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
    const { couponId } = route.params;
    const coupon = coupons.find(c => c.id === couponId);

    if (!coupon) {
        return (
            <View style={styles.container}>
                <Text>Coupon not found</Text>
            </View>
        );
    }

    const handleActivateCoupon = () => {
        console.log('Coupon activated:', coupon);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="chevron-back" size={20} color="black" style={{marginRight: 10}} />
                    <Image source={{ uri: coupon.applicationFile }} style={styles.applicationImage} />
                    <Text style={styles.applicationName}>{coupon.applicationName}</Text>
                </View>
            </TouchableOpacity>
            <Image source={{ uri: coupon.file }} style={styles.image} />
            <Text style={styles.title}>{coupon.name}</Text>
            <Text style={styles.description}>{coupon.description}</Text>
            <View style={styles.bottomContainer}>
                <Text style={styles.expireText}>Expire date: {new Date(coupon.expiringDate).toLocaleDateString()}</Text>
                <TouchableOpacity style={styles.activateButton} onPress={handleActivateCoupon}>
                    <Text style={styles.activateButtonText}>Activate Coupon</Text>
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
    backButton: {
        alignSelf: 'flex-start',
        padding: 8,
        marginBottom: 16,
    },
    applicationImage: {
        width: 30,
        height: 30,
        borderRadius: 10,
        marginRight: 5,
    },
    applicationName: {
        fontSize: 14,
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
    expireText: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 16,
    },
    activateButton: {
        backgroundColor: Colors.ss.primary,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 7,
    },
    activateButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CouponScreen;