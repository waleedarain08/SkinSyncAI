import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const GetStartedScreen = ({ onFinish }) => {
  const fadeAnim = new Animated.Value(0);
  const slideAnim = new Animated.Value(50);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration:600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View style={styles.headerContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>SkinSync AI</Text>
          <Text style={styles.subtitle}>Your Personal Skin Care Assistant</Text>
        </View>
        
        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <View style={styles.iconContainer}>
              <Icon name="face-retouching-natural" size={24} color="#4A90E2" />
            </View>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>AI-Powered Skin Analysis</Text>
              <Text style={styles.featureDescription}>Get instant analysis of your skin condition</Text>
            </View>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.iconContainer}>
              <Icon name="healing" size={24} color="#4A90E2" />
            </View>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Personalized Treatment Plans</Text>
              <Text style={styles.featureDescription}>Receive customized skincare recommendations</Text>
            </View>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.iconContainer}>
              <Icon name="trending-up" size={24} color="#4A90E2" />
            </View>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Track Your Progress</Text>
              <Text style={styles.featureDescription}>Monitor your skin health journey</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={onFinish}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Get Started</Text>
          <Icon name="arrow-forward" size={24} color="#4A90E2" style={styles.buttonIcon} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#D9E3F6',
  },
  content: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#000000',
    opacity: 0.9,
    textAlign: 'center',
  },
  featuresContainer: {
    width: '100%',
    marginVertical: 40,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 8,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F0F7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
    //elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#4A90E2',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 10,
  },
  buttonIcon: {
    marginLeft: 5,
  },
});

export default GetStartedScreen; 