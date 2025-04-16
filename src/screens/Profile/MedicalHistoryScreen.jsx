import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {FontFamily} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import {Back} from '../../icons';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../../components/Button';

const MedicalHistoryScreen = ({navigation}) => {
  const [openAllergyConcern, setOpenAllergyConcern] = useState(false);
  const [allergyConcern, setAllergyConcern] = useState(null);
  const [allergyConcernItems, setAllergyConcernItems] = useState([
    {label: 'Allergy Free', value: 'Allergy Free'},
    {label: 'Aging', value: 'aging'},
    {label: 'Sensitivity', value: 'sensitivity'},
  ]);
  const [openMedicationConcern, setOpenMedicationConcern] = useState(false);
  const [medicationConcern, setMedicationConcern] = useState(null);
  const [medicationConcernItems, setMedicationConcernItems] = useState([
    {label: `Merformin, Lisinopril, etc`, value: `Merformin, Lisinopril, etc`},
    {label: 'Aging', value: 'aging'},
    {label: 'Sensitivity', value: 'sensitivity'},
  ]);
  const [openMedicalConcern, setOpenMedicalConcern] = useState(false);
  const [medicalConcern, setMedicalConcern] = useState(null);
  const [medicalConcernItems, setMedicalConcernItems] = useState([
    {label: 'Diabetes', value: 'Diabetes'},
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
        <Text style={styles.headerTxt}>Allergy & Medical History</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.mainTxt}>
          Share any past or current medical conditions
        </Text>
        <Text style={styles.heading}>Allergy</Text>
        <Text style={styles.subTxt}>
          Please choose your allergy from the list below.
        </Text>
        <DropDownPicker
          open={openAllergyConcern}
          value={allergyConcern}
          items={allergyConcernItems}
          setOpen={setOpenAllergyConcern}
          setValue={setAllergyConcern}
          setItems={setAllergyConcernItems}
          placeholder="Primary Concerns"
          style={[styles.dropdown]}
          containerStyle={{zIndex: 1000}}
          dropDownContainerStyle={{zIndex: 1000}}
        />
        <Text style={[styles.heading, {marginTop: 23}]}>
          Medical Conditions
        </Text>
        <Text style={styles.subTxt}>
          Share any past or current medical conditions
        </Text>
        <DropDownPicker
          open={openMedicalConcern}
          value={medicalConcern}
          items={medicalConcernItems}
          setOpen={setOpenMedicalConcern}
          setValue={setMedicalConcern}
          setItems={setMedicalConcernItems}
          placeholder="Primary Concerns"
          style={[styles.dropdown]}
          containerStyle={{zIndex: 500}}
          dropDownContainerStyle={{zIndex: 500}}
        />
        <Text style={[styles.heading, {marginTop: 23}]}>
          Current Medications
        </Text>
        <Text style={styles.subTxt}>
          List any medications you are currently taking
        </Text>
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
        <Button title={'Save'} style={{marginTop: 30, borderRadius: 10}} />
      </View>
    </SafeAreaView>
  );
};

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
  mainTxt: {
    marginVertical: 22,
    fontSize: 16,
    fontFamily: FontFamily.regular,
  },
  heading: {
    fontSize: 18,
    fontFamily: FontFamily.medium,
  },
  subTxt: {
    marginVertical: 10,
    fontSize: 14,
    fontFamily: FontFamily.regular,
  },
  dropdown: {
    height: 55,
    borderColor: Colors.bordeColor,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
});

export default MedicalHistoryScreen;
