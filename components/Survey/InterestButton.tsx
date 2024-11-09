import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface InterestButtonProps {
  label: string;
}

const InterestButton: React.FC<InterestButtonProps> = ({ label }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    borderColor: 'rgba(222, 224, 231, 1)',
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'rgba(191, 195, 207, 1)',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default InterestButton;