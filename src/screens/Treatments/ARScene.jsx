// import React, {useState} from 'react';
// import {ViroARScene, ViroText, ViroConstants, ViroImage, Viro3DObject} from '@reactvision/react-viro';

// const ARScene = ({photoPath, syringes}) => {
//   const [text, setText] = useState('Initializing AR...');

//   function onInitialized(state, reason) {
//     if (state === ViroConstants.TRACKING_NORMAL) {
//       setText('AR Ready');
//     } else if (state === ViroConstants.TRACKING_NONE) {
//       setText('No tracking');
//     }
//   }

//   return (
//     <ViroARScene onTrackingUpdated={onInitialized}>
//       <ViroImage
//         source={{uri: `file://${photoPath}`}}
//         position={[0, 0, -1]}
//         scale={[0.5, 0.5, 0.5]}
//         rotation={[0, 0, 0]}
//         transformBehaviors={['billboard']}
//       />
//       <ViroText
//         text={`${syringes} Syringe${syringes > 1 ? 's' : ''}`}
//         scale={[0.5, 0.5, 0.5]}
//         position={[0, 0.5, -1]}
//         style={{
//           fontFamily: 'Arial',
//           fontSize: 30,
//           color: '#ffffff',
//           textAlign: 'center',
//           textAlignVertical: 'center',
//         }}
//       />
//     </ViroARScene>
//   );
// };

// export default ARScene; 