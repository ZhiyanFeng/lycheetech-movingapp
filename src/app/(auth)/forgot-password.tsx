import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { Container,Button, Input,  Layout } from '../../components/ui';
import { Text as CustomText } from '../../components/ui/text';
import { useColors } from '../../hooks/useColors';
import { spacing } from '../../../themes';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const colors = useColors();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleResetPassword = async () => {
    setError('');

    if (!email) {
      setError('Please enter your email');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 2000);
  };

  if (sent) {
    return (
      <Container>
        <View style={styles.centeredContent}>
          <Layout spacing={spacing.lg}>
            <View style={styles.successIcon}>
              <CustomText variant="title">✉️</CustomText>
            </View>
            <CustomText variant="title" style={styles.centeredText}>
              Check Your Email
            </CustomText>
            <CustomText variant="body" style={[styles.centeredText, { color: colors.text }]}>
              We've sent password reset instructions to {email}
            </CustomText>
            <Button
              title="Back to Login"
              onPress={() => router.push('/(auth)/login')}
              style={styles.button}
            />
          </Layout>
        </View>
      </Container>
    );
  }

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
                Forgot Password?
              </CustomText>
              <CustomText variant="body" style={[styles.subtitle, { color: colors.text }]}>
                Enter your email to reset your password
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

              <Button
                title={loading ? 'Sending...' : 'Reset Password'}
                onPress={handleResetPassword}
                disabled={loading}
                style={styles.button}
              />
            </View>

            {/* Back to Login */}
            <View style={styles.footer}>
              <Link href="/(auth)/login" asChild>
                <CustomText variant="body" style={{ color: colors.primary }}>
                  ← Back to Login
                </CustomText>
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
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  title: {
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    opacity: 0.7,
    textAlign: 'center',
  },
  errorContainer: {
    padding: spacing.md,
    borderRadius: 8,
    alignItems: 'center',
  },
  form: {
    width: '100%',
  },
  button: {
    marginTop: spacing.md,
  },
  footer: {
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  successIcon: {
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  centeredText: {
    textAlign: 'center',
  },
});
