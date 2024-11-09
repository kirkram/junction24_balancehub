import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeStackParamList } from '../../@types/navigation.ts';

const ContactUsScreen = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MainHome' as never)} style={styles.backButton}>
      <View style={styles.row}>
          <Icon name="chevron-back" size={20} color="black" style={styles.icon} />
          <Text style={styles.title}>Contact Us</Text>
      </View>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          
          <Text style={styles.description}>
            Thank you for reaching out to us. We are based in Helsinki and are here to assist you with any inquiries you may have. 
            Please find our contact details below:
          </Text>
          <Text style={styles.contactInfo}>
            Address: 123 Helsinki Lane, 00100 Helsinki, Finland
          </Text>
          <Text style={styles.contactInfo}>
            Phone: +358 40 123 4567
          </Text>
          <Text style={styles.contactInfo}>
            Email: info@helsinkicompany.fi
          </Text>
          <Text style={styles.contactInfo}>
            Customer Support: support@helsinkicompany.fi
          </Text>
          <Text style={styles.contactInfo}>
            Sales: sales@helsinkicompany.fi
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
  row: {
    flexDirection: 'row',
    // alignItems: 'center',
    // alignSelf: 'center'
  },
  icon: {
    flex: 1, // Adjust this value to align the icon with the text
  },
  title: {
    // flexDirection: 'row',
    // alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 135,
    marginTop: -3,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 5,
  },
});

export default ContactUsScreen;