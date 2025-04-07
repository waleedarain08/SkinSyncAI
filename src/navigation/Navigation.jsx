import React from 'react';
import { View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FloatingActionButton from '../components/FloatingActionButton';

// Import screens
import HomeScreen from '../screens/Home/HomeScreen';
import TreatmentsScreen from '../screens/Treatments/TreatmentsScreen';
import AppointmentsScreen from '../screens/Appointments/AppointmentsScreen';
import ProgressScreen from '../screens/Progress/ProgressScreen';
import ScannerScreen from '../screens/Scanner/ScannerScreen';

// Import ProfileStack
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Wrap each screen with FAB
const withFAB = (ScreenComponent, navigation) => {
  return (props) => (
    <View style={{ flex: 1 }}>
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
  const navigation = useNavigation();
  
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen 
        name="Scanner" 
        component={ScannerScreen}
        options={{
          headerShown: true,
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
        options={{ title: 'Home',headerShown:false}} 
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
        options={{ title: 'Treatments' }} 
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
        options={{ title: 'Appointments' }} 
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
        options={{ title: 'Progress' }} 
      />
    </Stack.Navigator>
  );
};

// Tab navigator component
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'face-retouching-natural' : 'face';
              break;
            case 'Treatments':
              iconName = focused ? 'healing' : 'medical-services';
              break;
            case 'Appointments':
              iconName = focused ? 'event-available' : 'event';
              break;
            case 'Progress':
              iconName = focused ? 'insights' : 'trending-up';
              break;
            case 'Profile':
              iconName = focused ? 'person-pin' : 'person-outline';
              break;
            default:
              iconName = 'circle';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingVertical: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          paddingBottom: 5,
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{ 
          headerShown: false,
        }} 
      />
      <Tab.Screen 
        name="Treatments" 
        component={TreatmentsStack} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Appointments" 
        component={AppointmentsStack} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Progress" 
        component={ProgressStack} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileStack} 
        options={{ headerShown: false }} 
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

export default Navigation; 