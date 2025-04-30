import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, PermissionsAndroid, Platform, Alert, TouchableOpacity } from 'react-native';
import { Camera, useCameraDevice, useFrameProcessor, VisionCameraProxy } from 'react-native-vision-camera';
import { 
    Face,
    runAsync,
    useFaceDetector,
    FaceDetectionOptions
  } from 'react-native-vision-camera-face-detector';
//import { runOnJS } from 'react-native-reanimated';
import * as Animatable from 'react-native-animatable';
import {Worklets} from 'react-native-worklets-core';
import { Colors } from '../../utils/Colors';


export default function FaceAngleCapture({navigation}) {
  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [captured, setCaptured] = useState({ front: null, left: null, right: null });
  const [countdown, setCountdown] = useState(null); // '3' → '2' → '1'
  const [currentAngle, setCurrentAngle] = useState(null);
  const [isCounting, setIsCounting] = useState(false);
  const [frameProcessingEnabled, setFrameProcessingEnabled] = useState(true);
  const device = useCameraDevice('front');

const {detectFaces} = useFaceDetector();
    

   useEffect(() => {
      const requestPermission = async () => {
        try {
          const status = await Camera.requestCameraPermission();
          if (status === 'granted') {
            setHasPermission(status);
            //setIsPermissionGranted(true);
          } else {
            console.warn('Camera permission denied:', status);
          }
        } catch (error) {
          console.error('Permission request error:', error);
        }
      };
      requestPermission();
    }, []);


    const runStartCountdownFront = Worklets.createRunOnJS(() => startCountdown('front'));
   // const runStartCountdownLeft = Worklets.createRunOnJS(() => startCountdown('left'));
   // const runStartCountdownRight = Worklets.createRunOnJS(() => startCountdown('right'));
  
    const startCountdown = (angle) => {
        if (isCounting || captured[angle]) return;
        
        setIsCounting(true);
        setCurrentAngle(angle);
        let seconds = 3;
    
        const countdownInterval = setInterval(() => {
          setCountdown(seconds.toString());
          seconds--;
    
          if (seconds < 0) {
            clearInterval(countdownInterval);
            setCountdown(null);
            capturePhoto(angle);
            setIsCounting(false);
          }
        }, 800);
      };
    
  const runDisableFrameProcessing = Worklets.createRunOnJS(() => setFrameProcessingEnabled(false));   
  const frameProcessor = useFrameProcessor((frame) => {
    'worklet';
    
    const faces = detectFaces(frame);
    if (!frameProcessingEnabled || faces.length === 0 || isCounting) return;

    const face = faces[0];
    const yaw = face.yawAngle;
    console.log('Yawwwwwwwwww:', yaw);
    if (!captured.front && yaw > -10 && yaw < 10) {
        runDisableFrameProcessing(); // ✅ safely disables JS-side state
        runStartCountdownFront();
    }
    //   else if (!captured.left && yaw > 15) {
    //     runStartCountdownLeft();
    //   } else if (!captured.right && yaw < -15) {
    //     runStartCountdownRight();
    //   }
  }, [captured, isCounting,frameProcessingEnabled]);

   
  

  

  const capturePhoto = async (angle) => {
    if (!cameraRef.current || captured[angle]) return;

    try {
      const photo = await cameraRef.current.takePhoto({qualityPrioritization: 'balanced',
        skipMetadata: false});
      setCaptured((prev) => ({ ...prev, [angle]: photo.path }));

      if (angle === 'front') {
        //Alert.alert('Success!', 'Face Captrued Successfully');
      }
    } catch (err) {
      console.warn('Capture error:', err);
    }
  };

  const resetCapture = () => {
    setFrameProcessingEnabled(true);
    setCaptured({ front: null, left: null, right: null });
    setCountdown(null);
    setIsCounting(false);
    setCurrentAngle(null);
  };

  if (!device || !hasPermission) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading Camera...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        device={device}
        isActive={true}
        photo={true}
        frameProcessor={frameProcessor}
        //pixelFormat="yuv"
      />

      <Animatable.View animation="fadeInDown" delay={1000} style={styles.instructions}>
        <Text style={styles.instructionText}>🧍 Look at the center of screen</Text>
        <Text style={styles.instructionText}>Detected face will auto-capture after countdown.</Text>
      </Animatable.View>

      <View style={styles.progressContainer}>
        {['front'].map((angle) => (
          <Animatable.View
            key={angle}
            animation={captured[angle] ? 'pulse' : undefined}
            iterationCount="infinite"
            duration={captured[angle] ? 700 : 0}
            style={[
              styles.progressDot,
              { backgroundColor: captured[angle] ? '#4CAF50' : '#999' },
            ]}
          >
            <Text style={styles.progressLabel}>{captured[angle] ?'Face Detected':'Detecting Face'}</Text>
          </Animatable.View>
        ))}
      </View>

      <View style={styles.thumbnails}>
        {['front'].map((angle) =>
          captured[angle] ? (
            <Animatable.Image
              animation="fadeIn"
              duration={600}
              key={angle}
              source={{ uri: `file://${captured[angle]}` }}
              style={styles.thumbnail}
            />
          ) : (
            <View key={angle} style={[styles.thumbnail, styles.placeholder]}>
              <Text style={styles.placeholderText}>Captured Image</Text>
            </View>
          )
        )}
      </View>

      {countdown && (
        <Animatable.Text
          key={countdown}
          animation="zoomIn"
          duration={600}
          style={styles.countdownText}
        >
          {countdown}
        </Animatable.Text>
      )}
      <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
       <TouchableOpacity style={styles.resetButton} onPress={() => {navigation.goBack()}}>
        <Text style={styles.resetText}>Exit</Text>
      </TouchableOpacity>  
      <TouchableOpacity style={styles.resetButton} onPress={resetCapture}>
        <Text style={styles.resetText}>🔄 Re-Capture</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resetButton} onPress={() => {navigation.navigate('ARModalFace',{photoPath:captured['front']})}}>
        <Text style={styles.resetText}>Next</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  camera: { flex: 1 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
  loadingText: { color: 'white', fontSize: 18 },
  instructions: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    backgroundColor: '#00000088',
    padding: 10,
    borderRadius: 8,
  },
  instructionText: { color: 'white', fontSize: 16, textAlign: 'center' },
  progressContainer: {
    position: 'absolute',
    top: 130,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: 10,
  },
  progressDot: {
    width: 120,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  progressLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  thumbnails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#111',
    height: 220,
    resizeMode: 'contain',
  },
  thumbnail: {
    //width: 100,
    //height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  placeholder: {
    backgroundColor: Colors.glowSkin,
    //opacity: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: { color: '#fff', fontWeight: 'bold' },
  countdownText: {
    position: 'absolute',
    top: '40%',
    alignSelf: 'center',
    fontSize: 80,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#000000aa',
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  resetButton: {
    backgroundColor: '#333',
    alignSelf: 'center',
    marginBottom: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
  },
  resetText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
