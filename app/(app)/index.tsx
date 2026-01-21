import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Container } from '../../components/ui/container';
import { Text } from '../../components/ui/text';
import { Button } from '../../components/ui/button';
import { Layout } from '../../components/ui/layout';
import { useColors } from '../../hooks/useColors';
import { spacing } from '../../themes';

export default function HomeScreen() {
  const router = useRouter();
  const colors = useColors();

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Layout spacing={spacing.lg}>
          {/* Welcome Section */}
          <View style={styles.welcomeSection}>
            <Text variant="title" style={styles.welcomeTitle}>
              Welcome to LycheeTech
            </Text>
            <Text variant="body" style={[styles.welcomeSubtitle, { color: colors.text }]}>
              Your moving partner
            </Text>
          </View>

          {/* Quick Actions */}
          <View style={styles.section}>
            <Text variant="title" style={styles.sectionTitle}>
              Quick Actions
            </Text>

            <View style={styles.actionGrid}>
              <View style={[styles.actionCard, { backgroundColor: colors.primary + '20' }]}>
                <Text style={styles.actionIcon}>📦</Text>
                <Text variant="body" style={styles.actionTitle}>New Booking</Text>
                <Text variant="caption" style={styles.actionDescription}>
                  Schedule a move
                </Text>
              </View>

              <View style={[styles.actionCard, { backgroundColor: colors.primary + '20' }]}>
                <Text style={styles.actionIcon}>🚚</Text>
                <Text variant="body" style={styles.actionTitle}>Track Move</Text>
                <Text variant="caption" style={styles.actionDescription}>
                  Track in real-time
                </Text>
              </View>

              <View style={[styles.actionCard, { backgroundColor: colors.primary + '20' }]}>
                <Text style={styles.actionIcon}>💬</Text>
                <Text variant="body" style={styles.actionTitle}>Support</Text>
                <Text variant="caption" style={styles.actionDescription}>
                  Get help now
                </Text>
              </View>

              <View style={[styles.actionCard, { backgroundColor: colors.primary + '20' }]}>
                <Text style={styles.actionIcon}>📋</Text>
                <Text variant="body" style={styles.actionTitle}>History</Text>
                <Text variant="caption" style={styles.actionDescription}>
                  View past moves
                </Text>
              </View>
            </View>
          </View>

          {/* Recent Activity */}
          <View style={styles.section}>
            <Text variant="title" style={styles.sectionTitle}>
              Recent Activity
            </Text>
            <View style={[styles.emptyState, { borderColor: colors.border }]}>
              <Text variant="body" style={{ color: colors.text }}>
                No recent activity
              </Text>
              <Button
                title="Book Your First Move"
                onPress={() => router.push('/(app)/bookings')}
                style={styles.emptyStateButton}
              />
            </View>
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
  welcomeSection: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  welcomeTitle: {
    marginBottom: spacing.sm,
  },
  welcomeSubtitle: {
    opacity: 0.7,
  },
  section: {
    marginTop: spacing.lg,
  },
  sectionTitle: {
    marginBottom: spacing.md,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  actionCard: {
    flex: 1,
    minWidth: '45%',
    padding: spacing.md,
    borderRadius: 12,
    alignItems: 'center',
    gap: spacing.xs,
  },
  actionIcon: {
    fontSize: 32,
    marginBottom: spacing.xs,
  },
  actionTitle: {
    fontWeight: '600',
  },
  actionDescription: {
    opacity: 0.7,
    textAlign: 'center',
  },
  emptyState: {
    padding: spacing.xl,
    borderRadius: 12,
    borderWidth: 2,
    borderStyle: 'dashed',
    alignItems: 'center',
    gap: spacing.md,
  },
  emptyStateButton: {
    marginTop: spacing.md,
  },
});
