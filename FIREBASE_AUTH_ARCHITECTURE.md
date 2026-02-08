# Firebase Authentication Architecture

## Component Hierarchy

```
App Entry (index.ts)
  └─> expo-router/entry
      └─> Root Layout (src/app/_layout.tsx)
          ├─> Redux Provider
          │   └─> AuthProvider (Firebase Auth Context)
          │       └─> Slot (Expo Router)
          │           └─> Initial Route (src/app/index.tsx)
          │               │
          │               ├─> Authenticated? 
          │               │   ├─> YES → /(app)/* screens
          │               │   └─> NO  → /(auth)/* screens
```

## Authentication Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    App Initialization                        │
│                                                              │
│  1. Firebase SDK initialized (src/config/firebase.ts)       │
│  2. AuthProvider mounted (src/contexts/AuthContext.tsx)     │
│  3. Auth state listener starts                              │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│              Auth State Check (index.tsx)                    │
│                                                              │
│  useAuth() → { user, loading }                              │
└───────┬──────────────────────────────────────┬──────────────┘
        │                                      │
        │ user === null                       │ user !== null
        │                                      │
        ▼                                      ▼
┌──────────────────┐                  ┌──────────────────┐
│  Auth Screens    │                  │   App Screens    │
│  /(auth)/*       │                  │   /(app)/*       │
│                  │                  │                  │
│  • login         │                  │  • index (home)  │
│  • register      │                  │  • explore       │
│  • forgot-pwd    │                  │  • bookings      │
│                  │                  │  • profile       │
└────────┬─────────┘                  └─────────┬────────┘
         │                                      │
         │ signIn/signUp                       │ signOut
         │                                      │
         └──────────────┬───────────────────────┘
                        │
                        ▼
                ┌───────────────┐
                │  Auth Context │
                │               │
                │  • signIn()   │
                │  • signUp()   │
                │  • signOut()  │
                │  • resetPwd() │
                └───────┬───────┘
                        │
                        ▼
                ┌───────────────┐
                │  Firebase SDK │
                │               │
                │  @react-native│
                │  -firebase    │
                └───────────────┘
```

## Context API Structure

```
AuthContext
  │
  ├─> State
  │   ├─> user: FirebaseAuthTypes.User | null
  │   └─> loading: boolean
  │
  ├─> Methods
  │   ├─> signIn(email, password): Promise<void>
  │   ├─> signUp(email, password): Promise<void>
  │   ├─> signOut(): Promise<void>
  │   └─> resetPassword(email): Promise<void>
  │
  └─> Auth State Listener
      └─> onAuthStateChanged() → Updates user state automatically
```

## File Relationships

```
src/
├── config/
│   └── firebase.ts ──────────┐
│                              │
├── contexts/                  │
│   ├── AuthContext.tsx ◄──────┤ (imports Firebase)
│   └── index.ts               │
│                              │
├── hooks/                     │
│   ├── useAuth.ts ◄───────────┤ (re-exports AuthContext hook)
│   └── index.ts               │
│                              │
├── app/                       │
│   ├── _layout.tsx ◄──────────┤ (wraps app with AuthProvider)
│   │                          │
│   ├── index.tsx ◄─────────────┤ (uses useAuth for routing)
│   │                          │
│   ├── (auth)/                │
│   │   ├── login.tsx ◄────────┤ (uses useAuth.signIn)
│   │   ├── register.tsx ◄─────┤ (uses useAuth.signUp)
│   │   └── forgot-password ◄──┤ (uses useAuth.resetPassword)
│   │                          │
│   └── (app)/                 │
│       ├── index.tsx          │
│       ├── explore.tsx        │
│       ├── bookings.tsx       │
│       └── profile.tsx ◄──────┘ (uses useAuth.signOut)
```

## Data Flow

```
User Action → Component → useAuth() → AuthContext → Firebase SDK → Firebase Cloud
                  ▲                                                        │
                  │                                                        │
                  └────────── Auth State Change ◄─────────────────────────┘
                              (Automatic via listener)
```

## Usage Example in Any Component

```typescript
import { useAuth } from '../hooks'; // or from '../contexts'

export default function MyComponent() {
  const { user, loading, signIn, signOut } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <LoginPrompt onLogin={signIn} />;
  }

  return (
    <View>
      <Text>Welcome, {user.email}</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}
```

## Key Benefits

1. **Centralized Auth Logic** - All authentication in one place
2. **Automatic State Management** - Firebase listener updates context
3. **Easy to Use** - Just import `useAuth()` hook
4. **Type Safe** - Full TypeScript support
5. **Automatic Navigation** - Route changes based on auth state
6. **Persistent Sessions** - Firebase handles session storage

## Security Features

- Passwords handled securely by Firebase
- Sessions automatically managed
- Token refresh handled by Firebase SDK
- No sensitive data stored in app state
- All network calls encrypted (HTTPS)
