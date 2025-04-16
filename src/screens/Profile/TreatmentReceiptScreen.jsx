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
import {FontFamily} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import {Back} from '../../icons';

const TreatmentReceiptScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerMainContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backContainer}>
          <Back size={20} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Treatment Receipts</Text>
      </View>
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <View style={styles.cardContainer}>
          <Text style={styles.recieptNumber}>Receipt ID #51581521</Text>
          <View style={styles.statusBack}>
            <View style={styles.headingTxtMain}>
              <Text style={[styles.headingTxt, {width: '48%'}]}>For</Text>
              <Text style={[styles.headingTxt, {width: '28%'}]}>Amount</Text>
              <Text style={[styles.headingTxt]}>Status</Text>
            </View>
            <View style={[styles.headingTxtMain, {marginTop: 5}]}>
              <Text style={[styles.txt, {width: '48%'}]}>
                Derma Fillers - Cheeks
              </Text>
              <Text style={[styles.txt, {width: '28%'}]}>$ 640</Text>
              <View style={styles.paid}>
                <Text style={styles.paidTxt}>Paid</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.recieptNumber}>Receipt ID #51581521</Text>
          <View style={styles.statusBack}>
            <View style={styles.headingTxtMain}>
              <Text style={[styles.headingTxt, {width: '48%'}]}>For</Text>
              <Text style={[styles.headingTxt, {width: '28%'}]}>Amount</Text>
              <Text style={[styles.headingTxt]}>Status</Text>
            </View>
            <View style={[styles.headingTxtMain, {marginTop: 5}]}>
              <Text style={[styles.txt, {width: '48%'}]}>
                Derma Fillers - Cheeks
              </Text>
              <Text style={[styles.txt, {width: '28%'}]}>$ 640</Text>
              <View style={styles.paid}>
                <Text style={styles.paidTxt}>Paid</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.recieptNumber}>Receipt ID #51581521</Text>
          <View style={styles.statusBack}>
            <View style={styles.headingTxtMain}>
              <Text style={[styles.headingTxt, {width: '48%'}]}>For</Text>
              <Text style={[styles.headingTxt, {width: '28%'}]}>Amount</Text>
              <Text style={[styles.headingTxt]}>Status</Text>
            </View>
            <View style={[styles.headingTxtMain, {marginTop: 5}]}>
              <Text style={[styles.txt, {width: '48%'}]}>
                Derma Fillers - Cheeks
              </Text>
              <Text style={[styles.txt, {width: '28%'}]}>$ 640</Text>
              <View style={styles.paid}>
                <Text style={styles.paidTxt}>Paid</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.recieptNumber}>Receipt ID #51581521</Text>
          <View style={styles.statusBack}>
            <View style={styles.headingTxtMain}>
              <Text style={[styles.headingTxt, {width: '48%'}]}>For</Text>
              <Text style={[styles.headingTxt, {width: '28%'}]}>Amount</Text>
              <Text style={[styles.headingTxt]}>Status</Text>
            </View>
            <View style={[styles.headingTxtMain, {marginTop: 5}]}>
              <Text style={[styles.txt, {width: '48%'}]}>
                Derma Fillers - Cheeks
              </Text>
              <Text style={[styles.txt, {width: '28%'}]}>$ 640</Text>
              <View style={styles.paid}>
                <Text style={styles.paidTxt}>Paid</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.recieptNumber}>Receipt ID #51581521</Text>
          <View style={styles.statusBack}>
            <View style={styles.headingTxtMain}>
              <Text style={[styles.headingTxt, {width: '48%'}]}>For</Text>
              <Text style={[styles.headingTxt, {width: '28%'}]}>Amount</Text>
              <Text style={[styles.headingTxt]}>Status</Text>
            </View>
            <View style={[styles.headingTxtMain, {marginTop: 5}]}>
              <Text style={[styles.txt, {width: '48%'}]}>
                Derma Fillers - Cheeks
              </Text>
              <Text style={[styles.txt, {width: '28%'}]}>$ 640</Text>
              <View style={styles.paid}>
                <Text style={styles.paidTxt}>Paid</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.recieptNumber}>Receipt ID #51581521</Text>
          <View style={styles.statusBack}>
            <View style={styles.headingTxtMain}>
              <Text style={[styles.headingTxt, {width: '48%'}]}>For</Text>
              <Text style={[styles.headingTxt, {width: '28%'}]}>Amount</Text>
              <Text style={[styles.headingTxt]}>Status</Text>
            </View>
            <View style={[styles.headingTxtMain, {marginTop: 5}]}>
              <Text style={[styles.txt, {width: '48%'}]}>
                Derma Fillers - Cheeks
              </Text>
              <Text style={[styles.txt, {width: '28%'}]}>$ 640</Text>
              <View style={styles.paid}>
                <Text style={styles.paidTxt}>Paid</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.recieptNumber}>Receipt ID #51581521</Text>
          <View style={styles.statusBack}>
            <View style={styles.headingTxtMain}>
              <Text style={[styles.headingTxt, {width: '48%'}]}>For</Text>
              <Text style={[styles.headingTxt, {width: '28%'}]}>Amount</Text>
              <Text style={[styles.headingTxt]}>Status</Text>
            </View>
            <View style={[styles.headingTxtMain, {marginTop: 5}]}>
              <Text style={[styles.txt, {width: '48%'}]}>
                Derma Fillers - Cheeks
              </Text>
              <Text style={[styles.txt, {width: '28%'}]}>$ 640</Text>
              <View style={styles.paid}>
                <Text style={styles.paidTxt}>Paid</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.recieptNumber}>Receipt ID #51581521</Text>
          <View style={styles.statusBack}>
            <View style={styles.headingTxtMain}>
              <Text style={[styles.headingTxt, {width: '48%'}]}>For</Text>
              <Text style={[styles.headingTxt, {width: '28%'}]}>Amount</Text>
              <Text style={[styles.headingTxt]}>Status</Text>
            </View>
            <View style={[styles.headingTxtMain, {marginTop: 5}]}>
              <Text style={[styles.txt, {width: '48%'}]}>
                Derma Fillers - Cheeks
              </Text>
              <Text style={[styles.txt, {width: '28%'}]}>$ 640</Text>
              <View style={styles.paid}>
                <Text style={styles.paidTxt}>Paid</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.recieptNumber}>Receipt ID #51581521</Text>
          <View style={styles.statusBack}>
            <View style={styles.headingTxtMain}>
              <Text style={[styles.headingTxt, {width: '48%'}]}>For</Text>
              <Text style={[styles.headingTxt, {width: '28%'}]}>Amount</Text>
              <Text style={[styles.headingTxt]}>Status</Text>
            </View>
            <View style={[styles.headingTxtMain, {marginTop: 5}]}>
              <Text style={[styles.txt, {width: '48%'}]}>
                Derma Fillers - Cheeks
              </Text>
              <Text style={[styles.txt, {width: '28%'}]}>$ 640</Text>
              <View style={styles.paid}>
                <Text style={styles.paidTxt}>Paid</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.recieptNumber}>Receipt ID #51581521</Text>
          <View style={styles.statusBack}>
            <View style={styles.headingTxtMain}>
              <Text style={[styles.headingTxt, {width: '48%'}]}>For</Text>
              <Text style={[styles.headingTxt, {width: '28%'}]}>Amount</Text>
              <Text style={[styles.headingTxt]}>Status</Text>
            </View>
            <View style={[styles.headingTxtMain, {marginTop: 5}]}>
              <Text style={[styles.txt, {width: '48%'}]}>
                Derma Fillers - Cheeks
              </Text>
              <Text style={[styles.txt, {width: '28%'}]}>$ 640</Text>
              <View style={styles.paid}>
                <Text style={styles.paidTxt}>Paid</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.recieptNumber}>Receipt ID #51581521</Text>
          <View style={styles.statusBack}>
            <View style={styles.headingTxtMain}>
              <Text style={[styles.headingTxt, {width: '48%'}]}>For</Text>
              <Text style={[styles.headingTxt, {width: '28%'}]}>Amount</Text>
              <Text style={[styles.headingTxt]}>Status</Text>
            </View>
            <View style={[styles.headingTxtMain, {marginTop: 5}]}>
              <Text style={[styles.txt, {width: '48%'}]}>
                Derma Fillers - Cheeks
              </Text>
              <Text style={[styles.txt, {width: '28%'}]}>$ 640</Text>
              <View style={styles.paid}>
                <Text style={styles.paidTxt}>Paid</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.recieptNumber}>Receipt ID #51581521</Text>
          <View style={styles.statusBack}>
            <View style={styles.headingTxtMain}>
              <Text style={[styles.headingTxt, {width: '48%'}]}>For</Text>
              <Text style={[styles.headingTxt, {width: '28%'}]}>Amount</Text>
              <Text style={[styles.headingTxt]}>Status</Text>
            </View>
            <View style={[styles.headingTxtMain, {marginTop: 5}]}>
              <Text style={[styles.txt, {width: '48%'}]}>
                Derma Fillers - Cheeks
              </Text>
              <Text style={[styles.txt, {width: '28%'}]}>$ 640</Text>
              <View style={styles.paid}>
                <Text style={styles.paidTxt}>Paid</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.recieptNumber}>Receipt ID #51581521</Text>
          <View style={styles.statusBack}>
            <View style={styles.headingTxtMain}>
              <Text style={[styles.headingTxt, {width: '48%'}]}>For</Text>
              <Text style={[styles.headingTxt, {width: '28%'}]}>Amount</Text>
              <Text style={[styles.headingTxt]}>Status</Text>
            </View>
            <View style={[styles.headingTxtMain, {marginTop: 5}]}>
              <Text style={[styles.txt, {width: '48%'}]}>
                Derma Fillers - Cheeks
              </Text>
              <Text style={[styles.txt, {width: '28%'}]}>$ 640</Text>
              <View style={styles.paid}>
                <Text style={styles.paidTxt}>Paid</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.recieptNumber}>Receipt ID #51581521</Text>
          <View style={styles.statusBack}>
            <View style={styles.headingTxtMain}>
              <Text style={[styles.headingTxt, {width: '48%'}]}>For</Text>
              <Text style={[styles.headingTxt, {width: '28%'}]}>Amount</Text>
              <Text style={[styles.headingTxt]}>Status</Text>
            </View>
            <View style={[styles.headingTxtMain, {marginTop: 5}]}>
              <Text style={[styles.txt, {width: '48%'}]}>
                Derma Fillers - Cheeks
              </Text>
              <Text style={[styles.txt, {width: '28%'}]}>$ 640</Text>
              <View style={styles.paid}>
                <Text style={styles.paidTxt}>Paid</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TreatmentReceiptScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
    marginBottom: 32,
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
  cardContainer: {
    height: 150,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.lightBorderColor,
    padding: 10,
    paddingHorizontal: 18,
    marginBottom: 14,
  },
  recieptNumber: {
    fontSize: 22,
    fontFamily: FontFamily.semiBold,
  },
  statusBack: {
    backgroundColor: Colors.lighterBlue,
    height: 90,
    borderRadius: 8,
    marginTop: 10,
    padding: 15,
  },
  headingTxtMain: {
    flexDirection: 'row',
  },
  headingTxt: {
    fontSize: 14,
    fontFamily: FontFamily.regular,
    color: Colors.headinglight,
  },
  txt: {
    fontSize: 16,
    fontFamily: FontFamily.semiBold,
  },
  paid: {
    width: 71,
    height: 21,
    backgroundColor: '#12BD091A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  paidTxt: {
    fontSize: 12,
    fontFamily: FontFamily.semiBold,
    color: '#12BD09',
  },
});
