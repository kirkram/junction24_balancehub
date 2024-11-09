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
        <SearchIcon color={Colors.ss.font} size={30} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{screenName}</Text>
      <TouchableOpacity style={styles.userIconContainer} onPress={handleUserIconPress}>
        <UserIcon color={Colors.ss.font} size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 107,
    backgroundColor: Colors.ss.primary, 
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    position: 'relative',
  },
  headerText: {
    fontSize: 35,
    color: Colors.ss.font,
  },
  userIconContainer: {
    position: 'absolute',
    right: 20,
    top: 68,
  },
  searchIconContainer: {
    position: 'absolute',
    left: 20,
    top: 66,
  },
});

export default Header;