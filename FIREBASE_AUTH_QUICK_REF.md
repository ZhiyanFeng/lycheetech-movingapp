# 🔥 Firebase Auth - Quick Reference

## Setup (One-Time)

```bash
# 1. Get google-services.json from Firebase Console
# 2. Place in: android/app/google-services.json
# 3. Rebuild
npx expo prebuild --clean
npx expo run:android
```

## Import Hook

```typescript
import { useAuth } from '../hooks';
```

## Usage Examples

### Check if User is Logged In

```typescript
const { user, loading } = useAuth();

if (loading) return <Spinner />;
if (!user) return <LoginPrompt />;

return <Text>Hello {user.email}</Text>;
```

### Sign Up

```typescript
const { signUp } = useAuth();

try {
  await signUp('user@email.com', 'password123');
  // Auto-navigates to app
} catch (error) {
  alert(error.message);
}
```

### Sign In

```typescript
const { signIn } = useAuth();

try {
  await signIn('user@email.com', 'password123');
  // Auto-navigates to app
} catch (error) {
  alert(error.message);
}
```

### Sign Out

```typescript
const { signOut } = useAuth();

try {
  await signOut();
  // Auto-navigates to login
} catch (error) {
  alert(error.message);
}
```

### Reset Password

```typescript
const { resetPassword } = useAuth();

try {
  await resetPassword('user@email.com');
  alert('Check your email!');
} catch (error) {
  alert(error.message);
}
```

### Access User Data

```typescript
const { user } = useAuth();

user.uid           // Unique ID
user.email         // Email address
user.displayName   // Display name (if set)
user.photoURL      // Photo URL (if set)
user.emailVerified // Verification status
```

## Common Patterns

### Protected Component

```typescript
export default function ProtectedScreen() {
  const { user } = useAuth();
  
  if (!user) return <Redirect href="/login" />;
  
  return <View>Protected Content</View>;
}
```

### Conditional Rendering

```typescript
const { user } = useAuth();

return (
  <View>
    {user ? (
      <Button title="Logout" onPress={signOut} />
    ) : (
      <Button title="Login" onPress={() => router.push('/login')} />
    )}
  </View>
);
```

### Loading State

```typescript
const { loading, user } = useAuth();

if (loading) {
  return <ActivityIndicator size="large" />;
}

return <Text>{user ? 'Logged In' : 'Logged Out'}</Text>;
```

## Files to Know

| File | Purpose |
|------|---------|
| `src/config/firebase.ts` | Firebase config |
| `src/contexts/AuthContext.tsx` | Auth logic |
| `src/hooks/useAuth.ts` | Easy access hook |
| `src/app/_layout.tsx` | AuthProvider wrapper |
| `src/app/index.tsx` | Auto-routing logic |

## Firebase Console

### Enable Auth
1. Go to console.firebase.google.com
2. Select project
3. Authentication → Sign-in method
4. Enable Email/Password

### View Users
1. Authentication → Users
2. See all registered users
3. Manually add/delete users

## Testing Credentials

Create test user in Firebase Console:
- Email: test@example.com
- Password: test123456

Or register directly in the app.

## Errors & Solutions

| Error | Solution |
|-------|----------|
| "No user found" | Check google-services.json location |
| "Auth not initialized" | Rebuild app after adding config |
| "Navigation error" | Ensure AuthProvider in _layout.tsx |
| Build fails | Run `npx expo prebuild --clean` |

## Auto-Navigation

The app automatically handles navigation:

```
Not Logged In → /(auth)/login
Logged In → /(app)/index
Sign Out → /(auth)/login
Sign In → /(app)/index
```

## Complete Docs

- **FIREBASE_AUTH_COMPLETE.md** - Full implementation summary
- **FIREBASE_AUTH_GUIDE.md** - Detailed usage guide
- **FIREBASE_AUTH_TESTING.md** - Testing scenarios
- **FIREBASE_AUTH_ARCHITECTURE.md** - System architecture

---

**Quick Start:** Add google-services.json → Rebuild → Test login! 🚀
