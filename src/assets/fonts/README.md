# Fonts

Place your custom font files here.

## Supported formats:
- TTF (TrueType Font)
- OTF (OpenType Font)

## Usage:
1. Add font files to this directory
2. Load fonts using `expo-font` or `react-native-vector-icons`
3. Reference in your styles

## Example:
```typescript
import * as Font from 'expo-font';

await Font.loadAsync({
  'CustomFont-Regular': require('./CustomFont-Regular.ttf'),
  'CustomFont-Bold': require('./CustomFont-Bold.ttf'),
});
```
