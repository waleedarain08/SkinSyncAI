import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FontFamily} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import {Bell, Forward, Star} from '../../icons';
import LinearGradient from 'react-native-linear-gradient';
import {Circle} from 'react-native-progress';
import TreatmentCard from '../../components/TreatmentCard';
import DiscountCard from '../../components/DicountCard';

const HomeScreen = () => {
  const progress = 0.72; // Progress value (0 to 1)
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Hello, Burak!</Text>
            <Text style={styles.subText}>
              Your journey to radiant skin starts now.
            </Text>
          </View>
          <TouchableOpacity style={styles.bellBack}>
            <Bell size={21} />
          </TouchableOpacity>
        </View>
        <View style={styles.bodyMain}>
          <LinearGradient
            colors={['#EEA1F099', '#88E3FB99']}
            style={styles.card}>
            <View style={styles.progressContainer}>
              <Circle
                size={112}
                progress={progress}
                thickness={8}
                color={Colors.pink}
                unfilledColor={Colors.white}
                showsText={false} // disable built-in text
              />
              <View style={styles.progressTextContainer}>
                <Text style={styles.progressText}>{`${Math.round(
                  progress * 100,
                )}%`}</Text>
                <Text style={styles.pointsText}>{`Points Earned!`}</Text>
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Loyalty Rewards</Text>
              <Text style={[styles.subtitle, {width: '95%'}]}>
                Earn up to $250/month!
              </Text>
              <TouchableOpacity style={styles.button}>
                <Star color={Colors.white} size={14} />
                <Text style={styles.buttonText}>Redeem Points</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
          <View>
            <View style={styles.nextAppoinment}>
              <Text style={styles.nextAppoinmentText}>
                Your Next Appointment
              </Text>
              <View style={styles.forwardBtn}>
                <Forward size={18} />
              </View>
            </View>
            <TreatmentCard />
          </View>
          <View>
            <View style={styles.nextAppoinment}>
              <Text style={styles.nextAppoinmentText}>
                Promotions & Discounts
              </Text>
              <View style={styles.forwardBtn}>
                <Forward size={18} />
              </View>
            </View>
            <DiscountCard />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0,
    backgroundColor: Colors.white,
  },
  header: {
    paddingHorizontal: 30,
    paddingBottom: 22,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
    fontFamily: FontFamily.semiBold,
    marginBottom: 4,
  },
  subText: {
    fontSize: 16,
    color: Colors.lightBlack,
    fontFamily: FontFamily.regular,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 150,
    borderRadius: 15,
  },
  progressContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
  },
  progressText: {
    fontSize: 28,
    fontFamily: FontFamily.semiBold,
  },
  textContainer: {
    marginLeft: 29,
  },
  title: {
    fontSize: 20,
    fontFamily: FontFamily.semiBold,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: FontFamily.regular,
    marginTop: 6,
    marginBottom: 10,
  },
  button: {
    backgroundColor: Colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    height: 31,
    width: 129,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: Colors.white,
    fontFamily: FontFamily.semiBold,
    fontSize: 14,
    marginLeft: 6,
  },
  bellBack: {
    height: 44,
    width: 44,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.arrowBack,
  },
  progressTextContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 12,
    fontFamily: FontFamily.semiBold,
  },
  nextAppoinment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 13,
  },
  forwardBtn: {
    height: 31,
    width: 31,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.arrowBack,
  },
  nextAppoinmentText: {
    fontSize: 22,
    fontFamily: FontFamily.semiBold,
  },
  bodyMain: {
    paddingHorizontal: 30,
    paddingVertical: 22,
  },
});

export default HomeScreen;
