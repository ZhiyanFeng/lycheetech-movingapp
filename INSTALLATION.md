# Installation Guide

## Step 1: Install Core Dependencies

These are already in package.json, run:

```bash
npx expo install
```

## Step 2: Install Additional Required Dependencies

```bash
# Navigation dependencies
npx expo install @react-navigation/native @react-navigation/native-stack

# Async Storage for data persistence
npx expo install @react-native-async-storage/async-storage

# HTTP client
npx expo install axios

# Web browser for external links
npx expo install expo-web-browser
```

## Step 3: Install Development Dependencies (Optional)

```bash
# ESLint for code quality
npx expo install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Prettier for code formatting
npx expo install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

## Complete Installation Command

Run this single command to install all dependencies at once:

```bash
npx expo install && npx expo install @react-navigation/native @react-navigation/native-stack @react-native-async-storage/async-storage axios expo-web-browser
```

## Verify Installation

After installation, verify everything is working:

```bash
npx expo start
```

## Troubleshooting

### Clear Cache

If you encounter issues, try clearing the cache:

```bash
npx expo start -c
```

### Reset Dependencies

If problems persist:

```bash
rm -rf node_modules package-lock.json
npx expo install
```

### iOS Specific

```bash
cd ios && pod install && cd ..
```

## Environment Setup

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update the values in `.env` as needed for your environment.
