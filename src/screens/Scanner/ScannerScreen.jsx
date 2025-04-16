// import {
//   StyleSheet,
//   Text,
//   View ,
//   Dimensions
// } from 'react-native'
// import {
//   useEffect,
//   useState,
//   useRef
// } from 'react'
// import {
//   Camera,
//   useCameraDevice,
//   useFrameProcessor
// } from 'react-native-vision-camera'
// import {
//   Face,
//   runAsync,
//   useFaceDetector,
//   FaceDetectionOptions
// } from 'react-native-vision-camera-face-detector'
// import { Worklets } from 'react-native-worklets-core'
// import { requestPermission } from '../../utils/PermissionHelper';

// export default function App() {
//   const [faces, setFaces] = useState([]); // Store detected faces

//   const faceDetectionOptions = useRef( {
//     //mode: FaceDetectionOptions.Mode.Accurate, // detection mode
//     landmarkMode: 'all', // landmark mode
//     classificationMode: 'all', // classification mode
//     performanceMode: 'normal', // performance mode
//     contourMode: 'all', // contour mode
//     // detection options
//   } ).current

//   const device = useCameraDevice('front')
//   const { detectFaces } = useFaceDetector( faceDetectionOptions )

//   useEffect(() => {
//     (async () => {
//       requestPermission();
//     })()
//   }, [device])

//   const handleDetectedFaces = Worklets.createRunOnJS( (
//     faces
//   ) => {
//     console.log( 'faces detected', faces )
//     setFaces(faces);
//   })

//   const frameProcessor = useFrameProcessor((frame) => {
//     'worklet'
//     //runAsync(frame, () => {
//       //'worklet'
//       const faces = detectFaces(frame)
//       // ... chain some asynchronous frame processor
//       // ... do something asynchronously with frame
//       handleDetectedFaces(faces)
//     //})
//     // ... chain frame processors
//     // ... do something with frame
//   }, [handleDetectedFaces])

//   const renderBoundingBoxes = () => {
//     return faces.map((face, index) => {
//       const { bounds } = face; // Get the bounds of each detected face
//       const { origin, size } = bounds;
//       const { x, y } = origin;
//       const { width, height } = size;

//       return (
//         <View
//           key={index}
//           style={[
//             styles.boundingBox,
//             {
//               left: x,
//               top: y,
//               width: width,
//               height: height,
//             },
//           ]}
//         />
//       );
//     });
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {!!device?
//       <View>
//       <Camera
//         style={styles.camera}
//         device={device}
//         isActive={true}
//         //frameProcessor={frameProcessor}
//         //frameProcessorFps={5}
//       />
//        {renderBoundingBoxes()}
//       </View>
//        : <Text>
//         No Device
//       </Text>}
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   camera: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//     position: 'absolute', // Ensure camera is in the background
//   },
//   boundingBox: {
//     position: 'absolute',
//     borderWidth: 2,
//     borderColor: 'red',
//     borderRadius: 5,
//   },
//   text: {
//     position: 'absolute',
//     top: 50,
//     fontSize: 18,
//     color: 'white',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     padding: 5,
//   },
// });

// import {StyleSheet, Text, View, Dimensions, Alert} from 'react-native';
// import {useEffect, useState, useRef} from 'react';
// import {
//   Camera,
//   useCameraDevice,
//   useFrameProcessor,
// } from 'react-native-vision-camera';
// import {useFaceDetector} from 'react-native-vision-camera-face-detector';
// import {Worklets} from 'react-native-worklets-core';
// import {requestPermission} from '../../utils/PermissionHelper';

// export default function App() {
//   const [faces, setFaces] = useState([]); // Store detected faces
//   const hasAlerted = useRef(false); // Alert flag

//   const faceDetectionOptions = useRef({
//     landmarkMode: 'all',
//     classificationMode: 'all',
//     performanceMode: 'normal',
//     contourMode: 'all',
//   }).current;

//   const device = useCameraDevice('front');
//   const {detectFaces} = useFaceDetector(faceDetectionOptions);

//   useEffect(() => {
//     (async () => {
//       requestPermission();
//     })();
//   }, [device]);

//   const handleDetectedFaces = Worklets.createRunOnJS(faces => {
//     if (faces.length > 0) {
//       console.log('Face(s) detected:', faces);
//       setFaces(faces);
//       if (!hasAlerted.current) {
//         hasAlerted.current = true;
//         Alert.alert('Face detected!');
//       }
//     } else {
//       setFaces([]);
//       hasAlerted.current = false;
//     }
//   });

//   const frameProcessor = useFrameProcessor(
//     frame => {
//       'worklet';
//       const faces = detectFaces(frame);
//       handleDetectedFaces(faces);
//     },
//     [handleDetectedFaces],
//   );

//   const renderBoundingBoxes = () => {
//     return faces.map((face, index) => {
//       const { bounds } = face;

//       if (!bounds || !bounds.origin || !bounds.size) return null;

//       const { x, y } = bounds.origin;
//       const { width, height } = bounds.size;
//       const diameter = Math.max(width, height);

//       return (
//         <View
//           key={index}
//           style={[
//             styles.faceCircle,
//             {
//               left: x,
//               top: y,
//               width: diameter,
//               height: diameter,
//               borderRadius: diameter / 2,
//             },
//           ]}
//         />
//       );
//     });
//   };

//   return (
//     <View style={{flex: 1}}>
//       {device ? (
//         <View>
//           <Camera
//             style={styles.camera}
//             device={device}
//             isActive={true}
//             frameProcessor={frameProcessor}
//             frameProcessorFps={5}
//           />
//           {renderBoundingBoxes()}
//         </View>
//       ) : (
//         <Text>No Device</Text>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   camera: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//     position: 'absolute',
//   },
//   faceCircle: {
//     position: 'absolute',
//     borderWidth: 3,
//     borderColor: 'lime',
//     backgroundColor: 'rgba(0, 255, 0, 0.2)',
//   },
//   text: {
//     position: 'absolute',
//     top: 50,
//     fontSize: 18,
//     color: 'white',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     padding: 5,
//   },
// });

// import {StyleSheet, Text, View, Dimensions, Alert} from 'react-native';
// import {useEffect, useState, useRef} from 'react';
// import {
//   Camera,
//   useCameraDevice,
//   useFrameProcessor,
// } from 'react-native-vision-camera';
// import {useFaceDetector} from 'react-native-vision-camera-face-detector';
// import {Worklets} from 'react-native-worklets-core';
// import {requestPermission} from '../../utils/PermissionHelper';

// export default function App() {
//   const [faces, setFaces] = useState([]);
//   const [confirmedFaces, setConfirmedFaces] = useState([]); // Faces after 2s delay
//   const hasAlerted = useRef(false);
//   const timeoutRef = useRef(null);

//   const faceDetectionOptions = useRef({
//     landmarkMode: 'all',
//     classificationMode: 'all',
//     performanceMode: 'normal',
//     contourMode: 'all',
//   }).current;

//   const device = useCameraDevice('front');
//   const {detectFaces} = useFaceDetector(faceDetectionOptions);

//   useEffect(() => {
//     (async () => {
//       requestPermission();
//     })();
//   }, [device]);

//   const handleDetectedFaces = Worklets.createRunOnJS((faces) => {
//     setFaces(faces);

//     if (faces.length > 0 && !timeoutRef.current) {
//       console.log('Face(s) detected. Waiting 2 seconds...');
//       timeoutRef.current = setTimeout(() => {
//         setConfirmedFaces(faces);
//         if (!hasAlerted.current) {
//           hasAlerted.current = true;
//           Alert.alert('Face detected!');
//         }
//         timeoutRef.current = null;
//       }, 2000);
//     }

//     // Clear confirmed faces and alert flag if no face is found
//     if (faces.length === 0) {
//       setConfirmedFaces([]);
//       hasAlerted.current = false;
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//         timeoutRef.current = null;
//       }
//     }
//   });

//   const frameProcessor = useFrameProcessor((frame) => {
//     'worklet';
//     const faces = detectFaces(frame);
//     handleDetectedFaces(faces);
//   }, [handleDetectedFaces]);

//   const renderBoundingCircles = () => {
//     return confirmedFaces.map((face, index) => {
//       const { bounds } = face;

//       if (!bounds || !bounds.origin || !bounds.size) return null;

//       const { x, y } = bounds.origin;
//       const { width, height } = bounds.size;
//       const diameter = Math.max(width, height);

//       return (
//         <View
//           key={index}
//           style={[
//             styles.faceCircle,
//             {
//               left: x,
//               top: y,
//               width: diameter,
//               height: diameter,
//               borderRadius: diameter / 2,
//             },
//           ]}
//         />
//       );
//     });
//   };

//   return (
//     <View style={{flex: 1}}>
//       {device ? (
//         <View>
//           <Camera
//             style={styles.camera}
//             device={device}
//             isActive={true}
//             frameProcessor={frameProcessor}
//             frameProcessorFps={5}
//           />
//           {renderBoundingCircles()}
//         </View>
//       ) : (
//         <Text>No Device</Text>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   camera: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//     position: 'absolute',
//   },
//   faceCircle: {
//     position: 'absolute',
//     borderWidth: 3,
//     borderColor: 'lime',
//     backgroundColor: 'rgba(0, 255, 0, 0.2)',
//   },
//   text: {
//     position: 'absolute',
//     top: 50,
//     fontSize: 18,
//     color: 'white',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     padding: 5,
//   },
// });

// import {StyleSheet, Text, View, Dimensions, Alert, SafeAreaView, StatusBar} from 'react-native';
// import {useEffect, useState, useRef} from 'react';
// import {
//   Camera,
//   useCameraDevice,
//   useFrameProcessor,
// } from 'react-native-vision-camera';
// import {useFaceDetector} from 'react-native-vision-camera-face-detector';
// import {Worklets} from 'react-native-worklets-core';
// import {requestPermission} from '../../utils/PermissionHelper';

// export default function App() {
//   const [faces, setFaces] = useState([]);
//   const [confirmedFaces, setConfirmedFaces] = useState([]); // Faces after 2s delay
//   const hasAlerted = useRef(false);
//   const timeoutRef = useRef(null);

//   const faceDetectionOptions = useRef({
//     landmarkMode: 'all',
//     classificationMode: 'all',
//     performanceMode: 'normal',
//     contourMode: 'all',
//   }).current;

//   const device = useCameraDevice('front');
//   const {detectFaces} = useFaceDetector(faceDetectionOptions);

//   useEffect(() => {
//     (async () => {
//       requestPermission();
//     })();
//   }, [device]);

//   const handleDetectedFaces = Worklets.createRunOnJS((faces) => {
//     setFaces(faces);

//     if (faces.length > 0 && !timeoutRef.current) {
//       console.log('Face(s) detected. Waiting 2 seconds...');
//       timeoutRef.current = setTimeout(() => {
//         setConfirmedFaces(faces);
//         if (!hasAlerted.current) {
//           hasAlerted.current = true;
//           Alert.alert('Face detected!');
//         }
//         timeoutRef.current = null;
//       }, 2000);
//     }

//     // Clear confirmed faces and alert flag if no face is found
//     if (faces.length === 0) {
//       setConfirmedFaces([]);
//       hasAlerted.current = false;
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//         timeoutRef.current = null;
//       }
//     }
//   });

//   const frameProcessor = useFrameProcessor((frame) => {
//     'worklet';
//     const faces = detectFaces(frame);
//     handleDetectedFaces(faces);
//   }, [handleDetectedFaces]);

//   const renderBoundingCircles = () => {
//     return confirmedFaces.map((face, index) => {
//       const { bounds } = face;

//       if (!bounds || !bounds.origin || !bounds.size) return null;

//       const { x, y } = bounds.origin;
//       const { width, height } = bounds.size;
//       const diameter = Math.max(width, height);

//       return (
//         <View
//           key={index}
//           // style={[
//           //   styles.faceCircle,
//           //   {
//           //     left: x,
//           //     top: y,
//           //     width: diameter,
//           //     height: diameter,
//           //     borderRadius: diameter / 2,
//           //   },
//           // ]}
//         />
//       );
//     });
//   };

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
//       {/* StatusBar adjustment for iOS devices */}
//       <StatusBar barStyle="light-content" />

//       {device ? (
//         <View style={{flex: 1}}>
//           {/* The Camera is positioned absolutely, but should not overlap safe area */}
//           <Camera
//             style={styles.camera}
//             device={device}
//             isActive={true}
//             frameProcessor={frameProcessor}
//             frameProcessorFps={5}
//           />
//           {renderBoundingCircles()}
//         </View>
//       ) : (
//         <Text>No Device</Text>
//       )}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   camera: {
//     flex: 1, // Make sure the camera fills the screen while respecting the SafeArea
//     position: 'absolute', // Camera should occupy full screen
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height + 20,
//   },
//   faceCircle: {
//     position: 'absolute',
//     borderWidth: 3,
//     borderColor: 'lime',
//     backgroundColor: 'rgba(0, 255, 0, 0.2)',
//   },
//   text: {
//     position: 'absolute',
//     top: 50,
//     fontSize: 18,
//     color: 'white',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     padding: 5,
//   },
// });

// import { View, StyleSheet, Text, useWindowDimensions, Alert, SafeAreaView } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { Camera, useCameraDevice, useFrameProcessor } from 'react-native-vision-camera';
// import { useFaceDetector } from 'react-native-vision-camera-face-detector';
// import { Worklets } from 'react-native-worklets-core';

// const FaceDetection = () => {
//   const [faces, setFaces] = useState([]);
//   const [cameraPermission, setCameraPermission] = useState(null);
//   const [isPermissionGranted, setIsPermissionGranted] = useState(false);
//   const device = useCameraDevice('front');
//   const { detectFaces } = useFaceDetector();
//   const { width: screenWidth, height: screenHeight } = useWindowDimensions();

//   // Define fixed camera frame size
//   const cameraWidth = 360;
//   const cameraHeight = 480;

//   const actualCameraWidth = device?.format?.width || 720; // Get actual camera resolution
//   const actualCameraHeight = device?.format?.height || 1280;

//   useEffect(() => {
//     const requestPermission = async () => {
//       try {
//         const status = await Camera.requestCameraPermission();
//         setCameraPermission(status);
//         if (status === 'granted') {
//           setIsPermissionGranted(true);
//         } else {
//           console.warn('Camera permission denied:', status);
//         }
//       } catch (error) {
//         console.error('Permission request error:', error);
//       }
//     };
//     requestPermission();
//   }, []);

//   const handleDetectFace = Worklets.createRunOnJS((faces) => {
//     setFaces(faces);
//     console.log('Detected faces:', faces);
//   });

//   const frameProcessor = useFrameProcessor((frame) => {
//     'worklet';
//     try {
//       const detectedFaces = detectFaces(frame);
//       handleDetectFace(detectedFaces);
//     } catch (error) {
//       console.error('Face detection error:', error);
//     }
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       {isPermissionGranted && device ? (
//         <View style={[styles.cameraContainer, { width: cameraWidth, height: cameraHeight }]}>
//           {/* Camera Feed */}
//           <Camera
//             style={{ width: cameraWidth, height: cameraHeight }}
//             device={device}
//             isActive={true}
//             frameProcessor={frameProcessor}
//           />

//           {/* Overlay for detected faces */}
//           <View style={styles.overlay}>
//             {faces.map((face, index) => {
//               const scaleX = cameraWidth / actualCameraWidth;
//               const scaleY = cameraHeight / actualCameraHeight;

//               // Properly mirror X-coordinates for front camera
//               const mirroredX = cameraWidth - (face.bounds.x + face.bounds.width) * scaleX;
//               const y = face.bounds.y * scaleY;
//               const width = face.bounds.width * scaleX;
//               const height = face.bounds.height * scaleY;

//               return (
//                 <View
//                   key={index}
//                   style={{
//                     position: 'absolute',
//                     left: mirroredX,
//                     top: y,
//                     width: width,
//                     height: height,
//                     backgroundColor: 'rgba(255, 0, 0, 0.5)', // Red transparent face area
//                     zIndex: 2,
//                     borderWidth: 2,
//                     borderColor: 'red', // Face boundary outline
//                   }}
//                 />
//               );
//             })}
//           </View>
//         </View>
//       ) : (
//         <View style={styles.centeredView}>
//           <Text style={styles.text}>
//             {cameraPermission === 'denied'
//               ? 'Camera permission denied. Please enable it in settings.'
//               : 'Requesting camera permission...'}
//           </Text>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   cameraContainer: {
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   overlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#000',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default FaceDetection;

// import {
//   View,
//   StyleSheet,
//   Text,
//   useWindowDimensions,
//   Alert,
//   SafeAreaView,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {
//   Camera,
//   useCameraDevice,
//   useFrameProcessor,
// } from 'react-native-vision-camera';
// import {useFaceDetector} from 'react-native-vision-camera-face-detector';
// import {Worklets} from 'react-native-worklets-core';

// const FaceDetection = () => {
//   const [faces, setFaces] = useState([]);
//   const [cameraPermission, setCameraPermission] = useState(null);
//   const [isPermissionGranted, setIsPermissionGranted] = useState(false);
//   const [alertShown, setAlertShown] = useState(false); // To prevent multiple alerts
//   const device = useCameraDevice('front');
//   const {detectFaces} = useFaceDetector();
//   const {width: screenWidth, height: screenHeight} = useWindowDimensions();

//   // Define fixed camera frame size
//   const cameraWidth = 360;
//   const cameraHeight = 480;

//   const actualCameraWidth = device?.format?.width || 720; // Get actual camera resolution
//   const actualCameraHeight = device?.format?.height || 1280;

//   // Define the bounding box size and position
//   const boundingBox = {
//     x: 80, // Left position of the bounding box
//     y: 100, // Top position of the bounding box
//     width: 200, // Width of the bounding box
//     height: 280, // Height of the bounding box
//   };

//   useEffect(() => {
//     const requestPermission = async () => {
//       try {
//         const status = await Camera.requestCameraPermission();
//         setCameraPermission(status);
//         if (status === 'granted') {
//           setIsPermissionGranted(true);
//         } else {
//           console.warn('Camera permission denied:', status);
//         }
//       } catch (error) {
//         console.error('Permission request error:', error);
//       }
//     };
//     requestPermission();
//   }, []);

//   const handleDetectFace = Worklets.createRunOnJS(faces => {
//     setFaces(faces);
//     console.log('Detected faces:', faces);
//   });

//   const frameProcessor = useFrameProcessor(frame => {
//     'worklet';
//     try {
//       const detectedFaces = detectFaces(frame);
//       handleDetectFace(detectedFaces);
//     } catch (error) {
//       console.error('Face detection error:', error);
//     }
//   }, []);

//   const isFaceInBoundingBox = face => {
//     // Check if the face is within the bounding box
//     const scaleX = cameraWidth / actualCameraWidth;
//     const scaleY = cameraHeight / actualCameraHeight;

//     const x = face.bounds.x * scaleX;
//     const y = face.bounds.y * scaleY;
//     const width = face.bounds.width * scaleX;
//     const height = face.bounds.height * scaleY;

//     return (
//       x >= boundingBox.x &&
//       y >= boundingBox.y &&
//       x + width <= boundingBox.x + boundingBox.width &&
//       y + height <= boundingBox.y + boundingBox.height
//     );
//   };

//   const checkForAlert = () => {
//     if (!alertShown) {
//       setAlertShown(true);
//       Alert.alert('Face detected within the bounding box!');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       {isPermissionGranted && device ? (
//         <View
//           style={[
//             styles.cameraContainer,
//             {width: cameraWidth, height: cameraHeight},
//           ]}>
//           {/* Camera Feed */}
//           <Camera
//             style={{width: cameraWidth, height: cameraHeight}}
//             device={device}
//             isActive={true}
//             frameProcessor={frameProcessor}
//           />

//           {/* Overlay for detected faces */}
//           <View style={styles.overlay}>
//             {faces.map((face, index) => {
//               const scaleX = cameraWidth / actualCameraWidth;
//               const scaleY = cameraHeight / actualCameraHeight;

//               // Properly mirror X-coordinates for front camera
//               const mirroredX =
//                 cameraWidth - (face.bounds.x + face.bounds.width) * scaleX;
//               const y = face.bounds.y * scaleY;
//               const width = face.bounds.width * scaleX;
//               const height = face.bounds.height * scaleY;

//               // Increase bounding box size by scaling the face area (e.g., 1.2 times)
//               const largerWidth = width * 1.2;
//               const largerHeight = height * 1.2;

//               // Check if the face is within the bounding box
//               if (isFaceInBoundingBox(face)) {
//                 checkForAlert();
//               }

//               return (
//                 <View
//                   key={index}
//                 />
//               );
//             })}
//           </View>

//           {/* Bounding box visible on screen */}
//           <View
//             style={{
//               position: 'absolute',
//               left: boundingBox.x,
//               top: boundingBox.y,
//               width: boundingBox.width,
//               height: boundingBox.height,
//               borderWidth: 2,
//               borderRadius: 100,
//               borderColor: 'yellow',
//               zIndex: 1,
//             }}
//           />
//         </View>
//       ) : (
//         <View style={styles.centeredView}>
//           <Text style={styles.text}>
//             {cameraPermission === 'denied'
//               ? 'Camera permission denied. Please enable it in settings.'
//               : 'Requesting camera permission...'}
//           </Text>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   cameraContainer: {
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   overlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#000',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default FaceDetection;

import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  Alert,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {useFaceDetector} from 'react-native-vision-camera-face-detector';
import {Worklets} from 'react-native-worklets-core';
import {Colors} from '../../utils/Colors';

const FaceDetection = () => {
  const [faces, setFaces] = useState([]);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  const [alertShown, setAlertShown] = useState(false); // To prevent multiple alerts
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

  const handleDetectFace = Worklets.createRunOnJS(faces => {
    setFaces(faces);
    console.log('Detected faces:', faces);
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
        <View
          style={[
            styles.cameraContainer,
            {width: cameraWidth, height: cameraHeight},
          ]}>
          {/* Camera Feed */}
          <Camera
            style={{width: cameraWidth, height: cameraHeight}}
            device={device}
            isActive={true}
            frameProcessor={frameProcessor}
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
