import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  Alert,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {
  Camera,
  useCameraDevice,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {useFaceDetector,FaceDetectionOptions} from 'react-native-vision-camera-face-detector';
import {Worklets} from 'react-native-worklets-core';
import {Colors} from '../../utils/Colors';

const FaceDetection = () => {
  const [faces, setFaces] = useState([]);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  const [alertShown, setAlertShown] = useState(false); // To prevent multiple alerts
  const device = useCameraDevice('front');
  const {width: screenWidth, height: screenHeight} = useWindowDimensions();
  const faceDetectionOptions = useRef( {
    landmarkMode:'all',
    classificationMode:'all',
    contourMode:'all',
    autoMode:true
  } ).current

  const {detectFaces} = useFaceDetector();

  // Define fixed camera frame size
  const cameraWidth = 360;
  const cameraHeight = 480;

  const actualCameraWidth = device?.format?.width || 720; // Get actual camera resolution
  const actualCameraHeight = device?.format?.height || 1280;

  // Define the bounding box size and position
  const boundingBox = {
    x: 80, // Left position of the bounding box
    y: 100, // Top position of the bounding box
    width: 200, // Width of the bounding box
    height: 280, // Height of the bounding box
  };

  useEffect(() => {
    const requestPermission = async () => {
      try {
        const status = await Camera.requestCameraPermission();
        setCameraPermission(status);
        if (status === 'granted') {
          setIsPermissionGranted(true);
        } else {
          console.warn('Camera permission denied:', status);
        }
      } catch (error) {
        console.error('Permission request error:', error);
      }
    };
    requestPermission();
  }, []);

  const handleDetectFace = Worklets.createRunOnJS(faces => {
   // if(faces.length>0){
      setFaces(faces);
      console.log('Detected faces:', faces);
   // }
  });

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    try {
      const detectedFaces = detectFaces(frame);
      handleDetectFace(detectedFaces);
    } catch (error) {
      console.error('Face detection error:', error);
    }
  }, []);

  const isFaceInBoundingBox = face => {
    // Check if the face is within the bounding box
    const scaleX = cameraWidth / actualCameraWidth;
    const scaleY = cameraHeight / actualCameraHeight;

    const x = face.bounds.x * scaleX;
    const y = face.bounds.y * scaleY;
    const width = face.bounds.width * scaleX;
    const height = face.bounds.height * scaleY;

    return (
      x >= boundingBox.x &&
      y >= boundingBox.y &&
      x + width <= boundingBox.x + boundingBox.width &&
      y + height <= boundingBox.y + boundingBox.height
    );
  };

  const checkForAlert = () => {
    if (!alertShown) {
      setAlertShown(true);
      Alert.alert('Face detected');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {isPermissionGranted && device ? (
        <View>
          <Camera
            style={{width: screenWidth, height: screenHeight}}
            device={device}
            isActive={true}
            frameProcessor={frameProcessor}
          />

          {faces.length>0?
           faces.map((face, index) => (
          <View
            key={index}
            style={[
              styles.faceBox,
              {
                top: face.bounds.y,
                left: face.bounds.x,
                width: face.bounds.width,
                height: face.bounds.height+100,
              },
            ]}>
            <Text style={{color:"#fff", fontSize:18}}>Face Detected</Text>
          </View>
        )):<View style={styles.nofaceBox}><Text style={{color:"#fff", fontSize:14}}>No Face Detected</Text></View>}
        </View>
         
      ) : (
        <View style={styles.centeredView}>
          <Text style={styles.text}>
            {cameraPermission === 'denied'
              ? 'Camera permission denied. Please enable it in settings.'
              : 'Requesting camera permission...'}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraContainer: {
    overflow: 'hidden',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark color for overlay
  },
  darkOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0, // Ensures it's behind the bounding box and faces
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  faceBox: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems:'center'
  },
  nofaceBox: {
    position: 'absolute',
    borderWidth: 4,
    borderColor: 'red',
    width:200,
    height:100,
    backgroundColor: 'transparent',
    top:'40%',
    left:100,
    justifyContent:'center',
    alignItems:'center'
  },
});

export default FaceDetection;
