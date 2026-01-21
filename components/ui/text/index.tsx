import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';
import { useColors } from '../../../hooks/useColors';

interface CustomTextProps extends TextProps {
  variant?: 'body' | 'title' | 'caption';
}

export function Text({ variant = 'body', style, ...props }: CustomTextProps) {
  const colors = useColors();

  const variantStyle = {
    body: styles.body,
    title: styles.title,
    caption: styles.caption,
  }[variant];

  return (
    <RNText
      style={[variantStyle, { color: colors.text }, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  body: {
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 12,
  },
});
