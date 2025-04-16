import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FontFamily} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import {Bell, CircleCheck} from '../../icons';
import CustomTextInput from '../../components/CustomTextInput';
import ProgressCard from '../../components/ProgressCard';

const ProgressScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.safeBack}>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Hello, Burak!</Text>
            <Text style={styles.subText}>
              Your journey to radiant skin starts now.
            </Text>
          </View>
          <TouchableOpacity style={styles.bellBack}>
            <Bell size={21} />
          </TouchableOpacity>
        </View>
        <View style={styles.bodyContainer}>
          <CustomTextInput
            placeholder="Search Treatment Progress"
            showSearchIcon={true}
            mainStyle={{height: 44}}
            txtInputStyle={{borderColor: Colors.black}}
            onSearchPress={() => console.log('Search pressed')}
          />
          <View style={styles.btnMain}>
            <TouchableOpacity style={styles.btnStyle}>
              <CircleCheck size={18} />
              <Text style={styles.btnText}>Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btnStyle, {backgroundColor: Colors.black}]}>
              <Image
                source={require('../../assets/images/whiteProgress.png')}
                style={{width: 18, height: 18}}
              />
              <Text style={[styles.btnText, {color: Colors.white}]}>
                Ongoing
              </Text>
            </TouchableOpacity>
          </View>
          <ProgressCard
            image={require('../../assets/images/dermalFiller.png')}
          />
          <ProgressCard
            image={require('../../assets/images/dermalFiller2.png')}
            mainStyle={{marginVertical: 22}}
            title="Dermal Fillers - Lips"
            sessions="6"
            percent="40"
            time="2 Days"
          />
          <ProgressCard
            image={require('../../assets/images/dermalFiller3.png')}
            title="Laser Treatment - Cheeks"
            percent="57"
            time="4 Days"
            mainStyle={{marginBottom: 50}}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0,
    backgroundColor: Colors.white,
  },
  header: {
    paddingHorizontal: 30,
    paddingBottom: 22,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
    fontFamily: FontFamily.semiBold,
    marginBottom: 4,
  },
  subText: {
    fontSize: 16,
    color: Colors.lightBlack,
    fontFamily: FontFamily.regular,
  },
  bellBack: {
    height: 44,
    width: 44,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.arrowBack,
  },
  safeBack: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bodyContainer: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  btnStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: Colors.arrowBack,
    height: 44,
    width: '48%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 22,
  },
  btnText: {
    fontSize: 18,
    fontFamily: FontFamily.medium,
  },
});

export default ProgressScreen;
