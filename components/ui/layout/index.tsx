import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

interface LayoutProps extends ViewProps {
  direction?: 'row' | 'column';
  spacing?: number;
  children: React.ReactNode;
}

export function Layout({
  direction = 'column',
  spacing = 16,
  children,
  style,
  ...props
}: LayoutProps) {
  return (
    <View
      style={[
        styles.layout,
        { flexDirection: direction, gap: spacing },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});
