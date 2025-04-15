import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';
import {FontFamily} from '../utils/Fonts';

const DiscountCard = () => {
  return (
    <View style={styles.card}>
      {/* Left Section */}
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Botox Treatment</Text>
        <Text style={styles.clinic}>Glow Skin Clinic</Text>
        <View style={styles.discountBox}>
          <Text style={styles.discountText}>Flat 20% Off</Text>
        </View>
        <Text style={styles.validity}>Valid Till 30 March</Text>
      </View>

      {/* Right Section */}
      <View style={styles.rightContainer}>
        <Image
          source={require('../assets/images/dummyImg.png')} // Replace with actual image URL
          style={styles.image}
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>FLAT{'\n'}$50</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    height: 144,
    width: 320,
  },
  leftContainer: {
    backgroundColor: Colors.progressbarColor,
    width: '49%',
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  title: {
    fontSize: 16,
    paddingLeft: 15,
    fontFamily: FontFamily.semiBold,
  },
  clinic: {
    fontSize: 14,
    fontFamily: FontFamily.regular,
    paddingLeft: 15,
    marginVertical: 4,
    color: Colors.newDim,
  },
  discountBox: {
    backgroundColor: Colors.white,
    paddingLeft: 15,
    paddingRight: 10,
    alignSelf: 'flex-start',
  },
  discountText: {
    fontSize: 14,
    fontFamily: FontFamily.semiBold,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  validity: {
    fontSize: 14,
    color: Colors.newDim,
    fontFamily: FontFamily.regular,
    marginTop: 5,
    paddingLeft: 15,
  },
  rightContainer: {
    width: '51%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: Colors.discountColor,
    padding: 8,
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: FontFamily.bold,
    textAlign: 'center',
  },
});

export default DiscountCard;
