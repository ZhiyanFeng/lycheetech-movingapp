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

export default function LoginScreen() {
  const router = useRouter();
  const colors = useColors();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
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
                Welcome Back
              </CustomText>
              <CustomText variant="body" style={[styles.subtitle, { color: colors.text }]}>
                Sign in to continue
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
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoComplete="password"
              />

              <Link href="/(auth)/forgot-password" asChild>
                <Text style={[styles.forgotPassword, { color: colors.primary }]}>
                  Forgot Password?
                </Text>
              </Link>

              <Button
                title={loading ? 'Signing In...' : 'Sign In'}
                onPress={handleLogin}
                disabled={loading}
                style={styles.loginButton}
              />
            </View>

            {/* Register Link */}
            <View style={styles.footer}>
              <Text style={{ color: colors.text }}>
                Don't have an account?{' '}
              </Text>
              <Link href="/(auth)/register" asChild>
                <Text style={[styles.registerLink, { color: colors.primary }]}>
                  Sign Up
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
  forgotPassword: {
    textAlign: 'right',
    marginTop: spacing.sm,
    marginBottom: spacing.md,
    fontSize: 14,
  },
  loginButton: {
    marginTop: spacing.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  registerLink: {
    fontWeight: '600',
  },
});
