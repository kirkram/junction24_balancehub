import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface GenderFormProps { }

const GenderForm: React.FC<GenderFormProps> = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [showGender, setShowGender] = useState(false);

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.progressBar} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="chevron-back" size={20} color="black" style={{ marginRight: 10 }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>I'm a</Text>
      </View>
      <View style={styles.middleContainer}>
        {['WOMAN', 'MAN', 'OTHER'].map((gender) => (
          <TouchableOpacity
            key={gender}
            style={[
              styles.genderButton,
              selectedGender === gender && styles.selectedGenderButton,
            ]}
            onPress={() => handleGenderSelect(gender)}
            accessibilityRole="radio"
            accessibilityState={{ checked: selectedGender === gender }}
          >
            <Text style={styles.genderButtonText}>{gender}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.showGenderContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => setShowGender(!showGender)}
            accessibilityRole="checkbox"
            accessibilityState={{ checked: showGender }}
          >
            {showGender && <View style={styles.checkboxInner} />}
          </TouchableOpacity>
          <Text style={styles.showGenderText}>Show my gender on my profile</Text>
        </View>
        <TouchableOpacity style={styles.continueButton} accessibilityRole="button">
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  topContainer: {
    alignItems: 'center',
  },
  progressBar: {
    backgroundColor: '#5E8D83',
    alignSelf: 'flex-start',
    width: '30%',
    height: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: 16,
  },
  backButton: {
    padding: 8,
  },
  titleContainer: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    width: '80%',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  middleContainer: {
    alignItems: 'center',
  },
  genderButton: {
    borderRadius: 7,
    borderColor: 'rgba(198, 197, 199, 1)',
    borderStyle: 'solid',
    borderWidth: 2,
    marginTop: 16,
    paddingHorizontal: 32,
    paddingVertical: 12,
    width: '80%', // Set a fixed width for the buttons
    alignSelf: 'center', // Center the content horizontally
  },
  selectedGenderButton: {
    backgroundColor: '#5E8D83',
    borderColor: '#5E8D83',
  },
  genderButtonText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
    textAlign: 'center',
  },
  bottomContainer: {
    alignItems: 'center',
  },
  showGenderContainer: {
    flexDirection: 'row',
    marginTop: 16,
    alignSelf: 'center',
  },
  checkbox: {
    borderRadius: 3,
    borderColor: 'rgba(0, 0, 0, 1)',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: '#5E8D83',
    borderRadius: 2,
  },
  showGenderText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#000000',
    fontWeight: '400',
    alignSelf: 'center',
  },
  continueButton: {
    borderRadius: 7,
    marginTop: 16,
    paddingHorizontal: 32,
    paddingVertical: 12,
    backgroundColor: '#5E8D83',
    width: '80%', // Set a fixed width for the buttons
    alignSelf: 'center', // Center the content horizontally
  },
  continueButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GenderForm;
