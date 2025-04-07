import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const menuItems = [
  { title: 'Personal Details', icon: 'person', screen: 'PersonalDetails' },
  { title: 'Saved Treatments', icon: 'favorite', screen: 'SavedTreatments' },
  { title: 'Loyality & Rewards', icon: 'card-giftcard', screen: 'LoyalityRewards' },
  { title: 'Medical History', icon: 'medical-services', screen: 'MedicalHistory' },
  { title: 'Logout', icon: 'logout', screen: null }
];

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleMenuPress = (item) => {
    if (item.screen) {
      navigation.navigate(item.screen);
    } else if (item.title === 'Logout') {
      Alert.alert(
        'Logout',
        'Are you sure you want to logout?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Logout',
            style: 'destructive',
            onPress: () => console.log('Logout pressed'),
          },
        ],
        { cancelable: true }
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profileHeaderTop}>
          <Text style={styles.profileTitle}>My Profile</Text>
          <TouchableOpacity onPress={() => console.log('Settings pressed')}>
            <Icon name="settings" size={24} color="#333" />
          </TouchableOpacity>
        </View>
        <View style={styles.profileInfo}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/100' }} 
            style={styles.profileImage}
          />
          <View style={styles.profileText}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileEmail}>john.doe@example.com</Text>
          </View>
        </View>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity 
            key={item.title}
            style={[
              styles.menuItem,
              index !== menuItems.length - 1 && styles.menuItemBorder
            ]}
            onPress={() => handleMenuPress(item)}
          >
            <View style={styles.menuItemContent}>
              <Icon name={item.icon} size={24} color="#666" />
              <Text style={styles.menuItemText}>{item.title}</Text>
            </View>
            <Icon name="chevron-right" size={24} color="#ccc" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  profileHeader: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileHeaderTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  profileText: {
    flex: 1,
  },
  profileName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
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
  menuItemBorder: {
    borderBottomWidth: 0.4,
    borderBottomColor: '#f0f0f0',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
});

export default ProfileScreen; 