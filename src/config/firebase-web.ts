import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

// Firebase web config – used exclusively for Data Connect (web SDK)
// Auth continues to use @react-native-firebase (native SDK)
const firebaseWebConfig = {
  apiKey: 'AIzaSyCEi7-P_5ikOkwAcGUf6nhYpK201wu6_B8',
  projectId: 'lychee-moving',
  appId: '1:656805707235:android:69332192eb6487d7b374d6',
  storageBucket: 'lychee-moving.firebasestorage.app',
};

// Avoid duplicate app initialization (e.g., hot reload)
const firebaseWebApp: FirebaseApp =
  getApps().find((a) => a.name === 'dataconnect-app') ??
  initializeApp(firebaseWebConfig, 'dataconnect-app');

// Single shared DataConnect instance
export const dataConnect: DataConnect = getDataConnect(firebaseWebApp, connectorConfig);

export default firebaseWebApp;
