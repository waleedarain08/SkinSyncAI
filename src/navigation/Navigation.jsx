import React from 'react';
import {Image, Platform, StyleSheet, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FloatingActionButton from '../components/FloatingActionButton';

// Import screens
import HomeScreen from '../screens/Home/HomeScreen';
import LoyalityRewardsScreen from '../screens/Profile/LoyalityRewardsScreen';
import TreatmentsScreen from '../screens/Treatments/TreatmentsScreen';
import AppointmentsScreen from '../screens/Appointments/AppointmentsScreen';
import ProgressScreen from '../screens/Progress/ProgressScreen';
import ScannerScreen from '../screens/Scanner/ScannerScreen';
import NotificationScreen from '../screens/Notification/NotificationScreen';
import EnableNotification from '../screens/Notification/EnableNotification';
import ContunueWithEmailScreen from '../screens/Email/ContunueWithEmailScreen';
import GetStartedScreen from '../screens/GetStarted/GetStartedScreen';
import SplashScreen from '../screens/Splash/SplashScreen';
import EnterCodeScreen from '../screens/Email/EnterCodeScreen';
import OnbordingScreen from '../screens/Onboarding/OnbordingScreen';

// Import ProfileStack
import ProfileStack from './ProfileStack';
import CreateProfileScreen from '../screens/Profile/CreateProfileScreen';

import {Colors} from '../utils/Colors';
import SettingScreen from '../screens/Profile/SettingScreen';
import PasswordSecurityScreen from '../screens/Profile/PasswordSecurityScreen';
import PaymentWalletScreen from '../screens/Profile/PaymentWalletScreen';
import BiomatricScreen from '../screens/Profile/BiomatricScreen';
import BookAppointmentScreen from '../screens/Treatments/BookAppointmentScreen';
import ClinicDetailsScreen from '../screens/Treatments/ClinicDetailsScreen';
import BioMatricScannerScreen from '../screens/Profile/BioMatricScannerScreen';
import BookingDateScreen from '../screens/Treatments/BookingDateScreen';
import ARModalFaceScreen from '../screens/Treatments/ARModalFaceScreen';
import ReadyAppointmentScreen from '../screens/Treatments/ReadyAppointmentScreen';
import AdditionalInformationScreen from '../screens/Treatments/AdditionalInformationScreen';
import ScanYourFaceScreen from '../screens/Treatments/ScanYourFaceScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Wrap each screen with FAB
const withFAB = (ScreenComponent, navigation) => {
  return props => (
    <View style={{flex: 1}}>
      <ScreenComponent {...props} />
      <FloatingActionButton
        onPress={() => {
          navigation.navigate('Scanner');
        }}
      />
    </View>
  );
};

// Main stack navigator that includes both tab navigator and scanner screen
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="Email" component={ContunueWithEmailScreen} />
      <Stack.Screen name="Code" component={EnterCodeScreen} />
      <Stack.Screen name="Onboarding" component={OnbordingScreen} />
      <Stack.Screen name="createProfile" component={CreateProfileScreen} />
      <Stack.Screen name="enableNotification" component={EnableNotification} />
      <Stack.Screen name="notification" component={NotificationScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen
        name="PasswordSecurity"
        component={PasswordSecurityScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Wallet"
        component={PaymentWalletScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Biometric"
        component={BiomatricScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="BookAppointment" component={BookAppointmentScreen} />
      <Stack.Screen name="ClinicDetails" component={ClinicDetailsScreen} />
      <Stack.Screen
        name="BioMatricScanner"
        component={BioMatricScannerScreen}
      />
      <Stack.Screen name="BookingDate" component={BookingDateScreen} />
      <Stack.Screen name="ARModalFace" component={ARModalFaceScreen} />
      <Stack.Screen
        name="ReadyAppointment"
        component={ReadyAppointmentScreen}
      />
      <Stack.Screen
        name="AdditionalInformation"
        component={AdditionalInformationScreen}
      />
       <Stack.Screen
        name="ScanYourFace"
        component={ScanYourFaceScreen}
      />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{
          headerShown: false,
          headerTitle: 'Face Scanner',
          presentation: 'fullScreenModal',
        }}
      />
    </Stack.Navigator>
  );
};

// Stack navigators for each tab
const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={withFAB(HomeScreen, navigation)}
        options={{title: 'Home', headerShown: false}}
      />
       <Stack.Screen
        name="LoyaltyRewards"
        component={LoyalityRewardsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TreatmentsStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TreatmentsScreen"
        component={withFAB(TreatmentsScreen, navigation)}
        options={{title: 'Treatments', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AppointmentsStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AppointmentsScreen"
        component={withFAB(AppointmentsScreen, navigation)}
        options={{title: 'Appointments', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ProgressStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProgressScreen"
        component={withFAB(ProgressScreen, navigation)}
        options={{title: 'Progress', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const getTabIcon = (routeName, focused) => {
  const icons = {
    Home: {
      focused: require('../assets/images/homeFocused.png'),
      unfocused: require('../assets/images/home.png'),
    },
    Treatments: {
      focused: require('../assets/images/treatmentFocused.png'),
      unfocused: require('../assets/images/treatment.png'),
    },
    Appointments: {
      focused: require('../assets/images/appointmentFocused.png'),
      unfocused: require('../assets/images/appointment.png'),
    },
    Progress: {
      focused: require('../assets/images/progressFocused.png'),
      unfocused: require('../assets/images/progress.png'),
    },
    Profile: {
      focused: require('../assets/images/profileFocused.png'),
      unfocused: require('../assets/images/profileIcon.png'),
    },
  };

  return focused ? icons[routeName].focused : icons[routeName].unfocused;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => (
          <Image
            source={getTabIcon(route.name, focused)}
            style={styles.icon}
            resizeMode="contain"
          />
        ),
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingTop: 5,
          height: Platform.OS === 'ios' ? 70 : 60, // Increase height for iOS
        },
        tabBarLabelStyle: {
          fontSize: 9,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Treatments"
        component={TreatmentsStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Appointments"
        component={AppointmentsStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default Navigation;
