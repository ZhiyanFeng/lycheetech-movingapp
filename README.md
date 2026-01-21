# LycheeTech Moving App

A modern React Native application built with TypeScript, Expo, Redux Toolkit, and React Navigation.

## 📁 Project Structure

```
lycheetech-movingapp/
├── app/                          # Expo Router app directory
│   ├── (tabs)/                   # Tab navigation
│   ├── profile/                  # Profile section
│   ├── _layout.tsx              # Root layout
│   ├── modal.tsx                # Modal screen
│   └── +not-found.tsx           # 404 screen
│
├── src/                         # Source code
│   ├── components/              # React components
│   │   ├── common/              # Common components
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── ErrorMessage.tsx
│   │   │   └── index.ts
│   │   └── ui/                  # UI components
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Card.tsx
│   │       └── index.ts
│   │
│   ├── screens/                 # Screen components
│   │   ├── HomeScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   └── index.ts
│   │
│   ├── navigation/              # Navigation configuration
│   │   ├── AppNavigator.tsx
│   │   └── index.ts
│   │
│   ├── store/                   # Redux store
│   │   ├── slices/              # Redux slices
│   │   │   └── userSlice.ts
│   │   └── index.ts
│   │
│   ├── services/                # API services
│   │   ├── api.service.ts       # Base API service
│   │   └── auth.service.ts      # Auth service
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── useTheme.ts
│   │   ├── useKeyboard.ts
│   │   └── index.ts
│   │
│   ├── utils/                   # Utility functions
│   │   ├── helpers.ts           # Helper functions
│   │   └── storage.ts           # AsyncStorage utilities
│   │
│   ├── types/                   # TypeScript types
│   │   └── index.ts
│   │
│   ├── constants/               # App constants
│   │   └── index.ts
│   │
│   └── assets/                  # Static assets
│       ├── images/
│       └── fonts/
│
├── components/                  # Expo Router components
│   ├── ui/                      # UI components for Expo Router
│   │   ├── button/
│   │   ├── container/
│   │   ├── text/
│   │   └── layout/
│   └── ExternalLink.tsx
│
├── themes/                      # Theme configuration
│   ├── colors.ts
│   ├── sizes.ts
│   ├── spacing.ts
│   ├── styles.ts
│   ├── theme.d.ts
│   └── index.ts
│
├── hooks/                       # Hooks for Expo Router
│   └── useColors.ts
│
└── assets/                      # Root assets
    ├── images/
    └── fonts/
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac only) or Android Studio

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Running the App

```bash
# Start Expo development server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on Web
npm run web
```

## 📦 Required Dependencies

Install additional dependencies:

```bash
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-safe-area-contexts react-native-screens
npm install @react-native-async-storage/async-storage
npm install axios
npm install expo-web-browser
```

## 🏗️ Architecture

### State Management
- **Redux Toolkit**: Global state management
- **Redux Slices**: Modular state organization

### Navigation
- **Expo Router**: File-based routing
- **React Navigation**: Stack navigation

### Styling
- **Theme System**: Centralized theme configuration
- **Custom Hooks**: useTheme for dynamic theming

### API Layer
- **Axios**: HTTP client
- **API Service**: Centralized API calls with interceptors

## 📝 Key Features

- ✅ TypeScript support
- ✅ Redux Toolkit for state management
- ✅ React Navigation
- ✅ Custom UI components
- ✅ Theme support (Light/Dark mode)
- ✅ API service layer
- ✅ Custom hooks
- ✅ Utility functions
- ✅ Type definitions

## 🎨 Theming

The app supports light and dark themes. Theme configuration is located in:
- `themes/` directory for Expo Router
- `src/constants/index.ts` for traditional navigation

Use the `useTheme` hook to access theme values:

```typescript
import { useTheme } from '../hooks/useTheme';

const { colors, isDark } = useTheme();
```

## 🔧 Development

### Adding a New Screen

1. Create screen component in `src/screens/`
2. Export from `src/screens/index.ts`
3. Add route in `src/navigation/AppNavigator.tsx`

### Adding a New Redux Slice

1. Create slice in `src/store/slices/`
2. Add reducer to `src/store/index.ts`

### Creating Custom Components

1. Add component to `src/components/ui/` or `src/components/common/`
2. Export from respective `index.ts`

## 📄 License

This project is private and proprietary.

## 👥 Contributors

LycheeTech Team
