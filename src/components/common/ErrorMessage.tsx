import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks';
import { FONT_SIZES, SPACING } from '../../constants';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: `${colors.error}20` }]}>
      <Text style={[styles.text, { color: colors.error }]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.md,
    borderRadius: 8,
    marginVertical: SPACING.sm,
  },
  text: {
    fontSize: FONT_SIZES.sm,
    textAlign: 'center',
  },
});
