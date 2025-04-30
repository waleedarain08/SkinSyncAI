import axios from 'axios';

const FACE_API_KEY = 'L75VlGpu1cDHfRt1YEm4Vb6A0C67v_vP'; // You'll need to get this from Face++ website
const FACE_API_SECRET = 'UYXYhu6ETz34neU3faMxvPR84Te-tBIK'; // You'll need to get this from Face++ website
const FACE_API_URL = 'https://api-us.faceplusplus.com/facepp/v3';

export const analyzeFace = async (imageBase64) => {
  try {
    const formData = new FormData();
    formData.append('api_key', FACE_API_KEY);
    formData.append('api_secret', FACE_API_SECRET);
    formData.append('image_base64', imageBase64);
    formData.append('return_landmark', 1);
    formData.append('return_attributes', 'gender,age,smiling,headpose,facequality,blur,eyestatus,emotion,ethnicity,beauty,skinstatus');

    const response = await axios.post(`${FACE_API_URL}/detect`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Face++ API Error:', error);
    throw error;
  }
};

export const createFaceModel = async (faceData) => {
  try {
    if (!faceData.faces || faceData.faces.length === 0) {
      throw new Error('No face detected');
    }

    const face = faceData.faces[0];
    const landmarks = face.landmark;
    const attributes = face.attributes;

    // Create a model object with all the necessary data
    const model = {
      landmarks: landmarks,
      attributes: attributes,
      faceRectangle: face.face_rectangle,
      // Add additional model-specific data
      skinTone: attributes.skinstatus?.value || 'normal',
      age: attributes.age?.value || 30,
      gender: attributes.gender?.value || 'male',
      beauty: attributes.beauty?.value || 50,
      emotion: attributes.emotion?.value || 'neutral',
    };

    // Here you would typically:
    // 1. Generate or fetch a base 3D model based on gender and age
    // 2. Apply facial landmarks to adjust the model's features
    // 3. Apply skin tone and texture based on skinstatus
    // 4. Apply beauty adjustments based on beauty score
    // 5. Apply emotion-based expressions
    // 6. Generate a 2D preview image of the model

    // For now, we'll return the model data
    // In a real implementation, you would return the generated model image URL or data
    return model;
  } catch (error) {
    console.error('Error creating face model:', error);
    throw error;
  }
}; 