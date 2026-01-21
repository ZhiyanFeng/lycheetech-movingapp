# Project Structure Overview

## 📂 Complete Folder Structure

```
lycheetech-movingapp/
│
├── 📁 app/                                    # Expo Router directory
│   ├── 📁 (tabs)/                            # Tab-based navigation
│   │   ├── _layout.tsx                       # Tab layout configuration
│   │   ├── index.tsx                         # First tab
│   │   └── two.tsx                           # Second tab
│   │
│   ├── 📁 profile/                           # Profile section
│   │   ├── _layout.tsx                       # Profile stack layout
│   │   ├── index.tsx                         # Main profile screen
│   │   └── settings.tsx                      # Settings screen
│   │
│   ├── _layout.tsx                           # Root layout
│   ├── modal.tsx                             # Modal screen
│   └── +not-found.tsx                        # 404 page
│
├── 📁 src/                                    # Main source directory
│   │
│   ├── 📁 components/                        # Reusable components
│   │   ├── 📁 common/                        # Common components
│   │   │   ├── LoadingSpinner.tsx            # Loading indicator
│   │   │   ├── ErrorMessage.tsx              # Error display
│   │   │   └── index.ts                      # Exports
│   │   │
│   │   └── 📁 ui/                            # UI components
│   │       ├── Button.tsx                    # Custom button
│   │       ├── Input.tsx                     # Custom input
│   │       ├── Card.tsx                      # Card container
│   │       └── index.ts                      # Exports
│   │
│   ├── 📁 screens/                           # Screen components
│   │   ├── HomeScreen.tsx                    # Home screen
│   │   ├── LoginScreen.tsx                   # Login screen
│   │   ├── ProfileScreen.tsx                 # Profile screen
│   │   └── index.ts                          # Exports
│   │
│   ├── 📁 navigation/                        # Navigation setup
│   │   ├── AppNavigator.tsx                  # Main navigator
│   │   └── index.ts                          # Exports
│   │
│   ├── 📁 store/                             # Redux store
│   │   ├── 📁 slices/                        # Redux slices
│   │   │   └── userSlice.ts                  # User state slice
│   │   └── index.ts                          # Store configuration
│   │
│   ├── 📁 services/                          # API services
│   │   ├── api.service.ts                    # Base API service
│   │   └── auth.service.ts                   # Authentication service
│   │
│   ├── 📁 hooks/                             # Custom hooks
│   │   ├── useTheme.ts                       # Theme hook
│   │   ├── useKeyboard.ts                    # Keyboard hook
│   │   └── index.ts                          # Exports
│   │
│   ├── 📁 utils/                             # Utility functions
│   │   ├── helpers.ts                        # Helper functions
│   │   └── storage.ts                        # Storage utilities
│   │
│   ├── 📁 types/                             # TypeScript types
│   │   └── index.ts                          # Type definitions
│   │
│   ├── 📁 constants/                         # App constants
│   │   └── index.ts                          # Constants & config
│   │
│   └── 📁 assets/                            # Source assets
│       ├── 📁 images/                        # Images
│       │   └── README.md
│       └── 📁 fonts/                         # Custom fonts
│           └── README.md
│
├── 📁 components/                            # Expo Router components
│   ├── 📁 ui/                                # UI components
│   │   ├── 📁 button/
│   │   │   └── index.tsx
│   │   ├── 📁 container/
│   │   │   └── index.tsx
│   │   ├── 📁 text/
│   │   │   └── index.tsx
│   │   └── 📁 layout/
│   │       └── index.tsx
│   └── ExternalLink.tsx                      # External link component
│
├── 📁 themes/                                # Theme system
│   ├── colors.ts                             # Color definitions
│   ├── sizes.ts                              # Size scales
│   ├── spacing.ts                            # Spacing system
│   ├── styles.ts                             # Common styles
│   ├── theme.d.ts                            # Theme types
│   └── index.ts                              # Exports
│
├── 📁 hooks/                                 # Expo Router hooks
│   └── useColors.ts                          # Colors hook
│
├── 📁 assets/                                # Root assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
│
├── 📄 App.tsx                                # Main app entry (traditional)
├── 📄 index.ts                               # Expo entry point
├── 📄 app.json                               # Expo configuration
├── 📄 package.json                           # Dependencies
├── 📄 tsconfig.json                          # TypeScript config
├── 📄 .gitignore                             # Git ignore rules
├── 📄 .env.example                           # Environment variables template
├── 📄 README.md                              # Project documentation
└── 📄 INSTALLATION.md                        # Installation guide

```

## 🎯 Key Directories Explained

### `/app` - Expo Router
- File-based routing system
- Automatic navigation generation
- Supports nested routes and layouts

### `/src` - Main Application Code
- **components**: Reusable React components
- **screens**: Full-page screen components
- **navigation**: Navigation configuration
- **store**: Redux state management
- **services**: API and external service integrations
- **hooks**: Custom React hooks
- **utils**: Utility functions and helpers
- **types**: TypeScript type definitions
- **constants**: App-wide constants

### `/themes` - Theme System
- Centralized styling configuration
- Supports light/dark modes
- Consistent design tokens

## 🔄 Dual Navigation System

This project supports **both** navigation approaches:

1. **Expo Router** (`/app` directory) - Modern file-based routing
2. **React Navigation** (`/src/navigation`) - Traditional stack navigation

You can use either or both depending on your needs!

## 📦 Component Organization

### UI Components (`/src/components/ui/`)
- Button, Input, Card
- Reusable, styled components
- Accept props for customization

### Common Components (`/src/components/common/`)
- LoadingSpinner, ErrorMessage
- App-wide shared components
- Business logic components

## 🎨 Styling Strategy

1. **Theme-based**: Use `useTheme()` hook
2. **Consistent**: Follow spacing/sizing constants
3. **Responsive**: Support light/dark modes
4. **Type-safe**: TypeScript for all styles

## 🚀 Getting Started

1. Review `INSTALLATION.md` for setup
2. Check `README.md` for features
3. Explore `/src/screens` for examples
4. Customize `/src/constants` for your needs
