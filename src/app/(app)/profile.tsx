import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Container, Text, Layout } from '../../components/ui';
import { useColors } from '../../hooks/useColors';
import { spacing } from '../../../themes';

export default function ProfileScreen() {
  const router = useRouter();
  const colors = useColors();

  const handleLogout = () => {
    // Clear auth state and navigate to login
    router.replace('/(auth)/login');
  };

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Layout spacing={spacing.lg}>
          {/* Profile Header */}
          <View style={styles.header}>
            <View style={[styles.avatar, { backgroundColor: colors.primary }]}>
              <Text variant="title" style={styles.avatarText}>U</Text>
            </View>
            <Text variant="title" style={styles.name}>User Name</Text>
            <Text variant="body" style={[styles.email, { color: colors.text }]}>
              user@example.com
            </Text>
          </View>

          {/* Account Section */}
          <View style={styles.section}>
            <Text variant="body" style={styles.sectionTitle}>Account</Text>

            <TouchableOpacity
              style={[styles.menuItem, { borderBottomColor: colors.border }]}
              onPress={() => router.push('/profile')}
            >
              <Text variant="body">Edit Profile</Text>
              <Text variant="body">›</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuItem, { borderBottomColor: colors.border }]}
              onPress={() => router.push('/profile/settings')}
            >
              <Text variant="body">Settings</Text>
              <Text variant="body">›</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuItem, { borderBottomColor: colors.border }]}
            >
              <Text variant="body">Payment Methods</Text>
              <Text variant="body">›</Text>
            </TouchableOpacity>
          </View>

          {/* Support Section */}
          <View style={styles.section}>
            <Text variant="body" style={styles.sectionTitle}>Support</Text>

            <TouchableOpacity
              style={[styles.menuItem, { borderBottomColor: colors.border }]}
            >
              <Text variant="body">Help Center</Text>
              <Text variant="body">›</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuItem, { borderBottomColor: colors.border }]}
            >
              <Text variant="body">Contact Us</Text>
              <Text variant="body">›</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuItem, { borderBottomColor: colors.border }]}
            >
              <Text variant="body">Terms & Privacy</Text>
              <Text variant="body">›</Text>
            </TouchableOpacity>
          </View>

          {/* App Info */}
          <View style={styles.appInfo}>
            <Text variant="caption" style={{ color: colors.text, opacity: 0.5 }}>
              Version 1.0.0
            </Text>
          </View>

          {/* Logout Button */}
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
            disabled={loading}
          >
            <Text variant="body" style={styles.logoutText}>
              {loading ? 'Signing Out...' : 'Log Out'}
            </Text>
          </TouchableOpacity>
        </Layout>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingVertical: spacing.lg,
  },
  header: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 40,
  },
  name: {
    marginBottom: spacing.xs,
  },
  email: {
    opacity: 0.7,
  },
  section: {
    marginTop: spacing.lg,
  },
  sectionTitle: {
    fontWeight: '600',
    marginBottom: spacing.md,
    opacity: 0.7,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
  },
  appInfo: {
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  logoutButton: {
    alignItems: 'center',
    paddingVertical: spacing.md,
    marginTop: spacing.xl,
  },
  logoutText: {
    color: '#FF3B30',
    fontWeight: '600',
  },
});
