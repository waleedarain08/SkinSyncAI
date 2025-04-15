import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../utils/Colors';
import {FontFamily} from '../utils/Fonts';

const AppointmentCard = () => {
  return (
    <View>
      <View style={styles.borderNTime}>
        <View style={styles.timeBack}>
          <Text style={styles.timeTxt}>11:00 AM</Text>
        </View>
        <Image
          source={require('../assets/images/border.png')}
          style={{height: 1, marginLeft: 22}}
        />
      </View>
      <View style={{marginLeft: '27%'}}>
        <View style={styles.card}>
          <Image
            source={require('../assets/images/dummyImg.png')} // Replace with actual image URL
            style={styles.image}
          />
          <View>
            <View style={styles.firstLine}>
              <Text style={styles.title}>Glow Skin Clinic</Text>
            </View>
            <Text style={styles.date}>Dermal Fillers – Cheeks</Text>
            <Text style={styles.date}>11:00 AM - 12:00 PM</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AppointmentCard;

const styles = StyleSheet.create({
  timeBack: {
    backgroundColor: Colors.pink,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 70,
    borderRadius: 10,
  },
  timeTxt: {
    fontSize: 14,
    fontFamily: FontFamily.semiBold,
    color: Colors.white,
  },
  borderNTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    width: 280,
  },
  image: {
    width: '90%',
    height: 160,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: FontFamily.semiBold,
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
