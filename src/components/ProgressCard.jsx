import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {FontFamily} from '../utils/Fonts';
import {Colors} from '../utils/Colors';

const ProgressCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/images/dummyImg.png')} // Replace with actual image URL
        style={styles.image}
      />
      <View>
        <View style={styles.firstLine}>
          <Text style={styles.title}>Dermal Fillers – Cheeks</Text>
          <View style={styles.locationContainer}>
            <Image
              source={require('../assets/images/blueProgress.png')}
              style={{width: 18, height: 18}}
            />
            <Text style={styles.location}> 28%</Text>
          </View>
        </View>
        <Text style={styles.date}>Glow Skin Clinic</Text>
        <Text style={styles.date}>08 Sessions</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: FontFamily.semiBold,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 18,
    fontFamily: FontFamily.medium,
    marginLeft: 4,
  },
  date: {
    fontSize: 14,
    fontFamily: FontFamily.regular,
    color: Colors.glowSkin,
  },
  firstLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
    marginTop: 8,
  },
});

export default ProgressCard;
