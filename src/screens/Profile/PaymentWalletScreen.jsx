import {
  Image,
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
import {FontFamily} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import {Back, Forward} from '../../icons';
import DiscountCard from '../../components/DicountCard';
import TransactionItem from '../../components/TrasactionItem';

const transactions = [
  {
    title: 'Botox Treatment - Glow Skin Clinic',
    subtitle: 'Paid Today',
    amount: '298',
  },
  {
    title: 'Derma Fillers - Glow Skin Clinic',
    subtitle: 'Paid - 24 02 2025',
    amount: '298',
  },
  {
    title: 'Laser Facial - Glow Skin Clinic',
    subtitle: 'Paid - 12 03 2025',
    amount: '350',
  },
  {
    title: 'Microdermabrasion - Glow Skin Clinic',
    subtitle: 'Paid - 01 04 2025',
    amount: '275',
  },
];

const PaymentWalletScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerMainContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backContainer}>
          <Back size={20} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Payments & Wallets</Text>
      </View>
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <Image
          source={require('../../assets/images/cards.png')}
          style={styles.cardImage}
        />
        <View style={styles.discountMain}>
          <View style={styles.nextAppoinment}>
            <Text style={styles.nextAppoinmentText}>
              Promotions & Discounts
            </Text>
            <View>
              <Text style={styles.viewTxt}>View All</Text>
            </View>
          </View>
          <ScrollView horizontal contentContainerStyle={{gap: 15}}>
            <DiscountCard />
            <DiscountCard
              title="Aurora Laser Therapy"
              image={require('../../assets/images/discountAurora.png')}
            />
          </ScrollView>
        </View>
        <View style={styles.discountMain}>
          <View style={styles.nextAppoinment}>
            <Text style={styles.nextAppoinmentText}>Transactions</Text>
            <View>
              <Text style={styles.viewTxt}>See All</Text>
            </View>
          </View>
          {transactions.map((item, index) => (
            <TransactionItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              amount={item.amount}
              index={index}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentWalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight  : 0,
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
  },
  cardImage: {
    height: 266,
    width: '100%',
    resizeMode: 'contain',
  },
  nextAppoinment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 13,
  },
  nextAppoinmentText: {
    fontSize: 22,
    fontFamily: FontFamily.semiBold,
  },
  viewTxt: {
    fontSize: 14,
    fontFamily: FontFamily.medium,
    textDecorationLine: 'underline',
  },
  discountMain: {
    marginBottom: 30,
  },
});
