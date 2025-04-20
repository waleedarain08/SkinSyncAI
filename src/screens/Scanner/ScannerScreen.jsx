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
import {useFaceDetector} from 'react-native-vision-camera-face-detector';
import {Worklets} from 'react-native-worklets-core';
import {Colors} from '../../utils/Colors';
import {useNavigation} from '@react-navigation/native';

const FaceDetection = () => {
  const navigation = useNavigation();
  const camera = useRef(null);
  const [faces, setFaces] = useState([]);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  const [alertShown, setAlertShown] = useState(false); // To prevent multiple alerts
  const [isCapturing, setIsCapturing] = useState(false);
  const device = useCameraDevice('front');
  const {detectFaces} = useFaceDetector();
  const {width: screenWidth, height: screenHeight} = useWindowDimensions();

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

  const handleDetectFace = Worklets.createRunOnJS(async faces => {
    setFaces(faces);
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

  const checkForAlert = async () => {
    if (!alertShown) {
      setAlertShown(true);
      Alert.alert('Face detected');
      if (faces.length > 0 && !isCapturing) {
        setIsCapturing(true);
        try {
          const photo = await camera.current?.takePhoto({
            qualityPrioritization: 'quality',
            flash: 'off',
          });
          if (photo) {
            navigation.navigate('ARModalFace', {photoPath: photo.path});
          }
        } catch (error) {
          console.error('Error capturing photo:', error);
        } finally {
          setIsCapturing(false);
        }
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {isPermissionGranted && device ? (
        <View
          style={[
            styles.cameraContainer,
            {width: cameraWidth, height: cameraHeight},
          ]}>
          {/* Camera Feed */}
          <Camera
            ref={camera}
            style={{width: cameraWidth, height: cameraHeight}}
            device={device}
            isActive={true}
            frameProcessor={frameProcessor}
            photo={true}
          />

          {/* Darkened area outside the bounding box */}
          <View style={styles.darkOverlay}>
            {/* Top dark area */}
            <View style={[styles.overlay, {top: 0, height: boundingBox.y}]} />
            {/* Left dark area */}
            <View
              style={[
                styles.overlay,
                {top: boundingBox.y, left: 0, width: boundingBox.x},
              ]}
            />
            {/* Right dark area */}
            <View
              style={[
                styles.overlay,
                {
                  top: boundingBox.y,
                  left: boundingBox.x + boundingBox.width,
                  width: screenWidth - (boundingBox.x + boundingBox.width),
                },
              ]}
            />
            {/* Bottom dark area */}
            <View
              style={[
                styles.overlay,
                {
                  top: boundingBox.y + boundingBox.height,
                  height: screenHeight - (boundingBox.y + boundingBox.height),
                },
              ]}
            />
          </View>

          {/* Overlay for detected faces */}
          <View style={styles.overlay}>
            {faces.map((face, index) => {
              const scaleX = cameraWidth / actualCameraWidth;
              const scaleY = cameraHeight / actualCameraHeight;

              // Properly mirror X-coordinates for front camera
              const mirroredX =
                cameraWidth - (face.bounds.x + face.bounds.width) * scaleX;
              const y = face.bounds.y * scaleY;
              const width = face.bounds.width * scaleX;
              const height = face.bounds.height * scaleY;

              // Increase bounding box size by scaling the face area (e.g., 1.2 times)
              const largerWidth = width * 1.2;
              const largerHeight = height * 1.2;

              // Check if the face is within the bounding box
              if (isFaceInBoundingBox(face)) {
                checkForAlert();
              }

              return <View key={index} />;
            })}
          </View>

          {/* Bounding box visible on screen */}
          <View
            style={{
              position: 'absolute',
              left: boundingBox.x,
              top: boundingBox.y,
              width: boundingBox.width,
              height: boundingBox.height,
              borderWidth: 2,
              borderRadius: 100,
              borderColor: Colors.progressbarColor,
              zIndex: 1,
            }}
          />
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
});

export default FaceDetection;
