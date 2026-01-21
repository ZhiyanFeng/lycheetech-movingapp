# 🚀 Quick Start Guide

## Prerequisites Checklist

- ✅ Node.js v18+ installed
- ✅ npm or yarn installed
- ✅ Expo CLI installed globally: `npm install -g expo-cli`
- ✅ iOS Simulator (Mac) or Android Studio installed

## 1. Install Dependencies

```bash
npm install
```

## 2. Start Development Server

```bash
npm start
```

This will open the Expo Developer Tools in your browser.

## 3. Run on Device/Simulator

### iOS (Mac only)
```bash
npm run ios
```

### Android
```bash
npm run android
```

### Web
```bash
npm run web
```

### Mobile Device
1. Install **Expo Go** app on your phone
2. Scan the QR code from the terminal

## 4. Explore the App

The app includes:
- ✅ Home screen with navigation
- ✅ Login screen with form validation
- ✅ Profile screen with user info
- ✅ Profile settings page (Expo Router)
- ✅ Theme support (light/dark mode)

## 5. Development Workflow

### File Structure
- Add new screens in `/src/screens/`
- Add new components in `/src/components/`
- Add new routes in `/src/navigation/AppNavigator.tsx`
- Add Expo Router pages in `/app/`

### Redux State Management
- Create slices in `/src/store/slices/`
- Use hooks: `useAppSelector`, `useAppDispatch`

### API Integration
- Add services in `/src/services/`
- Use `apiService` for HTTP calls

### Styling
- Use `useTheme()` hook for colors
- Import constants from `/src/constants/`

## 6. Common Commands

```bash
# Start with cache cleared
npx expo start -c

# Type checking
npx tsc --noEmit

# Run on specific device
npx expo start --ios
npx expo start --android

# Build for production
npx expo build:ios
npx expo build:android
```

## 7. Project Architecture

### Traditional Navigation (React Navigation)
- Entry: `App.tsx`
- Navigator: `src/navigation/AppNavigator.tsx`
- Screens: `src/screens/`

### Expo Router (File-based)
- Entry: `app/_layout.tsx`
- Routes: Automatically generated from `/app` folder structure
- Screens: Create `.tsx` files in `/app/`

## 8. Next Steps

1. **Customize Theme**: Edit `/src/constants/index.ts`
2. **Add Authentication**: Implement in `/src/services/auth.service.ts`
3. **Add More Screens**: Create in `/src/screens/`
4. **Configure API**: Update `API_BASE_URL` in constants
5. **Add Navigation**: Update `/src/navigation/AppNavigator.tsx`

## 9. Troubleshooting

### Metro bundler issues
```bash
npx expo start -c
```

### Node modules issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### iOS build issues
```bash
cd ios && pod install && cd ..
```

### TypeScript errors
```bash
npx tsc --noEmit
```

## 10. Useful Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Need Help?

Check out:
- `README.md` - Full documentation
- `STRUCTURE.md` - Project structure details
- `INSTALLATION.md` - Installation guide

---

**Happy Coding! 🎉**
