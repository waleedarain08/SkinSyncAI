import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../utils/Colors';
import {
  Bookmark,
  History,
  Logout,
  Medal,
  PersonDetail,
  Reciept,
  Setting,
  Star,
} from '../../icons';
import {FontFamily} from '../../utils/Fonts';

const menuItems = [
  {
    title: 'Personal Details',
    icon: <PersonDetail size={24} />,
    screen: 'PersonalDetails',
  },
  {
    title: 'Saved Treatments',
    icon: <Bookmark size={24} />,
    screen: 'SavedTreatments',
  },
  {
    title: 'Loyalty & Rewards',
    icon: <Medal size={24} />,
    screen: 'LoyaltyRewards',
  },
  {
    title: 'Medical History',
    icon: <History size={24} />,
    screen: 'MedicalHistory',
  },
  {
    title: 'Treatment Receipts',
    icon: <Reciept size={24} />,
    screen: 'MedicalHistory',
  },
  {title: 'Logout', icon: <Logout size={24} />, screen: null},
];

const ProfileScreen = () => {
  const navigation = useNavigation();
  const profileImage = require('../../assets/images/tempImg.jpeg'); // Change to null if no image
  const progress = 0.75; // Set progress from 0 to 1 (e.g., 0.75 means 75% complete)

  const handleMenuPress = item => {
    if (item.screen) {
      navigation.navigate(item.screen);
    } else if (item.title === 'Logout') {
      Alert.alert(
        'Logout',
        'Are you sure you want to logout?',
        [
          {text: 'Cancel', style: 'cancel'},
          {
            text: 'Logout',
            style: 'destructive',
            onPress: () => console.log('Logout pressed'),
          },
        ],
        {cancelable: true},
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.safeStyle}>
        <View style={styles.profileHeader}>
          <View style={styles.profileHeaderTop}>
            <Text style={styles.profileTitle}>My Profile</Text>
            <TouchableOpacity
              onPress={() => console.log('Settings pressed')}
              style={styles.settingBack}>
              <Setting size={22} />
            </TouchableOpacity>
          </View>

          {/* Profile Section with Circular Progress */}
          <View style={styles.profileInfo}>
            <View style={styles.progressCircle}>
              <View
                style={[
                  styles.progressFill,
                  {transform: [{rotate: `${progress * 90}deg`}]},
                ]}
              />
              <View style={styles.imageContainer}>
                {profileImage ? (
                  <Image source={profileImage} style={styles.profileImage} />
                ) : (
                  <View style={styles.placeholder}>
                    <Text style={styles.placeholderText}>No Image</Text>
                  </View>
                )}
              </View>
            </View>

            <View style={styles.profileText}>
              <Text style={styles.profileName}>Lizzy Johnson</Text>
              <View style={styles.starTxt}>
                <Star size={17} />
                <Text style={styles.profileEmail}>214 Points Earned!</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map(item => (
            <TouchableOpacity
              key={item.title}
              style={styles.menuItem}
              onPress={() => handleMenuPress(item)}>
              <View style={styles.menuItemContent}>
                {item.icon}
                <Text style={styles.menuItemText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0,
  },
  safeStyle: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  profileHeader: {
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingHorizontal: 30,
    paddingBottom: 26,
  },
  profileHeaderTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileTitle: {
    fontSize: 26,
    fontFamily: FontFamily.semiBold,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 5,
    borderColor: Colors.arrowBack,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  progressFill: {
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 5,
    borderColor: Colors.pink,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  placeholder: {
    width: 80,
    height: 80,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  placeholderText: {
    color: '#fff',
    fontSize: 14,
  },
  profileText: {
    flex: 1,
    marginLeft: 15,
  },
  profileName: {
    fontSize: 28,
    fontFamily: FontFamily.semiBold,
  },
  profileEmail: {
    fontSize: 14,
    fontFamily: FontFamily.regular,
    color: Colors.lightBlack,
    marginLeft: 9,
  },
  starTxt: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuContainer: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 17,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 22,
    fontFamily: FontFamily.medium,
    marginLeft: 15,
  },
  settingBack: {
    height: 44,
    width: 44,
    borderRadius: 5,
    backgroundColor: Colors.arrowBack,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
