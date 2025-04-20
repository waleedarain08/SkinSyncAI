import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Back} from '../../icons';
import {Colors} from '../../utils/Colors';
import {FontFamily} from '../../utils/Fonts';
import HorizontalCalendarTime from '../../components/HorizontalCalendarTime';
import AiModelCard from '../../components/AiModalCard';
import Button from '../../components/Button';

const BookingDateScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{paddingHorizontal: 30}}>
        <TouchableOpacity
          style={styles.backStyle}
          onPress={() => {
            navigation.goBack();
          }}>
          <Back size={20} />
        </TouchableOpacity>
        <View>
          <Text style={styles.heading}>Select a Date & Time</Text>
          <Text style={styles.subTxt}>
            we’ll notify you in advance so you’re always prepared. Your journey
            to glowing skin is just a tap away!
          </Text>
        </View>
        <View style={styles.calendarStyle}>
          <HorizontalCalendarTime />
        </View>
        <View>
          <Text style={styles.headingStyle}>Your Ai Treatment Model</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.firstScroll}>
            <AiModelCard attached={true} />
            <AiModelCard attached={true} />
            <AiModelCard attached={true} />
            <AiModelCard attached={true} />
          </ScrollView>
        </View>
      </View>
      <View style={styles.footer}>
        <View
          style={{
            backgroundColor: Colors.pink,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.footerNote}>
            Complete The Appointment Timing Slot To View Full Price
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 30,
            marginVertical: 15,
          }}>
          <View>
            <Text style={styles.price}>$ 650</Text>
            <Text style={styles.viewPolicy}>View Pricing Policy</Text>
          </View>
          <Button
            title="Book Now"
            style={{width: 187}}
            onPress={() => navigation.navigate('ARModalFace')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookingDateScreen;

const styles = StyleSheet.create({
  backStyle: {
    height: 44,
    width: 44,
    borderRadius: 44,
    backgroundColor: Colors.arrowBack,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight  : 0,
  },
  heading: {
    fontSize: 30,
    fontFamily: FontFamily.semiBold,
  },
  subTxt: {
    fontSize: 16,
    fontFamily: FontFamily.regular,
    color: Colors.lightBlack,
  },
  calendarStyle: {
    paddingBottom: 14,
    borderBottomColor: Colors.lightBorderColor,
    borderBottomWidth: 1,
    marginBottom: 23,
  },
  headingStyle: {
    fontSize: 22,
    fontFamily: FontFamily.semiBold,
    marginBottom: 23,
  },
  firstScroll: {
    paddingBottom: 30,
  },
  footer: {
    backgroundColor: Colors.lightestPink,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerNote: {
    fontSize: 14,
    fontFamily: FontFamily.semiBold,
    color: Colors.black,
    textAlign: 'center',
  },
  price: {
    fontSize: 28,
    fontFamily: FontFamily.semiBold,
  },
  bookNowButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginTop: 10,
  },
  bookNowText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  viewPolicy: {
    textDecorationLine: 'underline',
    fontSize: 14,
    fontFamily: FontFamily.medium,
  },
});
