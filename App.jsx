import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import Navigation from './src/navigation/Navigation';
import SplashScreen from './src/screens/Splash/SplashScreen';
import GetStartedScreen from './src/screens/GetStarted/GetStartedScreen';
//import {firebase} from '@react-native-firebase/app';
//import crashlytics from '@react-native-firebase/crashlytics';

const App = () => {
  //crashlytics().log('added crashlytics');
  //crashlytics().log('App Loaded');

  const [isLoading, setIsLoading] = useState(true);
  const [showGetStarted, setShowGetStarted] = useState(false);

  const handleSplashFinish = () => {
    setIsLoading(false);
    setShowGetStarted(true);
  };

  const handleGetStartedFinish = () => {
    setShowGetStarted(false);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        {isLoading ? (
          <SplashScreen onFinish={handleSplashFinish} />
        ) : showGetStarted ? (
          <GetStartedScreen onFinish={handleGetStartedFinish} />
        ) : (
          <Navigation />
        )}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
   // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: Platform.OS === 'android' ? StatusBar.currentHeight-30 : 0,
  },
});

export default App;
