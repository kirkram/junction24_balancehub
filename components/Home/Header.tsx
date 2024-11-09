import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const Header = ({ screenName }: { screenName: string }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{screenName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 120,
    backgroundColor: Colors.ss.primary, // Example background color
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 65, // Padding from the top
  },
  headerText: {
    fontSize: 35,
    color: Colors.ss.font,
    fontWeight: 'bold',
  },
});

export default Header;