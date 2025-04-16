import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FontFamily} from '../utils/Fonts';
import {Clip} from '../icons';
import {Colors} from '../utils/Colors';

const AiModelCard = ({src, attached}) => {
  return (
    <View style={{marginRight: 9}}>
      <LinearGradient
        colors={['#EEA1F0', '#FFF0FF']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.card}>
        <View>
          <Image
            source={require('../assets/images/modelImage.png')} // Replace with your actual image
            style={styles.image}
          />
          {attached && (
            <View style={styles.clipBack}>
              <Clip size={10} />
              <Text style={styles.attachedTxt}>Attached</Text>
            </View>
          )}
        </View>
      </LinearGradient>
      <Text style={styles.title}>Ai Model Treatment</Text>
      <Text style={styles.title}>Name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 181,
    height: 174,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 6,
  },
  image: {
    width: 156,
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontFamily: FontFamily.semiBold,
  },
  clipBack: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lighterPink,
    borderRadius: 50,
    padding: 6,
    position: 'absolute',
    bottom: '7%',
    right: 0,
    flex: 1,
  },
  attachedTxt: {
    fontFamily: FontFamily.semiBold,
    fontSize: 12,
    marginLeft: 5,
  },
});

export default AiModelCard;
