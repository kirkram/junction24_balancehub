import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import UserIcon from '../Icons/UserIcon';
import SearchIcon from '../Icons/SearchIcon';

const Header = ({ screenName }: { screenName: string }) => {
  const handleUserIconPress = () => {
    console.log('User icon pressed');
  };

  const handleSearchIconPress = () => {
    console.log('Search icon pressed');
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.searchIconContainer} onPress={handleSearchIconPress}>
        <SearchIcon color={Colors.ss.font} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{screenName}</Text>
      <TouchableOpacity style={styles.userIconContainer} onPress={handleUserIconPress}>
        <UserIcon color={Colors.ss.font} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 120,
    backgroundColor: Colors.ss.primary, 
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 65,
    position: 'relative',
  },
  headerText: {
    fontSize: 35,
    color: Colors.ss.font,
    fontWeight: 'bold',
  },
  userIconContainer: {
    position: 'absolute',
    right: 20,
    top: 82,
  },
  searchIconContainer: {
    position: 'absolute',
    left: 20,
    top: 82,
  },
});

export default Header;