import { useColorScheme } from 'react-native';
import { COLORS } from '../constants';

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return {
    isDark,
    colors: {
      primary: COLORS.primary,
      secondary: COLORS.secondary,
      success: COLORS.success,
      warning: COLORS.warning,
      error: COLORS.error,
      background: isDark ? COLORS.background.dark : COLORS.background.light,
      text: isDark ? COLORS.text.dark : COLORS.text.light,
      border: isDark ? COLORS.border.dark : COLORS.border.light,
    },
  };
};
