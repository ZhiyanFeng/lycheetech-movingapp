import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { useColors } from '../../../hooks/useColors';

interface ContainerProps extends ViewProps {
  children: React.ReactNode;
}

export function Container({ children, style, ...props }: ContainerProps) {
  const colors = useColors();

  return (
    <View
      style={[styles.container, { backgroundColor: colors.background }, style]}
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
