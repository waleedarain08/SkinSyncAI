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
import {Colors} from '../../utils/Colors';
import {Back} from '../../icons';
import {FontFamily} from '../../utils/Fonts';
import NotificationCard from '../../components/NotificationCard';

const NotificationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerMainContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backContainer}>
          <Back size={20} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Notifications</Text>
      </View>
      <ScrollView style={styles.mainContainer}>
        <Text style={styles.dateTxt}>23 Feb 2025</Text>
        <NotificationCard
          HeaderTxt={'Your Appointment is Tomorrow!'}
          subTxt={
            'Hey! Just a quick reminder that your derma Fillers appointment is tomorrow at 10 AM.'
          }
        />
        <NotificationCard
          HeaderTxt={'Off-Peak Hour Price'}
          subTxt={
            'Save 20% by booking during off-peak hours (10 AM - 2 PM, weekdays)!'
          }
          mainStyle={{marginVertical: 14}}
        />
        <NotificationCard
          HeaderTxt={'Limited-Time Promotions'}
          subTxt={
            'Flash Sale: 30% off Botox treatments today only! Tap to book now..'
          }
        />
        <NotificationCard
          HeaderTxt={'Emergency or Last-Minute Opening '}
          subTxt={
            'Last-minute opening available today at 3 PM! Tap to book your spot before it’s gone'
          }
          mainStyle={{marginVertical: 14}}
        />
        <Text style={styles.dateTxt}>22 Feb 2025</Text>

        <NotificationCard
          HeaderTxt={'Your Appointment is Tomorrow!'}
          subTxt={
            'Hey! Just a quick reminder that your derma Fillers appointment is tomorrow at 10 AM.'
          }
        />
        <NotificationCard
          HeaderTxt={'Your Personalized SkinCare Alert'}
          subTxt={
            'Your Skin Analysis Shows it’s Time to Hydrate! Try Our Recommended Routine'
          }
          mainStyle={{marginVertical: 14}}
        />
        <NotificationCard
          HeaderTxt={'Limited-Time Promotions'}
          subTxt={
            'Flash Sale: 30% off Botox treatments today only! Tap to book now..'
          }
        />
        <NotificationCard
          HeaderTxt={'Your Appointment is Tomorrow!'}
          subTxt={
            'Hey! Just a quick reminder that your derma Fillers appointment is tomorrow at 10 AM.'
          }
          mainStyle={{marginVertical: 14}}
        />
        <NotificationCard
          HeaderTxt={'Your Personalized SkinCare Alert'}
          subTxt={
            'Your Skin Analysis Shows it’s Time to Hydrate! Try Our Recommended Routine'
          }
        />
        <NotificationCard
          HeaderTxt={'Limited-Time Promotions'}
          subTxt={
            'Flash Sale: 30% off Botox treatments today only! Tap to book now..'
          }
          mainStyle={{marginVertical: 14}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.arrowBack,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0,
  },
  backContainer: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: Colors.white,
  },
  headerMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightBorderColor,
    paddingBottom: 27,
    marginBottom: 19,
  },
  headerTxt: {
    fontSize: 24,
    fontFamily: FontFamily.semiBold,
    marginLeft: 20,
  },
  dateTxt: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: FontFamily.semiBold,
    marginBottom: 7,
  },
  mainContainer: {
    paddingHorizontal: 30,
  },
});
