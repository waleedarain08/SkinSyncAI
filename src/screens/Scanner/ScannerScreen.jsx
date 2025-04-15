import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Image
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
import ImagePicker from 'react-native-image-crop-picker';
import { runOnJS } from 'react-native-reanimated';
import { Canvas, Circle, Group, Paint, Path, Skia } from '@shopify/react-native-skia';




const FaceDetection = () => {
  const [faces, setFaces] = useState([]);
  const [isFaceDetected, setIsFaceDetected] = useState(false);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  const [alertShown, setAlertShown] = useState(false); // To prevent multiple alerts
  const device = useCameraDevice('front');
  const {width: screenWidth, height: screenHeight} = useWindowDimensions();
  const [showCamera, setShowCamera] = useState(true);
  const [imageSource, setImageSource] = useState('');
  const [landmarks, setLandmarks] = useState([]);

  const faceDetectionOptions = useRef( {
    landmarkMode:'all',
    classificationMode:'all',
    //contourMode:'all',
    autoMode:true
  } ).current
  const camera = useRef(null);

  const {detectFaces} = useFaceDetector(faceDetectionOptions);

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

  const objectToArray = (obj) => {
    return Object.values(obj).filter((pt) => pt && typeof pt.x === 'number');
  };

  const handleDetectFace = Worklets.createRunOnJS(faces => {
   // if (!isFaceDetected) {
      if(faces.length>0){
        runOnJS(setFaces)(faces);
        console.log('Detected faces landmarks:', faces[0]);
        //runOnJS(setLandmarks)(faces[0].landmarks);
        setLandmarks(objectToArray(faces[0].landmarks));
       // capturePhoto(faces[0]);
       /// runOnJS(setIsFaceDetected)(true);
      }
    //}
  });

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    try {
      if (!isFaceDetected) {
      const detectedFaces = detectFaces(frame);
      handleDetectFace(detectedFaces);
      }
    } catch (error) {
      console.error('Face detection error:', error);
    }
  }, [isFaceDetected]);

  const capturePhoto = async (face) => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      if (photo?.path != "") {
        const croppedFace = await cropFaceFromImage(photo.path, face.bounds);       
      } 
    }
  };

  const cropFaceFromImage = async (imagePath, bounds) => {
    await ImagePicker.openCropper({
      path: 'file:///' + imagePath,
      width: bounds.width,
      height: bounds.height,
      cropperCircleOverlay: false,
      cropperActiveWidgetColor: '#424242',
      cropping: true,
      cropperToolbarTitle: 'Crop Face',
    }).then(image => {
      console.log('Cropped image:', image);
      setImageSource(image.path);
      setShowCamera(false);
      //return(image);
    });
  };

  const retake = () => {
    setIsFaceDetected(false);
    setShowCamera(true);
  }

  const paintRed = Skia.Paint();
  paintRed.setColor(Skia.Color('rgba(255,0,100,0.5)')); // Lip tint

  const paintPurple = Skia.Paint();
  paintPurple.setColor(Skia.Color('rgba(150,0,255,0.4)')); // Eyeshadow

  const highlightPaint = (() => {
    const p = Skia.Paint();
    p.setColor(Skia.Color('rgba(0,255,255,0.5)')); // Cyan glow for highlight
    return p;
  }, []);

  // const isFaceInBoundingBox = face => {
  //   const scaleX = cameraWidth / actualCameraWidth;
  //   const scaleY = cameraHeight / actualCameraHeight;

  //   const x = face.bounds.x * scaleX;
  //   const y = face.bounds.y * scaleY;
  //   const width = face.bounds.width * scaleX;
  //   const height = face.bounds.height * scaleY;

  //   return (
  //     x >= boundingBox.x &&
  //     y >= boundingBox.y &&
  //     x + width <= boundingBox.x + boundingBox.width &&
  //     y + height <= boundingBox.y + boundingBox.height
  //   );
  // };

  // const checkForAlert = () => {
  //   if (!alertShown) {
  //     setAlertShown(true);
  //     Alert.alert('Face detected');
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      {isPermissionGranted && device ? (
        showCamera ? (
        <>
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={showCamera}
            frameProcessor={frameProcessor}
            frameProcessorFps={5}
            ref={camera}
            photo={true}
          />
          <Canvas style={StyleSheet.absoluteFill}>
            <Group>
              {landmarks.map((pt, idx) => (
                <Circle key={idx} cx={pt.x} cy={pt.y} r={5} paint={highlightPaint} />
              ))}
            </Group>
          </Canvas>

          {/* 
          {faces.length > 0 ? (
            faces.map((face, index) => (
              <View
                key={index}
                style={[
                  styles.faceBox,
                  {
                    top: face.bounds.y,
                    left: face.bounds.x,
                    width: face.bounds.width,
                    height: face.bounds.height,
                  },
                ]}
              >
                <Text style={{ color: "#fff", fontSize: 18 }}>Face Detected</Text>
              </View>
            ))
          ) : (
            <View style={styles.nofaceBox}>
              <Text style={{ color: "#fff", fontSize: 14 }}>No Face Detected</Text>
            </View>
          )} 
          */}
        </>) 
        
        : (
          <>
          {imageSource !== '' ? (
            <Image
              style={styles.image}
              source={{
                uri: `file://'${imageSource}`,
              }}
            />
          ) : null}

          <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#fff',
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#77c3ec',
                }}
                onPress={() => retake()}>
                <Text style={{color: '#77c3ec', fontWeight: '500'}}>
                  Retake
                </Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
                style={{
                  backgroundColor: '#77c3ec',
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: 'white',
                }}
                onPress={() => setShowCamera(true)}>
                <Text style={{color: 'white', fontWeight: '500'}}>
                  Use Photo
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </>
        )
         
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
    //backgroundColor: '#000',
   // alignItems: 'center',
   // justifyContent: 'center',
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
  button: {
    backgroundColor: 'gray',
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    top: 0,
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  camButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    //ADD backgroundColor COLOR GREY
    backgroundColor: '#B2BEB5',

    alignSelf: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 9 / 16,
  },
});

export default FaceDetection;
