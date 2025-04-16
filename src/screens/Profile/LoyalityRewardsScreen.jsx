import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import {Back, Star} from '../../icons';
import {Colors} from '../../utils/Colors';
import {FontFamily} from '../../utils/Fonts';
import RewardCard from '../../components/RewardCard';

const rewardPointsData = [
  {
    id: 'refer',
    title: 'Refer a Friend: 50 Points',
    description: 'Earn 50 Points For Every Friend Referred.',
  },
  {
    id: 'upload',
    title: 'Earn 50 Points For Uploading',
    description:
      'Earn 50 Points For Uploading An After-Treatment Photo At Each Stage Of The Journey.',
  },
  {
    id: 'signup',
    title: 'Earn 50 Points By Signing Up',
    description: 'Earn 50 Points By Signing Up For Texts/ Marketing Emails',
  },
];

const LoyalityRewardsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerMainContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backContainer}>
          <Back size={20} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Loyalty & Rewards</Text>
      </View>
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <Text style={styles.mainTxt}>Earn points for scans & uploads</Text>
        <RewardCard />
        <View style={{marginTop: 24}}>
          <Text style={styles.heading}>Earn Rewards Points</Text>
          {rewardPointsData.map(item => (
            <View key={item.id} style={styles.rewardItem}>
              <View style={styles.starNTxt}>
                <Star size={19} />
                <View style={{marginLeft: 21}}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
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
  mainTxt: {
    fontSize: 16,
    fontFamily: FontFamily.regular,
    marginVertical: 24,
  },
  bodyContainer: {
    paddingHorizontal: 30,
  },

  //adasdasdasdad
  starNTxt: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  heading: {
    fontSize: 22,
    fontFamily: FontFamily.semiBold,
    marginBottom: 29,
  },
  rewardItem: {
    marginBottom: 28,
  },
  title: {
    fontSize: 18,
    fontFamily: FontFamily.semiBold,
  },
  description: {
    fontSize: 16,
    fontFamily: FontFamily.regular,
    color: Colors.subTxt,
  },
});

export default LoyalityRewardsScreen;
