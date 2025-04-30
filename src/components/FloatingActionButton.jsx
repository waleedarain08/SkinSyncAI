import React from 'react';
import {TouchableOpacity, StyleSheet, Image , Text} from 'react-native';

const FloatingActionButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Image
       source={require('../assets/images/faceScan.png')}
        style={styles.logo}
      />
      <Text style={{color:"#fff",marginLeft:10}}>Scan Your Face</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    flexDirection: 'row',
    //justifyContent:"space-between",
    position: 'absolute',
    bottom: 20, // Position it above the tab bar
    right: 20,
    width: 170,
    height: 44,
    borderRadius: 28,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    zIndex: 999,
  },
  logo: {
    height: 24,
    width: 24,
  },
});

export default FloatingActionButton;
