import { useColorScheme } from 'react-native';
interface Colors {
  primary: string;
  background: string;
  text: string;
  border: string;
}
const lightColors: Colors = {
  primary: '#007AFF',
  background: '#FFFFFF',
  text: '#000000',
  border: '#E5E5E5',
};
const darkColors: Colors = {
  primary: '#0A84FF',
  background: '#000000',
  text: '#FFFFFF',
  border: '#38383A',
};
export function useColors(): Colors {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? darkColors : lightColors;
}
