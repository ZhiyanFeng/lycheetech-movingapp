# Firebase Authentication Integration

This project uses Firebase Authentication for user management with React Context API.

## Setup

### 1. Firebase Configuration

The Firebase SDK is configured in `src/config/firebase.ts` using React Native Firebase packages:
- `@react-native-firebase/app`
- `@react-native-firebase/auth`

The configuration is loaded automatically from `google-services.json` (Android) and `GoogleService-Info.plist` (iOS).

### 2. Authentication Context

The `AuthContext` is located in `src/contexts/AuthContext.tsx` and provides:

- **`user`**: Current Firebase user object (or null if not authenticated)
- **`loading`**: Boolean indicating if auth state is being checked
- **`signIn(email, password)`**: Sign in with email and password
- **`signUp(email, password)`**: Create a new account
- **`signOut()`**: Sign out the current user
- **`resetPassword(email)`**: Send password reset email

### 3. Using Authentication

#### In any component:

```typescript
import { useAuth } from '../contexts';
// or
import { useAuth } from '../hooks';

export default function MyComponent() {
  const { user, signIn, signOut } = useAuth();

  return (
    <View>
      {user ? (
        <>
          <Text>Welcome {user.email}</Text>
          <Button title="Sign Out" onPress={signOut} />
        </>
      ) : (
        <Text>Please sign in</Text>
      )}
    </View>
  );
}
```

## Authentication Flow

1. **App Launch** → `src/app/index.tsx` checks auth state
2. **Not Authenticated** → Redirect to `/(auth)/login`
3. **Authenticated** → Redirect to `/(app)/`
4. **Auth State Changes** → Automatic navigation via listener

## Protected Routes

The app automatically redirects users based on authentication status:

- **Public routes**: `/(auth)/login`, `/(auth)/register`, `/(auth)/forgot-password`
- **Protected routes**: `/(app)/*` (all app screens)

## Features Implemented

### Login Screen (`src/app/(auth)/login.tsx`)
- Email/password authentication
- Error handling
- Loading states
- Automatic navigation on success

### Register Screen (`src/app/(auth)/register.tsx`)
- Create new account
- Password validation (min 6 characters)
- Password confirmation
- Error handling

### Forgot Password (`src/app/(auth)/forgot-password.tsx`)
- Send password reset email
- Success confirmation
- Error handling

### Profile Screen (`src/app/(app)/profile.tsx`)
- Display user email
- Display user initials in avatar
- Sign out functionality
- Confirmation dialog before sign out

## Firebase Console Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Enable **Email/Password** authentication:
   - Go to Authentication → Sign-in method
   - Enable Email/Password provider
4. Download configuration files:
   - **Android**: `google-services.json` → Place in `android/app/`
   - **iOS**: `GoogleService-Info.plist` → Place in `ios/YourApp/`

## Testing

### Create Test User

1. Go to Firebase Console → Authentication → Users
2. Click "Add user"
3. Enter email and password
4. Use these credentials to test login

### Or Register in App

1. Launch the app
2. Click "Sign Up"
3. Create a new account
4. Automatically signed in after registration

## Error Handling

All authentication methods include proper error handling:

```typescript
try {
  await signIn(email, password);
} catch (error) {
  // Error automatically displayed to user
  console.error(error.message);
}
```

Common Firebase errors are automatically formatted for user display.

## Additional Features

### Auth State Persistence

Firebase automatically persists authentication state:
- User stays logged in after app restart
- Session maintained across app launches

### User Profile

Access user data:

```typescript
const { user } = useAuth();

// Available properties:
user.uid          // Unique user ID
user.email        // User email
user.displayName  // Display name (if set)
user.photoURL     // Profile photo URL (if set)
user.emailVerified // Email verification status
```

## Next Steps

### Update User Profile

Add to `AuthContext.tsx`:

```typescript
const updateUserProfile = async (displayName: string, photoURL?: string) => {
  if (!firebaseAuth.currentUser) return;
  await firebaseAuth.currentUser.updateProfile({ displayName, photoURL });
};
```

### Email Verification

Add to `AuthContext.tsx`:

```typescript
const sendEmailVerification = async () => {
  if (!firebaseAuth.currentUser) return;
  await firebaseAuth.currentUser.sendEmailVerification();
};
```

### Social Authentication

Install additional packages:
```bash
npm install @react-native-firebase/auth
```

Add Google/Facebook sign-in methods to the context.

## Troubleshooting

### "No user signed in" error
- Check if Firebase is properly initialized
- Verify `google-services.json` is in correct location
- Rebuild the app after adding configuration files

### Navigation not working
- Ensure `AuthProvider` wraps entire app in `_layout.tsx`
- Check auth state listener in `index.tsx`

### Build errors
- Run `npx expo prebuild --clean`
- Clean Android build: `cd android && ./gradlew clean`
