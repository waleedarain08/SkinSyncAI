import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
// import {ViroARSceneNavigator} from '@reactvision/react-viro';
import Slider from 'react-native-sliders';
import {FontFamily} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import {Back} from '../../icons';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../../components/Button';
// import ARScene from './ARScene';

const ARModalFaceScreen = ({navigation, route}) => {
  const {photoPath} = route.params;
  const [syringes, setSyringes] = useState(1);
  const [isARView, setIsARView] = useState(false);
  const [openMedicationConcern, setOpenMedicationConcern] = useState(false);
  const [medicationConcern, setMedicationConcern] = useState(null);
  const [medicationConcernItems, setMedicationConcernItems] = useState([
    {label: `Merformin, Lisinopril, etc`, value: `Merformin, Lisinopril, etc`},
    {label: 'Aging', value: 'aging'},
    {label: 'Sensitivity', value: 'sensitivity'},
  ]);

  const toggleARView = () => {
    setIsARView(!isARView);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.headerMainContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backContainer}>
          <Back size={20} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>AR Face Model Preview</Text>
      </View>

      {isARView ? (
        <View style={styles.arContainer}>
          {/* <ViroARSceneNavigator
            autofocus={true}
            initialScene={{
              scene: () => <ARScene photoPath={photoPath} syringes={syringes} />,
            }}
            style={styles.arView}
          /> */}
        </View>
      ) : (
        <View style={styles.imageContainer}>
          <View>
            <Image
              source={{uri: `file://${photoPath}`}}
              style={styles.image}
            />
            <Text style={styles.afterTxt}>After</Text>
            <TouchableOpacity 
              onPress={toggleARView}
              style={styles.maskBack}>
              <Image
                source={require('../../assets/images/maskIcon.png')}
                style={styles.maskImg}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.overlayText}>
            See How {syringes} Syringe{syringes > 1 ? 's' : ''} Will Look On Your
            Under Eyes
          </Text>
        </View>
      )}

      <View style={styles.accuracyContainer}>
        <View style={styles.progressContainer}>
          <Image
            source={require('../../assets/images/progressContainer.png')}
            style={styles.progressImage}
          />
          <View>
            <Text style={styles.accuracyText}>Accuracy Rate</Text>
            <Text style={styles.subTxt}>
              This score is based on your Face analysis
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.treatmentTxt}>Treatment Selection</Text>
      <View style={styles.scrollStyle}>
        <ScrollView
          contentContainerStyle={styles.btnMain}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={[styles.btnStyle, {marginHorizontal: 5}]}>
            <Image
              source={require('../../assets/images/skinCare.png')}
              style={{width: 18, height: 18}}
            />
            <Text style={[styles.btnText]}>Botox</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnStyle, {marginHorizontal: 5}]}>
            <Image
              source={require('../../assets/images/injection.png')}
              style={{width: 18, height: 18}}
            />
            <Text style={styles.btnText}>Dermal Filler </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnStyle}>
            <Image
              source={require('../../assets/images/laserImg.png')}
              style={{width: 18, height: 18}}
            />
            <Text style={styles.btnText}>Laser Treatment </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={{paddingHorizontal: 20, marginBottom: 25}}>
        <Text style={styles.areaTxt}>Area Selection</Text>
        <DropDownPicker
          open={openMedicationConcern}
          value={medicationConcern}
          items={medicationConcernItems}
          setOpen={setOpenMedicationConcern}
          setValue={setMedicationConcern}
          setItems={setMedicationConcernItems}
          placeholder="Primary Concerns"
          style={[styles.dropdown]}
          containerStyle={{zIndex: 100}}
          dropDownContainerStyle={{zIndex: 100}}
        />
      </View>
      <View style={styles.sliderSection}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.label}>Adjustable Parameters: </Text>
          <Text style={styles.syringeTxt}>
            {syringes} Syringe {syringes > 1 ? 's' : ''}
          </Text>
        </View>
        <Slider
          value={syringes}
          minimumValue={1}
          maximumValue={5}
          step={1}
          onValueChange={value => setSyringes(value[0])}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          minimumTrackTintColor="#00BFFF"
          maximumTrackTintColor="#ddd"
          containerStyle={styles.slider}
        />
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => setSyringes(1)}>
          <Text style={styles.resetText}>Reset Default</Text>
        </TouchableOpacity>
        <Button
          title={'Update'}
          style={{width: 150}}
          onPress={() => {
            navigation.navigate('ReadyAppointment');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ARModalFaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: Colors.anotherPink,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 130,
  },
  arImage: {
    transform: [
      { scale: 1.2 },
      { rotate: '5deg' },
      { perspective: 1000 }
    ],
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  overlayText: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: Colors.black,
    color: '#fff',
    padding: 6,
    borderRadius: 50,
    fontSize: 14,
    fontFamily: FontFamily.semiBold,
  },
  accuracyContainer: {
    marginVertical: 18,
    paddingHorizontal: 20,
  },
  accuracyText: {
    fontFamily: FontFamily.semiBold,
    fontSize: 20,
  },
  label: {
    fontSize: 18,
    fontFamily: FontFamily.semiBold,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  track: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ddd',
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: Colors.lightBorderColor,
    marginTop: 15,
  },
  resetText: {
    fontFamily: FontFamily.semiBold,
    fontSize: 22,
    textDecorationLine: 'underline',
  },
  updateButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  updateText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  //ok

  safeContainer: {
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
  },
  headerTxt: {
    fontSize: 24,
    fontFamily: FontFamily.semiBold,
    marginLeft: 20,
  },
  mainContainer: {
    paddingHorizontal: 30,
  },
  maskImg: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  afterTxt: {
    position: 'absolute',
    top: 22,
    left: -40,
    fontSize: 20,
    fontFamily: FontFamily.semiBold,
  },
  maskBack: {
    position: 'absolute',
    top: 22,
    right: -40,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    width: 36,
    borderRadius: 36,
  },
  progressImage: {
    height: 48,
    width: 48,
  },
  subTxt: {
    fontSize: 16,
    fontFamily: FontFamily.regular,
    color: Colors.lightBlack,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 18,
    borderBottomColor: Colors.lightBorderColor,
    borderBottomWidth: 1,
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
    paddingHorizontal: 20,
    height: 44,
  },
  btnText: {
    fontSize: 18,
    fontFamily: FontFamily.medium,
  },
  treatmentTxt: {
    fontSize: 18,
    fontFamily: FontFamily.semiBold,
    marginBottom: 10,
    marginHorizontal: 30,
  },
  sliderSection: {
    paddingHorizontal: 20,
  },
  scrollStyle: {
    marginBottom: 18,
  },
  areaTxt: {
    fontSize: 18,
    fontFamily: FontFamily.semiBold,
    marginBottom: 10,
  },
  dropdown: {
    height: 44,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  syringeTxt: {
    fontSize: 14,
    fontFamily: FontFamily.medium,
  },
  arContainer: {
    flex: 1,
    height: Dimensions.get('window').height * 0.6,
  },
  arView: {
    flex: 1,
  },
  arText: {
    fontFamily: FontFamily.semiBold,
    fontSize: 30,
    color: Colors.white,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
