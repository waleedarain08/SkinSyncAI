import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import ToggleSwitch from '../../components/ToggleSwitch';
import {Colors} from '../../utils/Colors';
import {FontFamily} from '../../utils/Fonts';
import {Back} from '../../icons';

const settingsData = [
  {
    icon: require('../../assets/images/bellImg.png'),
    label: 'Push Notifications Off',
    toggle: true,
  },
  {
    icon: require('../../assets/images/biomatric.png'),
    label: 'Biometric Authentication',
    toggle: false,
    screen: 'Biometric',
  },
  {
    icon: require('../../assets/images/twoFactor.png'),
    label: 'Two-Factor Authentication',
    toggle: true,
  },
  {
    icon: require('../../assets/images/wallet.png'),
    label: 'Payments & Wallets',
    toggle: false,
    screen: 'Wallet',
  },
  {
    icon: require('../../assets/images/password.png'),
    label: 'Password & Security',
    toggle: false,
    screen: 'PasswordSecurity',
  },
];

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerMainContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backContainer}>
          <Back size={20} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Settings</Text>
      </View>
      <View style={styles.container}>
        {settingsData.map((item, index) => (
          <TouchableOpacity
            style={styles.settingRow}
            key={index}
            onPress={() => item.screen && navigation.navigate(item.screen)}>
            <View style={styles.leftSection}>
              <Image source={item.icon} style={styles.iconStyle} />
              <Text style={styles.label}>{item.label}</Text>
            </View>
            {item.toggle && <ToggleSwitch />}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight  : 0,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
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
  mainContainer: {
    paddingHorizontal: 30,
  },
  iconStyle: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
});
