import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Back} from '../../icons';
import {Colors} from '../../utils/Colors';
import {FontFamily} from '../../utils/Fonts';
import CustomTextInput from '../../components/CustomTextInput';
import Button from '../../components/Button';

const PersonalDetailsScreen = ({navigation}) => {
  const [openSkinType, setOpenSkinType] = useState(false);
  const [skinType, setSkinType] = useState(null);
  const [skinTypeItems, setSkinTypeItems] = useState([
    {label: 'Oily', value: 'oily'},
    {label: 'Dry', value: 'dry'},
    {label: 'Combination', value: 'combination'},
  ]);

  const [openSkinGoal, setOpenSkinGoal] = useState(false);
  const [skinGoal, setSkinGoal] = useState(null);
  const [skinGoalItems, setSkinGoalItems] = useState([
    {label: 'Glow', value: 'glow'},
    {label: 'Hydration', value: 'hydration'},
    {label: 'Even Tone', value: 'even'},
  ]);

  const [openPrimaryConcern, setOpenPrimaryConcern] = useState(false);
  const [primaryConcern, setPrimaryConcern] = useState(null);
  const [primaryConcernItems, setPrimaryConcernItems] = useState([
    {label: 'Acne', value: 'acne'},
    {label: 'Aging', value: 'aging'},
    {label: 'Sensitivity', value: 'sensitivity'},
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerMainContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backContainer}>
          <Back size={20} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Personal Details</Text>
      </View>
      <ScrollView contentContainerStyle={styles.bodyMain}>
        <View style={styles.profileImg}>
          <Image
            source={require('../../assets/images/tempImg.jpeg')}
            style={styles.profileImg}
          />
          <View style={styles.imgMain}>
            <Image
              source={require('../../assets/images/camera.png')}
              style={styles.cameraStyle}
            />
          </View>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.mainTxt}>Your Profile</Text>
          <Text style={styles.subTxt}>
            Introduce yourself to others in your events.
          </Text>
        </View>
        <View>
          <CustomTextInput
            placeholder="Your Name"
            mainStyle={styles.inputStyle}
          />
          <CustomTextInput
            placeholder="Phone Number"
            keyboardType="phone-pad"
            mainStyle={[styles.inputStyle, {marginVertical: 20}]}
          />
          <CustomTextInput
            placeholder="Email Address"
            keyboardType="email-address"
            mainStyle={styles.inputStyle}
          />
          <CustomTextInput
            placeholder="Location"
            mainStyle={[styles.inputStyle, {marginVertical: 20}]}
          />

          {/* Dropdowns */}
          <View style={[styles.dropdownRow, {zIndex: 3000}]}>
            <DropDownPicker
              open={openSkinType}
              value={skinType}
              items={skinTypeItems}
              setOpen={setOpenSkinType}
              setValue={setSkinType}
              setItems={setSkinTypeItems}
              placeholder="Skin Type +2"
              style={styles.dropdown}
              containerStyle={{flex: 1, marginRight: 10, zIndex: 3000}}
              dropDownContainerStyle={{zIndex: 3000}}
            />
            <DropDownPicker
              open={openSkinGoal}
              value={skinGoal}
              items={skinGoalItems}
              setOpen={setOpenSkinGoal}
              setValue={setSkinGoal}
              setItems={setSkinGoalItems}
              placeholder="Skin Goal +4"
              style={styles.dropdown}
              containerStyle={{flex: 1, zIndex: 2000}}
              dropDownContainerStyle={{zIndex: 2000}}
            />
          </View>

          <DropDownPicker
            open={openPrimaryConcern}
            value={primaryConcern}
            items={primaryConcernItems}
            setOpen={setOpenPrimaryConcern}
            setValue={setPrimaryConcern}
            setItems={setPrimaryConcernItems}
            placeholder="Primary Concerns +3"
            style={[styles.dropdown, {marginVertical: 20}]}
            containerStyle={{zIndex: 1000}}
            dropDownContainerStyle={{zIndex: 1000}}
          />
          <CustomTextInput
            placeholder="Bio"
            multiline
            mainStyle={[styles.inputStyle, {height: 108, marginBottom: 30}]}
            txtInputStyle={{height: 108, marginBottom: 0}}
          />
          <Button title={'Save'} />
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
  },
  headerTxt: {
    fontSize: 24,
    fontFamily: FontFamily.semiBold,
    marginLeft: 20,
  },
  mainContainer: {
    paddingHorizontal: 30,
  },
  profileImg: {
    height: 91,
    width: 91,
    borderRadius: 50,
  },
  imgMain: {
    height: 25,
    width: 25,
    borderRadius: 50,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  cameraStyle: {
    height: 13,
    width: 16,
    resizeMode: 'contain',
  },
  bodyMain: {
    paddingHorizontal: 30,
    paddingBottom:50,
  },
  mainTxt: {
    fontFamily: FontFamily.semiBold,
    fontSize: 30,
    color: Colors.black,
  },
  subTxt: {
    fontFamily: FontFamily.regular,
    fontSize: 18,
    color: Colors.lightColor,
  },
  txtContainer: {
    marginBottom: 22,
  },
  dropdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1000, // Required to manage dropdown overlap
  },
  dropdown: {
    height: 50,
    borderColor: Colors.bordeColor,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
  },
  dropDownContainerStyle: {
    borderColor: Colors.bordeColor,
    zIndex: 999,
  },
});

export default PersonalDetailsScreen;
