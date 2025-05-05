import React, {useRef, useState} from 'react';
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
import {Back, Bell, Forward, Location} from '../../icons';
import CustomTextInput from '../../components/CustomTextInput';
import TreatmentCard from '../../components/TreatmentCard';
import SmallTreatmentCard from '../../components/SmallTreatmentCard';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width * 0.7;
const CARD_SPACING = 16;
const TreatmentsScreen = ({navigation}) => {
  const scrollRef = useRef();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const data = [
    {
      title: 'Botox Treatment',
      image: require('../../assets/images/carousalImage1.png'),
    },
    {
      title: 'Laser Treatment',
      image: require('../../assets/images/caurosalImage2.png'),
    },
    {
      title: 'LEDLight Therapy',
      image: require('../../assets/images/caurosalImage3.png'),
    },
    {
      title: 'Botox Treatment',
      image: require('../../assets/images/carousalImage1.png'),
    },
  ];

  const treatmentCards = [
    {
      id: 1,
      title: 'Treatment Name',
      name: 'Glow Skin Clinic',
      discount: '$ 800',
      price: '$ 650',
      image: require('../../assets/images/injectFiller1.png'),
      check: true,
    },
    {
      id: 2,
      title: 'Hydra Facial',
      name: 'Glow Skin Clinic',
      discount: '$ 700',
      price: '$ 600',
      image: require('../../assets/images/injectFiller2.png'),
      check: false,
    },
    {
      id: 3,
      title: 'Laser Brightening',
      name: 'Glow Skin Clinic',
      discount: '$ 900',
      price: '$ 720',
      image: require('../../assets/images/injectFiller3.png'),
      checkFire: false,
      check: false,
    },
    {
      id: 4,
      title: 'Vitamin Infusion',
      name: 'Glow Skin Clinic',
      discount: '$ 650',
      price: '$ 500',
      image: require('../../assets/images/injectFiller4.png'),
      checkFire: false,
      check: true,
    },
    {
      id: 5,
      title: 'Peel Treatment',
      name: 'Glow Skin Clinic',
      discount: '$ 500',
      price: '$ 400',
      image: require('../../assets/images/injectFiller1.png'),
      checkFire: true,
      check: false,
    },
    {
      id: 6,
      title: 'LED Therapy',
      name: 'Glow Skin Clinic',
      discount: '$ 750',
      price: '$ 630',
      image: require('../../assets/images/injectFiller2.png'),
      checkFire: false,
      check: true,
    },
    {
      id: 7,
      title: 'Botox Glow',
      name: 'Glow Skin Clinic',
      discount: '$ 1000',
      price: '$ 850',
      image: require('../../assets/images/injectFiller3.png'),
      checkFire: true,
      check: false,
    },
    {
      id: 8,
      title: 'Anti-Aging Package',
      name: 'Glow Skin Clinic',
      discount: '$ 1200',
      price: '$ 999',
      image: require('../../assets/images/injectFiller4.png'),
      checkFire: true,
      check: false,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.safeBack}>
        <View style={styles.header}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../assets/images/location.png')}
                style={styles.locationStyle}
              />
              <Text style={styles.welcomeText}>New York</Text>
            </View>
            <Text style={styles.subText}>195 Karlie Brooks, Anderson</Text>
          </View>
          <TouchableOpacity style={styles.bellBack} onPress={() => {navigation.navigate('notification')}}>
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
          {selectedCategory ? (
            <View style={{paddingHorizontal: 30}}>
              {/* Back Button and Heading */}
              <View style={styles.headerMainContainer}>
                <TouchableOpacity
                  onPress={() => setSelectedCategory(null)}
                  style={styles.backContainer}>
                  <Back size={20} />
                </TouchableOpacity>
                <Text style={styles.headerTxt}>Injectables & Fillers</Text>
              </View>

              {/* Filter Chips */}
              <ScrollView
                contentContainerStyle={[styles.btnMain, {marginTop: 0}]}
                horizontal
                showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                  style={[styles.btnStyle, {backgroundColor: Colors.black}]}>
                  <Text style={[styles.btnText, {color: Colors.white}]}>
                    All
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btnStyle, {marginHorizontal: 5}]}>
                  <Text style={[styles.btnText]}>Lip Augmentation</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btnStyle, {marginHorizontal: 5}]}>
                  <Text style={styles.btnText}>Cheek Fillers </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle}>
                  <Text style={styles.btnText}>Jawline Contouring </Text>
                </TouchableOpacity>
              </ScrollView>

              {/* Treatment Cards */}
              <View style={styles.gridContainer}>
                {treatmentCards.map(item => (
                  <View key={item.id} style={styles.cardWrapper}>
                    <SmallTreatmentCard
                      title={item.title}
                      name={item.name}
                      discount={item.discount}
                      price={item.price}
                      image={item.image}
                      checkFire={item.checkFire}
                      check={item.check}
                      navigation={navigation}
                    />
                  </View>
                ))}
              </View>
            </View>
          ) : (
            // Original content goes here
            <View>
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
                <TouchableOpacity
                  style={[styles.btnStyle, {marginHorizontal: 5}]}>
                  <Image
                    source={require('../../assets/images/skinCare.png')}
                    style={{width: 18, height: 18}}
                  />
                  <Text style={[styles.btnText]}>Facial</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle}>
                  <Image
                    source={require('../../assets/images/injection.png')}
                    style={{width: 18, height: 18}}
                  />
                  <Text style={styles.btnText}>Microneedling </Text>
                </TouchableOpacity>
              </ScrollView>
              <View>
                <Text style={styles.title}>Laser Treatments</Text>
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
                      Skincare & Facial Treatments
                    </Text>
                    <TouchableOpacity
                      style={styles.forwardBtn}
                      onPress={() =>
                        setSelectedCategory('Skincare & Facial Treatments')
                      }>
                      <Forward size={18} />
                    </TouchableOpacity>
                  </View>
                  <ScrollView contentContainerStyle={{gap: 15}} horizontal showsHorizontalScrollIndicator={false}>
                    <TreatmentCard
                      image={require('../../assets/images/glasses2.png')}
                    />
                    <TreatmentCard
                      title="Glow Dermal Infusion"
                      image={require('../../assets/images/glasses2.png')}
                    />
                    <TreatmentCard
                      title="Aurora Laser Therapy"
                      image={require('../../assets/images/mask.png')}
                    />
                  </ScrollView>
                </View>
                <View style={{paddingHorizontal: 30}}>
                  <View style={styles.nextAppoinment}>
                    <Text style={styles.nextAppoinmentText}>
                      Injectables & Fillers Treatments
                    </Text>
                    <TouchableOpacity
                      style={styles.forwardBtn}
                      onPress={() =>
                        setSelectedCategory('Injectables & Fillers')
                      }>
                      <Forward size={18} />
                    </TouchableOpacity>
                  </View>
                  <ScrollView contentContainerStyle={{gap: 15}} horizontal showsHorizontalScrollIndicator={false}>
                    <TreatmentCard
                      title="Treatment Name"
                      image={require('../../assets/images/injection1.png')}
                    />
                    <TreatmentCard
                      title="Treatment Name"
                      image={require('../../assets/images/Injection2.png')}
                    />
                    <TreatmentCard
                      title="Treatment Name"
                      image={require('../../assets/images/laser.png')}
                    />
                  </ScrollView>
                </View>
                <View style={{paddingHorizontal: 30}}>
                  <View style={styles.nextAppoinment}>
                    <Text style={styles.nextAppoinmentText}>
                      All Treatments
                    </Text>
                    <TouchableOpacity
                      style={styles.forwardBtn}
                      onPress={() => setSelectedCategory('Laser Treatments')}>
                      <Forward size={18} />
                    </TouchableOpacity>
                  </View>
                  <ScrollView contentContainerStyle={{gap: 15}} horizontal showsHorizontalScrollIndicator={false}>
                    <TreatmentCard
                      title="Treatment Name"
                      image={require('../../assets/images/light1.png')}
                    />
                    <TreatmentCard
                      title="Treatment Name"
                      image={require('../../assets/images/light2.png')}
                    />
                    <TreatmentCard
                      title="Treatment Name"
                      image={require('../../assets/images/light3.png')}
                    />
                  </ScrollView>
                </View>
                <View style={{paddingHorizontal: 30}}>
                  <View style={styles.nextAppoinment}>
                    <Text style={styles.nextAppoinmentText}>
                      Sculpting & Contouring Treatments
                    </Text>
                    <TouchableOpacity
                      style={styles.forwardBtn}
                      onPress={() =>
                        setSelectedCategory('Sculpting & Contouring Treatments')
                      }>
                      <Forward size={18} />
                    </TouchableOpacity>
                  </View>
                  <ScrollView contentContainerStyle={{gap: 15}} horizontal showsHorizontalScrollIndicator={false}>
                    <TreatmentCard
                      title="Treatment Name"
                      image={require('../../assets/images/scan1.png')}
                    />
                    <TreatmentCard
                      title="Treatment Name"
                      image={require('../../assets/images/scan2.png')}
                    />
                    <TreatmentCard
                      title="Treatment Name"
                      image={require('../../assets/images/scan3.png')}
                    />
                  </ScrollView>
                </View>
                <View style={{paddingHorizontal: 30}}>
                  <View style={styles.nextAppoinment}>
                    <Text style={styles.nextAppoinmentText}>
                      Rejuvenation Treatments
                    </Text>
                    <TouchableOpacity
                      style={styles.forwardBtn}
                      onPress={() =>
                        setSelectedCategory('Rejuvenation Treatments')
                      }>
                      <Forward size={18} />
                    </TouchableOpacity>
                  </View>
                  <ScrollView contentContainerStyle={{gap: 15}} horizontal showsHorizontalScrollIndicator={false}>
                    <TreatmentCard
                      title="Treatment Name"
                      image={require('../../assets/images/message1.png')}
                    />
                    <TreatmentCard
                      title="Treatment Name"
                      image={require('../../assets/images/message2.png')}
                    />
                    <TreatmentCard
                      title="Treatment Name"
                      image={require('../../assets/images/message3.png')}
                    />
                  </ScrollView>
                </View>
              </View>
            </View>
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 0,
    backgroundColor: Colors.white,
  },
  header: {
    paddingHorizontal: 20,
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
    marginLeft: 8,
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
    paddingBottom: 30,
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
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    fontFamily: FontFamily.medium,
  },
  carousalContainer: {
    marginTop: 28,
    marginLeft: -30,
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
    fontSize: 20,
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
    fontSize: 18,
    fontFamily: FontFamily.semiBold,
  },
  locationStyle: {
    width: 16,
    height: 20,
    resizeMode: 'contain',
  },
  headercontainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0,
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
    marginVertical: 27,
  },
  headerTxt: {
    fontSize: 24,
    fontFamily: FontFamily.semiBold,
    marginLeft: 40,
  },
  mainContainer: {
    paddingHorizontal: 30,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 20,
  },
  cardWrapper: {
    width: '48%',
  },
});

export default TreatmentsScreen;
