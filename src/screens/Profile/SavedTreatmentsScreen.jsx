import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const treatments = [
  {
    id: 1,
    name: 'Facial Treatment',
    clinic: 'Beauty Clinic',
    date: 'Last visited: 15 Mar 2024',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 2,
    name: 'Skin Care Routine',
    clinic: 'Derma Care Center',
    date: 'Last visited: 10 Mar 2024',
    image: 'https://via.placeholder.com/100',
  },
];

const SavedTreatmentsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {treatments.map(treatment => (
        <TouchableOpacity key={treatment.id} style={styles.treatmentCard}>
          <Image source={{ uri: treatment.image }} style={styles.treatmentImage} />
          <View style={styles.treatmentInfo}>
            <Text style={styles.treatmentName}>{treatment.name}</Text>
            <Text style={styles.clinicName}>{treatment.clinic}</Text>
            <Text style={styles.date}>{treatment.date}</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  treatmentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  treatmentImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  treatmentInfo: {
    flex: 1,
  },
  treatmentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  clinicName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});

export default SavedTreatmentsScreen; 