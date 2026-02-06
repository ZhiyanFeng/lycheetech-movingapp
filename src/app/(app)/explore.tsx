import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Container, Text, Layout } from '../../components/ui';
import { useColors } from '../../hooks/useColors';
import { spacing } from '../../../themes';

export default function ExploreScreen() {
  const colors = useColors();

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Layout spacing={spacing.lg}>
          <Text variant="title">Explore Services</Text>

          <View style={[styles.serviceCard, { borderColor: colors.border }]}>
            <Text style={styles.serviceIcon}>🏠</Text>
            <Text variant="body" style={styles.serviceTitle}>Residential Moving</Text>
            <Text variant="caption" style={[styles.serviceDescription, { color: colors.text }]}>
              Complete home moving solutions
            </Text>
          </View>

          <View style={[styles.serviceCard, { borderColor: colors.border }]}>
            <Text style={styles.serviceIcon}>🏢</Text>
            <Text variant="body" style={styles.serviceTitle}>Commercial Moving</Text>
            <Text variant="caption" style={[styles.serviceDescription, { color: colors.text }]}>
              Office and business relocations
            </Text>
          </View>

          <View style={[styles.serviceCard, { borderColor: colors.border }]}>
            <Text style={styles.serviceIcon}>📦</Text>
            <Text variant="body" style={styles.serviceTitle}>Storage Solutions</Text>
            <Text variant="caption" style={[styles.serviceDescription, { color: colors.text }]}>
              Secure storage facilities
            </Text>
          </View>

          <View style={[styles.serviceCard, { borderColor: colors.border }]}>
            <Text style={styles.serviceIcon}>🎨</Text>
            <Text variant="body" style={styles.serviceTitle}>Packing Services</Text>
            <Text variant="caption" style={[styles.serviceDescription, { color: colors.text }]}>
              Professional packing assistance
            </Text>
          </View>
        </Layout>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingVertical: spacing.lg,
  },
  serviceCard: {
    padding: spacing.lg,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    gap: spacing.sm,
  },
  serviceIcon: {
    fontSize: 48,
    marginBottom: spacing.sm,
  },
  serviceTitle: {
    fontWeight: '600',
    fontSize: 18,
  },
  serviceDescription: {
    textAlign: 'center',
    opacity: 0.7,
  },
});
