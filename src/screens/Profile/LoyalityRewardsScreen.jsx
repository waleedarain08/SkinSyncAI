import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoyalityRewardsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.pointsCard}>
        <Text style={styles.pointsLabel}>Total Points</Text>
        <Text style={styles.pointsValue}>2,500</Text>
        <Text style={styles.pointsSubtext}>Points expire on Dec 31, 2024</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Available Rewards</Text>
        <View style={styles.rewardCard}>
          <Icon name="card-giftcard" size={24} color="#007AFF" />
          <View style={styles.rewardInfo}>
            <Text style={styles.rewardTitle}>$50 Treatment Voucher</Text>
            <Text style={styles.rewardPoints}>2,000 points</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#ccc" />
        </View>
        <View style={styles.rewardCard}>
          <Icon name="local-offer" size={24} color="#007AFF" />
          <View style={styles.rewardInfo}>
            <Text style={styles.rewardTitle}>20% Off Next Visit</Text>
            <Text style={styles.rewardPoints}>1,500 points</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#ccc" />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How to Earn Points</Text>
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Icon name="spa" size={20} color="#666" />
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>Treatment Visit</Text>
              <Text style={styles.infoSubtext}>Earn 100 points per visit</Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <Icon name="shopping-bag" size={20} color="#666" />
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>Product Purchase</Text>
              <Text style={styles.infoSubtext}>Earn 1 point per $1 spent</Text>
            </View>
          </View>
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
  pointsCard: {
    backgroundColor: '#007AFF',
    padding: 20,
    alignItems: 'center',
  },
  pointsLabel: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  pointsValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  pointsSubtext: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
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
  rewardCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rewardInfo: {
    flex: 1,
    marginLeft: 15,
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  rewardPoints: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  infoCard: {
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
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoText: {
    marginLeft: 15,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  infoSubtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});

export default LoyalityRewardsScreen; 