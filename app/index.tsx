import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Check authentication status
    const isAuthenticated = false; // Replace with actual auth check from Redux

    // Navigate based on auth status
    if (isAuthenticated) {
      router.replace('/(app)');
    } else {
      router.replace('/(auth)/login');
    }
  }, []);

  // Show loading screen while determining route
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
