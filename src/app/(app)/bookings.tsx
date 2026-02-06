import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Container,Text, Button, Layout } from '../../components/ui';
import { useColors } from '../../hooks/useColors';
import { spacing } from '../../../themes';

export default function BookingsScreen() {
  const colors = useColors();

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Layout spacing={spacing.lg}>
          <View style={styles.header}>
            <Text variant="title">My Bookings</Text>
            <Button
              title="+ New Booking"
              onPress={() => {}}
              style={styles.newBookingButton}
            />
          </View>

          {/* Empty State */}
          <View style={[styles.emptyState, { borderColor: colors.border }]}>
            <Text style={styles.emptyIcon}>📅</Text>
            <Text variant="body" style={styles.emptyTitle}>No Bookings Yet</Text>
            <Text variant="caption" style={[styles.emptyDescription, { color: colors.text }]}>
              Your scheduled moves will appear here
            </Text>
            <Button
              title="Create Your First Booking"
              onPress={() => {}}
              style={styles.emptyButton}
            />
          </View>

          {/* Upcoming Section */}
          <View style={styles.section}>
            <Text variant="body" style={styles.sectionTitle}>Upcoming</Text>
            <Text variant="caption" style={{ color: colors.text, opacity: 0.7 }}>
              No upcoming bookings
            </Text>
          </View>

          {/* Past Section */}
          <View style={styles.section}>
            <Text variant="body" style={styles.sectionTitle}>Past</Text>
            <Text variant="caption" style={{ color: colors.text, opacity: 0.7 }}>
              No past bookings
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  newBookingButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  emptyState: {
    padding: spacing.xl,
    borderRadius: 12,
    borderWidth: 2,
    borderStyle: 'dashed',
    alignItems: 'center',
    gap: spacing.sm,
    marginVertical: spacing.lg,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: spacing.md,
  },
  emptyTitle: {
    fontWeight: '600',
    fontSize: 18,
  },
  emptyDescription: {
    textAlign: 'center',
    opacity: 0.7,
  },
  emptyButton: {
    marginTop: spacing.md,
  },
  section: {
    marginTop: spacing.xl,
  },
  sectionTitle: {
    fontWeight: '600',
    marginBottom: spacing.sm,
  },
});
