import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import {Back, Forward} from '../../icons';
import {FontFamily} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import AiModelCard from '../../components/AiModalCard';
import TreatmentCard from '../../components/TreatmentCard';
import ClinicCard from '../../components/ClinicCard';

const SavedTreatmentsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerMainContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backContainer}>
          <Back size={20} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Saved Treatments & Clinics</Text>
      </View>
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <View style={styles.nextAppoinment}>
          <Text style={styles.nextAppoinmentText}>Your Ai Treatment Model</Text>
          <View style={styles.forwardBtn}>
            <Forward size={18} />
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.firstScroll}>
          <AiModelCard />
          <AiModelCard />
          <AiModelCard />
          <AiModelCard />
        </ScrollView>
        <View>
          <View style={[styles.nextAppoinment, {marginTop: 30}]}>
            <Text style={styles.nextAppoinmentText}>Saved Treatments</Text>
            <View style={styles.forwardBtn}>
              <Forward size={18} />
            </View>
          </View>
          <ScrollView horizontal contentContainerStyle={{gap: 15}} showsHorizontalScrollIndicator={false}>
            <TreatmentCard check={true} title="Treatment Name" />
            <TreatmentCard
              title="Treatment Name"
              image={require('../../assets/images/glowingSkin.png')}
              check={true}
            />
            <TreatmentCard
              title="Treatment Name"
              image={require('../../assets/images/aura.png')}
              check={true}
            />
          </ScrollView>
        </View>
        <View>
          <View style={[styles.nextAppoinment, {marginTop: 30}]}>
            <Text style={styles.nextAppoinmentText}>Saved Clinic</Text>
            <View style={styles.forwardBtn}>
              <Forward size={18} />
            </View>
          </View>
          <ScrollView horizontal contentContainerStyle={{gap: 15}} showsHorizontalScrollIndicator={false}>
            <ClinicCard check={true} title="Treatment Name" checkFire={true} />
            <ClinicCard
              image={require('../../assets/images/clinicImage2.png')}
              check={true}
            />
            <ClinicCard
              image={require('../../assets/images/clinicImage3.png')}
              check={true}
              checkFire={true} 
            />
             <ClinicCard
              image={require('../../assets/images/clinicImage4.png')}
              check={true}
            />
             <ClinicCard
              image={require('../../assets/images/clinicImage5.png')}
              check={true}
              checkFire={true} 
            />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === "android"
    ? StatusBar.currentHeight
    : 0,
  },
  headercontainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  backContainer: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: Colors.arrowBack,
  },
  headerMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 27,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightBorderColor,
  },
  headerTxt: {
    fontSize: 24,
    fontFamily: FontFamily.semiBold,
    marginLeft: 20,
  },
  mainContainer: {
    paddingHorizontal: 30,
  },
  bodyContainer: {
    paddingHorizontal: 30,
    paddingBottom:30,
  },
  nextAppoinment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 13,
  },
  forwardBtn: {
    height: 31,
    width: 31,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.arrowBack,
  },
  nextAppoinmentText: {
    fontSize: 22,
    fontFamily: FontFamily.semiBold,
  },
  firstScroll: {
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightBorderColor,
  },
});

export default SavedTreatmentsScreen;
