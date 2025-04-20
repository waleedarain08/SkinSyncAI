import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {FontFamily} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import Button from '../../components/Button';

const AdditionalInformationScreen = ({navigation}) => {
  const [choice, setSelectedChoice] = useState('no');
  const [medications, setMedications] = useState('');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      {/* Header */}
      <Text style={styles.heading}>
        Please provide the additional information needed to send to your
        Injector.
      </Text>
      <ScrollView>
        <View style={{paddingHorizontal: 30}}>
          <View>
            <Text style={[styles.lastQuestion, {marginTop: 0}]}>
              Have you consumed alcohol in the last 24-48 hours?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 16,
              }}>
              <TouchableOpacity
                onPress={() => setSelectedChoice('')}
                style={[
                  styles.radioBtn,
                  {
                    borderWidth: choice === 'yes' ? 5 : 3,
                    borderColor:
                      choice === 'yes'
                        ? Colors.progressbarColor
                        : Colors.radioBtnColor,
                  },
                ]}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: FontFamily.semiBold,
                  textAlign: 'left',
                }}>
                {`Yes `}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <TouchableOpacity
                onPress={() => setSelectedChoice('')}
                style={[
                  styles.radioBtn,
                  {
                    borderWidth: choice === 'no' ? 5 : 3,
                    borderColor:
                      choice === 'no'
                        ? Colors.progressbarColor
                        : Colors.radioBtnColor,
                  },
                ]}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: FontFamily.semiBold,
                  textAlign: 'left',
                }}>
                {`No`}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.lastQuestion}>Do you smoke ?</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 16,
              }}>
              <TouchableOpacity
                onPress={() => setSelectedChoice('')}
                style={[
                  styles.radioBtn,
                  {
                    borderWidth: choice === 'yes' ? 5 : 3,
                    borderColor:
                      choice === 'yes'
                        ? Colors.progressbarColor
                        : Colors.radioBtnColor,
                  },
                ]}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: FontFamily.semiBold,
                  textAlign: 'left',
                }}>
                {`Yes `}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <TouchableOpacity
                onPress={() => setSelectedChoice('')}
                style={[
                  styles.radioBtn,
                  {
                    borderWidth: choice === 'no' ? 5 : 3,
                    borderColor:
                      choice === 'no'
                        ? Colors.progressbarColor
                        : Colors.radioBtnColor,
                  },
                ]}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: FontFamily.semiBold,
                  textAlign: 'left',
                }}>
                {`No`}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.lastQuestion}>
              previous aesthetic treatments? Please specify (Botox, fillers,
              laser, microneedling)
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 16,
              }}>
              <TouchableOpacity
                onPress={() => setSelectedChoice('')}
                style={[
                  styles.radioBtn,
                  {
                    borderWidth: choice === 'yes' ? 5 : 3,
                    borderColor:
                      choice === 'yes'
                        ? Colors.progressbarColor
                        : Colors.radioBtnColor,
                  },
                ]}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: FontFamily.semiBold,
                  textAlign: 'left',
                }}>
                {`Yes ( Please Specify) `}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <TouchableOpacity
                onPress={() => setSelectedChoice('')}
                style={[
                  styles.radioBtn,
                  {
                    borderWidth: choice === 'no' ? 5 : 3,
                    borderColor:
                      choice === 'no'
                        ? Colors.progressbarColor
                        : Colors.radioBtnColor,
                  },
                ]}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: FontFamily.semiBold,
                  textAlign: 'left',
                }}>
                {`No`}
              </Text>
            </View>
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder="Describe The Medications You're Using Currently"
                placeholderTextColor="#555"
                multiline
                value={medications}
                onChangeText={setMedications}
              />
            </View>
          </View>
          <View>
            <Text style={styles.lastQuestion}>
              Do You Have Any Allergies To Lidocaine Or Other Anesthetic?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 16,
              }}>
              <TouchableOpacity
                onPress={() => setSelectedChoice('')}
                style={[
                  styles.radioBtn,
                  {
                    borderWidth: choice === 'yes' ? 5 : 3,
                    borderColor:
                      choice === 'yes'
                        ? Colors.progressbarColor
                        : Colors.radioBtnColor,
                  },
                ]}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: FontFamily.semiBold,
                  textAlign: 'left',
                }}>
                {`Yes ( Please Specify) `}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <TouchableOpacity
                onPress={() => setSelectedChoice('')}
                style={[
                  styles.radioBtn,
                  {
                    borderWidth: choice === 'no' ? 5 : 3,
                    borderColor:
                      choice === 'no'
                        ? Colors.progressbarColor
                        : Colors.radioBtnColor,
                  },
                ]}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: FontFamily.semiBold,
                  textAlign: 'left',
                }}>
                {`No`}
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Describe The Medications You're Using Currently"
              placeholderTextColor="#555"
              multiline
              value={medications}
              onChangeText={setMedications}
            />
          </View>
        </View>
        <Button
          title={'Submit'}
          style={{marginVertical: 20, marginHorizontal: 30}}
          onPress={() => navigation.navigate('ScanYourFace')}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            fontFamily: FontFamily.semiBold,
            textDecorationLine: 'underline',
          }}>
          Not Now
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdditionalInformationScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontFamily: FontFamily.semiBold,
    paddingBottom: 28,
    borderBottomColor: Colors.lightBorderColor,
    borderBottomWidth: 1,
    paddingHorizontal: 30,
    marginBottom: 24,
  },
  radioBtn: {
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: Colors.white,
    marginRight: 13,
    borderWidth: 3,
    borderColor: Colors.radioBtnColor,
  },
  lastQuestion: {
    fontSize: 22,
    fontFamily: FontFamily.semiBold,
    marginTop: 20,
  },
  container: {},
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    fontSize: 14,
    height: 81,
    padding: 10,
    color: '#000',
    elevation: 3, // For subtle shadow on Android
    shadowColor: '#000', // For iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
});
