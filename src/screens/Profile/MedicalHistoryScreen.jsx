import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MedicalHistoryScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Allergies</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <Icon name="error-outline" size={20} color="#FF3B30" />
            <Text style={styles.allergyText}>Penicillin</Text>
          </View>
          <View style={styles.row}>
            <Icon name="error-outline" size={20} color="#FF3B30" />
            <Text style={styles.allergyText}>Latex</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Treatment History</Text>
        <View style={styles.historyCard}>
          <View style={styles.historyItem}>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>15 Mar 2024</Text>
              <Text style={styles.time}>2:30 PM</Text>
            </View>
            <View style={styles.treatmentInfo}>
              <Text style={styles.treatmentName}>Facial Treatment</Text>
              <Text style={styles.clinicName}>Beauty Clinic</Text>
              <Text style={styles.notes}>Notes: Regular maintenance treatment</Text>
            </View>
          </View>
          <View style={styles.historyItem}>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>10 Mar 2024</Text>
              <Text style={styles.time}>3:00 PM</Text>
            </View>
            <View style={styles.treatmentInfo}>
              <Text style={styles.treatmentName}>Skin Consultation</Text>
              <Text style={styles.clinicName}>Derma Care Center</Text>
              <Text style={styles.notes}>Notes: Initial consultation</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Medical Conditions</Text>
        <View style={styles.card}>
          <Text style={styles.conditionText}>No known medical conditions</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  allergyText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  historyCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  historyItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dateContainer: {
    width: 80,
    marginRight: 15,
  },
  date: {
    fontSize: 14,
    fontWeight: '500',
    color: '#007AFF',
  },
  time: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
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
  notes: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  conditionText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default MedicalHistoryScreen; 