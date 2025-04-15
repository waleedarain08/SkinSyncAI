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
  Dimensions,
} from 'react-native';
import {FontFamily} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import {Bell, CircleCheck, Forward} from '../../icons';
import CustomTextInput from '../../components/CustomTextInput';
import ProgressCard from '../../components/ProgressCard';
import TreatmentCard from '../../components/TreatmentCard';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width * 0.7;
const CARD_SPACING = 16;
const TreatmentsScreen = () => {
  const scrollRef = useRef();

  const data = [
    {
      title: 'Laser Treatment',
      image: require('../../assets/images/dummyImg.png'),
    },
    {
      title: 'Another Service',
      image: require('../../assets/images/dummyImg.png'),
    },
    {
      title: 'More Treatment',
      image: require('../../assets/images/dummyImg.png'),
    },
  ];

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
          <ScrollView
            contentContainerStyle={styles.btnMain}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={[styles.btnStyle, {backgroundColor: Colors.black}]}>
              <Text style={[styles.btnText, {color: Colors.white}]}>
                All Treatments
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnStyle, {marginHorizontal: 5}]}>
              <Image
                source={require('../../assets/images/skinCare.png')}
                style={{width: 18, height: 18}}
              />
              <Text style={[styles.btnText]}>Skincare & Facial</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyle}>
              <Image
                source={require('../../assets/images/injection.png')}
                style={{width: 18, height: 18}}
              />
              <Text style={styles.btnText}>Injectables & Fillers </Text>
            </TouchableOpacity>
          </ScrollView>
          <View >
            <Text style={styles.title}>Recommended Treatments</Text>
            <View style={styles.carousalContainer}>
              <ScrollView
                ref={scrollRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH + CARD_SPACING}
                decelerationRate="fast"
                contentContainerStyle={{
                  // paddingRight: 20,
                  paddingHorizontal: (width - CARD_WIDTH) / 2,
                }}>
                {data.map((item, index) => (
                  <View key={index} style={styles.card}>
                    <Image source={item.image} style={styles.image} />
                    <View style={styles.labelContainer}>
                      <Text style={styles.label}>{item.title}</Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
            <View style={{paddingHorizontal: 30}}>
              <View style={styles.nextAppoinment}>
                <Text style={styles.nextAppoinmentText}>
                  Your Next Appointment
                </Text>
                <View style={styles.forwardBtn}>
                  <Forward size={18} />
                </View>
              </View>
              <TreatmentCard />
            </View>
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
    paddingBottom:30,
  },
  bodyContainer: {
    // paddingHorizontal: 30,
    paddingVertical: 15,
  },
  btnStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: Colors.arrowBack,
    height: 44,
    paddingHorizontal: 17,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnMain: {
    marginTop: 15,
    marginBottom: 22,
    flexGrow: 1,
    paddingHorizontal: 30,
  },
  btnText: {
    fontSize: 18,
    fontFamily: FontFamily.medium,
  },
  carousalContainer: {
    marginTop: 28,
    marginLeft:-30
  },
  card: {
    width: CARD_WIDTH,
    marginRight: CARD_SPACING,
    backgroundColor: Colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 4},
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 299,
  },
  labelContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.6)',
    width: 147,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 4},
    elevation: 5,
  },
  label: {
    fontSize: 14,
    fontFamily: FontFamily.semiBold,
    color: Colors.white,
  },
  title: {
    fontSize: 24,
    fontFamily: FontFamily.semiBold,
    textAlign: 'center',
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
});

export default TreatmentsScreen;
