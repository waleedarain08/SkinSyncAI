import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Back} from '../../icons';
import {Colors} from '../../utils/Colors';
import {FontFamily} from '../../utils/Fonts';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button';

const PasswordSecurityScreen = ({navigation}) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [secureOld, setSecureOld] = useState(true);
  const [secureNew, setSecureNew] = useState(true);
  const [secureConfirm, setSecureConfirm] = useState(true);

  const validatePassword = password => {
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[@#$%^&*()_+!~\-=`{}[\]:;"'<>,.?/\\|]/.test(password);
    return minLength && hasUpper && hasLower && hasDigit && hasSpecial;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerMainContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backContainer}>
          <Back size={20} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Password & Security</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Old Password */}
        <Text style={styles.label}>Old Password</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            secureTextEntry={secureOld}
            value={oldPassword}
            onChangeText={setOldPassword}
            placeholder="**********"
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity onPress={() => setSecureOld(!secureOld)}>
            <Icon
              name={secureOld ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color="#000"
            />
          </TouchableOpacity>
        </View>

        {/* New Password */}
        <Text style={styles.label}>New Password</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            secureTextEntry={secureNew}
            value={newPassword}
            onChangeText={setNewPassword}
            placeholder="**********"
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity onPress={() => setSecureNew(!secureNew)}>
            <Icon
              name={secureNew ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color="#000"
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <Text style={styles.label}>New Password</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            secureTextEntry={secureConfirm}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="**********"
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity onPress={() => setSecureConfirm(!secureConfirm)}>
            <Icon
              name={secureConfirm ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color="#000"
            />
          </TouchableOpacity>
        </View>

        {/* Password Rules */}
        <Text style={styles.rulesTitle}>
          Password must be at least 8 characters and should include:
        </Text>
        <Text style={styles.rule}>• 1 uppercase letter (A-Z)</Text>
        <Text style={styles.rule}>• 1 lowercase letter (a-z)</Text>
        <Text style={styles.rule}>• 1 number (0–9)</Text>
        <Text style={styles.rule}>• 1 special character (-@#$%^&*_=+?.)</Text>

        {/* Submit Button */}
        <Button title={'Submit'} style={{marginTop: 50}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PasswordSecurityScreen;

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
  bodyContainer: {
    paddingHorizontal: 30,
  },
  scrollContainer: {
    padding: 24,
    backgroundColor: Colors.white,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: FontFamily.semiBold,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.lightBorderColor,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  rulesTitle: {
    fontSize: 16,
    fontFamily: FontFamily.regular,
    marginBottom: 8,
    color: Colors.lightBlack,
  },
  rule: {
    fontSize: 16,
    fontFamily: FontFamily.regular,
    color: Colors.lightBlack,
    marginBottom: 4,
  },
});
