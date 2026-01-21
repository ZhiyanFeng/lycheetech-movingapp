import { Slot } from 'expo-router';

export default function RootLayout() {
  // Render the Slot to let Expo Router handle navigation naturally
  // The first route will be determined by file structure
  return <Slot />;
}
