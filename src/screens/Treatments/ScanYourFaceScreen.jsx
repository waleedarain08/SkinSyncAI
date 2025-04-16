import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import {Colors} from '../../utils/Colors';
import {FontFamily} from '../../utils/Fonts';
import {Back} from '../../icons';
import Button from '../../components/Button';

const ScanYourFaceScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerMainContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backContainer}>
          <Back size={20} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Scan Your Face</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Face Scan</Text>
        <Text style={styles.subTitle}>
          We’ll scan your face and create a cool model just for you to enhance
          your experience!
        </Text>

        {/* Instructions */}
        <View style={styles.instructions}>
          <InstructionRow
            icon={require('../../assets/images/eyes.png')}
            text="Face forward and make sure your eyes are clearly visible."
          />
          <InstructionRow
            icon={require('../../assets/images/userPink.png')}
            text="Align your face within the oval frame."
          />
          <InstructionRow
            icon={require('../../assets/images/PinkGlasses.png')}
            text="Remove anything that covers your face eg: Eye glasses, Cap etc"
          />
          <InstructionRow
            icon={require('../../assets/images/move.png')}
            text="Move Your Face Inside The Border"
          />
        </View>

        {/* Button */}
        <Button
          title={'Scan Your Face'}
          onPress={() => navigation.navigate('Scanner')}
          style={{width: '100%', marginBottom: 20}}
        />

        {/* Footer */}
        <Text style={styles.powered}>Powered By ARKit</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const InstructionRow = ({icon, text}) => (
  <View style={styles.instructionRow}>
    <Image source={icon} style={styles.icon} />
    <Text style={styles.instructionText}>{text}</Text>
  </View>
);

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
  },
  headerTxt: {
    fontSize: 24,
    fontFamily: FontFamily.semiBold,
    marginLeft: 20,
  },
  mainContainer: {
    paddingHorizontal: 30,
  },
  content: {
    padding: 30,
    alignItems: 'center',
    fontFamily: FontFamily.semiBold,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: FontFamily.medium,
    color: Colors.lightBlack,
    marginBottom: 24,
    alignSelf: 'flex-start',
  },
  instructions: {
    width: '100%',
    marginBottom: 40,
    height: 400,
  },
  instructionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  icon: {
    width: 26,
    height: 26,
    marginRight: 17,
    resizeMode: 'contain',
    tintColor: '#EEA1F0',
  },
  instructionText: {
    flex: 1,
    fontSize: 18,
    fontFamily: FontFamily.medium,
  },
  scanButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 16,
  },
  scanButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  powered: {
    fontSize: 22,
    fontFamily: FontFamily.semiBold,
  },
});

export default ScanYourFaceScreen;
