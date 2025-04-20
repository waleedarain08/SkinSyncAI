import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import {Back, Clip} from '../../icons';
import {Colors} from '../../utils/Colors';
import {FontFamily} from '../../utils/Fonts';
import SmallTreatmentCard from '../../components/SmallTreatmentCard';
import RecommendationCard from '../../components/RecommendationCard';
import Button from '../../components/Button';

const ReadyAppointmentScreen = ({navigation}) => {
  const [selectedCard, setSelectedCard] = useState('master');
  const [modalVisible, setModalVisible] = useState(false);

  const handleBooking = () => {
    setModalVisible(true);
  };

  const treatments = [
    {
      id: 't1',
      name: 'Botox',
      image: require('../../assets/images/recommendimage1.png'),
    },
    {
      id: 't2',
      name: 'Laser',
      image: require('../../assets/images/recommendImage2.png'),
    },
    {
      id: 't3',
      name: 'Peel',
      image: require('../../assets/images/recommendImage3.png'),
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Back size={20} />
        </TouchableOpacity>

        <Text style={styles.title}>Your Treatment Appointment is Ready!</Text>

        {/* Appointment Card */}
        <View style={styles.appointmentCard}>
          <Image
            source={require('../../assets/images/readyImage.png')}
            style={styles.cardImage}
          />
          <View style={[styles.cardText, {marginLeft: 16}]}>
            <Text style={styles.date}>Monday, Feb 03 - 11:00 AM</Text>
            <Text style={styles.service}>Derma Fillers - Cheeks</Text>
            <Text style={styles.clinic}>Glow Skin Clinic</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Clip size={14} />
              <Text style={styles.link}>Derma Fillers - Cheeks Model</Text>
            </View>
          </View>
        </View>

        {/* Recommendations */}
        <Text style={styles.subTitle}>Our Recommendation</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginBottom: 25}}>
          {treatments.map(item => (
            <RecommendationCard
              key={item.id}
              treatment={item}
              image={item.image}
            />
          ))}
        </ScrollView>

        {/* Payment Section */}
        <Text style={[styles.subTitle, {fontSize: 30}]}>Payment Details</Text>
        <Text style={styles.paymentInstruction}>Select Payment Method</Text>

        {/* Cards */}
        <TouchableOpacity
          style={styles.paymentOption}
          onPress={() => setSelectedCard('master')}>
          <View style={styles.cardInfo}>
            <Image
              source={require('../../assets/images/payPal.png')}
              style={{height: 50, width: 50, borderRadius: 10}}
            />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 16, fontFamily: FontFamily.semiBold}}>
                Master Card
              </Text>
              <Text style={[styles.cardText, {color: '#323232'}]}>
                5698 4700 2589 9658
              </Text>
            </View>
          </View>
          <View
            style={
              selectedCard === 'master' ? styles.radioSelected : styles.radio
            }
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paymentOption}
          onPress={() => setSelectedCard('visa')}>
          <View style={styles.cardInfo}>
            <Image
              source={require('../../assets/images/Visa.png')}
              style={{height: 50, width: 50, borderRadius: 10}}
            />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 16, fontFamily: FontFamily.semiBold}}>
                Visa Card
              </Text>
              <Text style={[styles.cardText, {color: '#323232'}]}>
                5689 4700 2589 9658
              </Text>
            </View>
          </View>
          <View
            style={
              selectedCard === 'visa' ? styles.radioSelected : styles.radio
            }
          />
        </TouchableOpacity>

        {/* Confirm Booking Button */}
        <TouchableOpacity
          style={[styles.confirmButton, {backgroundColor: Colors.pink}]}
          onPress={handleBooking}>
          <Text style={styles.confirmText}>Add New Method</Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            borderTopWidth: 1,
            borderTopColor: Colors.lightBorderColor,
            paddingTop: 20,
            borderBottomWidth: 1,
            borderBottomColor: Colors.lightBorderColor,
            paddingBottom: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.treatmentText}>Derma Fillers - Cheeks</Text>
            <Text style={styles.treatmentText}>By Glow Skin Clinic</Text>
          </View>
          <Text style={styles.treatmentText}>$ 550</Text>
        </View>
        <View
          style={{
            marginVertical: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.treatmentText}>Amount</Text>
          </View>
          <Text style={styles.treatmentText}>$ 550</Text>
        </View>
        <Button title={'Confirm Now'} />
        {/* Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('AdditionalInformation');
                }}
                style={styles.modalClose}>
                <Text style={styles.closeText}>×</Text>
              </TouchableOpacity>
              <View style={styles.ImgStyle}>
                <Image
                  source={require('../../assets/images/calendar.png')}
                  style={styles.modalIcon}
                />
              </View>
              <Text style={styles.modalTitle}>Successfully Booked</Text>
              <Text style={styles.modalDescription}>
                Lorem ipsum dolor sit amet consectetur Ut consectetur mauris
                tellus ultricies.
              </Text>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 30, backgroundColor: Colors.white},
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    width: 44,
    borderRadius: 50,
    backgroundColor: Colors.arrowBack,
    marginBottom: 25,
  },
  backArrow: {fontSize: 24},
  title: {fontSize: 30, fontWeight: FontFamily.semiBold, marginBottom: 16},

  appointmentCard: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 6,
    borderColor: Colors.black,
    borderRadius: 12,
    marginBottom: 24,
  },
  cardImage: {width: 110, height: 105, borderRadius: 10},
  cardText: {
    justifyContent: 'center',
    fontSize: 12,
    fontFamily: FontFamily.regular,
  },
  date: {fontSize: 14, fontFamily: FontFamily.medium},
  service: {fontSize: 18, fontFamily: FontFamily.semiBold},
  clinic: {
    fontSize: 14,
    fontFamily: FontFamily.regular,
    color: Colors.headinglight,
  },
  link: {
    fontSize: 12,
    FontFamily: FontFamily.regular,
    color: Colors.headinglight,
    textDecorationLine: 'underline',
    marginLeft: 6,
  },

  subTitle: {
    fontSize: 22,
    fontFamily: FontFamily.semiBold,
    marginBottom: 20,
    borderTopWidth: 1,
    paddingTop: 20,
    borderTopColor: Colors.lightBorderColor,
  },
  recommendationCard: {
    width: 140,
    marginRight: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
  },
  recommendationImage: {width: '100%', height: 80, borderRadius: 10},
  treatmentName: {marginTop: 8, fontWeight: '500'},
  price: {fontSize: 12},
  oldPrice: {textDecorationLine: 'line-through', color: '#aaa'},
  newPrice: {color: '#000', fontWeight: 'bold'},
  addButton: {
    marginTop: 4,
    alignSelf: 'flex-start',
    backgroundColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  addText: {color: '#fff'},

  paymentInstruction: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: FontFamily.semiBold,
  },
  paymentOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  cardInfo: {flexDirection: 'row', alignItems: 'center'},
  masterIcon: {
    width: 32,
    height: 20,
    backgroundColor: 'orange',
    borderRadius: 4,
    marginRight: 12,
  },
  visaIcon: {
    width: 32,
    height: 20,
    backgroundColor: '#1a1f71',
    borderRadius: 4,
    marginRight: 12,
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  radioSelected: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 6,
    borderColor: '#007bff',
  },

  confirmButton: {
    padding: 14,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 5,
  },
  modalClose: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
  },
  closeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  modalIcon: {
    width: 120,
    height: 120,
  },
  modalTitle: {
    fontSize: 30,
    fontFamily: FontFamily.semiBold,
    marginBottom: 7,
  },
  modalDescription: {
    fontSize: 18,
    fontFamily: FontFamily.regular,
    textAlign: 'center',
  },
  ImgStyle: {
    height: 100,
    width: 100,
    borderRadius: 142,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.arrowBack,
    marginBottom: 20,
  },
  treatmentText: {
    fontSize: 16,
    fontFamily: FontFamily.semiBold,
  },
});

export default ReadyAppointmentScreen;
