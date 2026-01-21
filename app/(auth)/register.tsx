import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { Container } from '../../components/ui/container';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Text as CustomText } from '../../components/ui/text';
import { Layout } from '../../components/ui/layout';
import { useColors } from '../../hooks/useColors';
import { spacing } from '../../themes';

export default function RegisterScreen() {
  const router = useRouter();
  const colors = useColors();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async () => {
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Navigate to main app on success
      router.replace('/(app)');
    }, 2000);
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <Layout spacing={spacing.lg}>
            {/* Header */}
            <View style={styles.header}>
              <CustomText variant="title" style={styles.title}>
                Create Account
              </CustomText>
              <CustomText variant="body" style={[styles.subtitle, { color: colors.text }]}>
                Sign up to get started
              </CustomText>
            </View>

            {/* Error Message */}
            {error ? (
              <View style={[styles.errorContainer, { backgroundColor: `${colors.border}` }]}>
                <CustomText variant="caption" style={{ color: '#FF3B30' }}>
                  {error}
                </CustomText>
              </View>
            ) : null}

            {/* Form */}
            <View style={styles.form}>
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
                autoComplete="name"
              />

              <Input
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />

              <Input
                label="Password"
                placeholder="Create a password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoComplete="password-new"
              />

              <Input
                label="Confirm Password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                autoComplete="password-new"
              />

              <Button
                title={loading ? 'Creating Account...' : 'Sign Up'}
                onPress={handleRegister}
                disabled={loading}
                style={styles.registerButton}
              />
            </View>

            {/* Login Link */}
            <View style={styles.footer}>
              <Text style={{ color: colors.text }}>
                Already have an account?{' '}
              </Text>
              <Link href="/(auth)/login" asChild>
                <Text style={[styles.loginLink, { color: colors.primary }]}>
                  Sign In
                </Text>
              </Link>
            </View>
          </Layout>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: spacing.xl,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  title: {
    marginBottom: spacing.sm,
  },
  subtitle: {
    opacity: 0.7,
  },
  errorContainer: {
    padding: spacing.md,
    borderRadius: 8,
    alignItems: 'center',
  },
  form: {
    width: '100%',
  },
  registerButton: {
    marginTop: spacing.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  loginLink: {
    fontWeight: '600',
  },
});
