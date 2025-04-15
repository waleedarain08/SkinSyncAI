import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FontFamily} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import {Bell} from '../../icons';
import CustomTextInput from '../../components/CustomTextInput';
import AppointmentCard from '../../components/AppoinmentCard';
import HorizontalCalendar from '../../components/HorizontalCalendar';

const AppointmentsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.safeBack}>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Hello, Burak!</Text>
            <Text style={styles.subText}>
              Your journey to radiant skin starts now.
            </Text>
          </View>
          <TouchableOpacity style={styles.bellBack}>
            <Bell size={21} />
          </TouchableOpacity>
        </View>
        <View style={styles.bodyContainer}>
          <View style={{paddingHorizontal: 30}}>
            <CustomTextInput
              placeholder="Search Here"
              showSearchIcon={true}
              mainStyle={{height: 44}}
              txtInputStyle={{borderColor: Colors.black}}
              onSearchPress={() => console.log('Search pressed')}
            />
          </View>
          <View style={styles.filterMain}>
            <Text style={styles.dateTxt}>Monday, 24 Feb</Text>
            <TouchableOpacity style={styles.filterBack}>
              <Image
                source={require('../../assets/images/slider.png')}
                style={{height: 18, width: 18}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <HorizontalCalendar appointments={['2025-04-07', '2025-04-10']} />
          </View>
          <View style={styles.appointCardMain}>
            <Text style={styles.scheduleTxt}>Today's schedule</Text>
            <AppointmentCard />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0,
    backgroundColor: Colors.white,
  },
  header: {
    paddingHorizontal: 30,
    paddingBottom: 22,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
    fontFamily: FontFamily.semiBold,
    marginBottom: 4,
  },
  subText: {
    fontSize: 16,
    color: Colors.lightBlack,
    fontFamily: FontFamily.regular,
  },
  bellBack: {
    height: 44,
    width: 44,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.arrowBack,
  },
  safeBack: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bodyContainer: {
    paddingVertical: 15,
  },
  filterMain: {
    flexDirection: 'row',
    paddingVertical: 21,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  dateTxt: {
    fontSize: 24,
    fontFamily: FontFamily.semiBold,
  },
  filterBack: {
    backgroundColor: Colors.arrowBack,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 32,
    width: 32,
  },
  scheduleTxt: {
    fontSize: 20,
    fontFamily: FontFamily.medium,
    paddingBottom: 14,
  },
  appointCardMain: {
    marginVertical: 22,
    paddingHorizontal: 30,
  },
});

export default AppointmentsScreen;
