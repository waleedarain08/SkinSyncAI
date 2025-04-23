import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import ProfileScreen from '../screens/Profile/ProfileScreen';
import PersonalDetailsScreen from '../screens/Profile/PersonalDetailsScreen';
import SavedTreatmentsScreen from '../screens/Profile/SavedTreatmentsScreen';
import LoyalityRewardsScreen from '../screens/Profile/LoyalityRewardsScreen';
import MedicalHistoryScreen from '../screens/Profile/MedicalHistoryScreen';
import TreatmentReceiptScreen from '../screens/Profile/TreatmentReceiptScreen';

const Stack = createStackNavigator();

// Wrap ProfileScreen with FAB
const ProfileScreenWithFAB = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <ProfileScreen />
      {/* <FloatingActionButton 
        onPress={() => {
          navigation.navigate('Scanner');
        }}
      /> */}
    </View>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: '#eee',
        },
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: '600',
        },
        headerTintColor: '#333',
      }}>
      <Stack.Screen
        name="ProfileMain"
        component={ProfileScreenWithFAB}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PersonalDetails"
        component={PersonalDetailsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SavedTreatments"
        component={SavedTreatmentsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoyaltyRewards"
        component={LoyalityRewardsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MedicalHistory"
        component={MedicalHistoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TreatmentReceipt"
        component={TreatmentReceiptScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
console.log('ProfileStack');

export default ProfileStack;
