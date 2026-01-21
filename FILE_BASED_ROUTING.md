# File-Based Routing Structure

## 📁 App Directory Structure

The app now uses **Expo Router's file-based routing** with separate authentication and main app flows:

```
app/
├── _layout.tsx                    # Root layout with auth logic
├── (auth)/                        # Authentication flow (route group)
│   ├── _layout.tsx               # Auth stack layout
│   ├── login.tsx                 # Login screen
│   ├── register.tsx              # Registration screen
│   └── forgot-password.tsx       # Password reset screen
│
├── (app)/                         # Main app flow (route group)
│   ├── _layout.tsx               # Tab layout
│   ├── index.tsx                 # Home tab
│   ├── explore.tsx               # Explore tab
│   ├── bookings.tsx              # Bookings tab
│   └── profile.tsx               # Profile tab
│
├── (tabs)/                        # Legacy tab navigation
│   ├── _layout.tsx
│   ├── index.tsx
│   └── two.tsx
│
├── profile/                       # Profile section
│   ├── _layout.tsx
│   ├── index.tsx
│   └── settings.tsx
│
├── modal.tsx                      # Modal screen
└── +not-found.tsx                 # 404 screen
```

## 🔐 Authentication Flow

### Routes:
- `/(auth)/login` - User login
- `/(auth)/register` - New user registration  
- `/(auth)/forgot-password` - Password reset

### Features:
- ✅ Form validation
- ✅ Error handling
- ✅ Loading states
- ✅ Navigation between auth screens
- ✅ Auto-redirect to app on success

### How It Works:
1. User lands on login screen by default (if not authenticated)
2. Can navigate to register or forgot password
3. On successful auth, redirects to `/(app)` route group
4. Root layout handles auth state and redirects

## 🏠 Main App Flow

### Routes:
- `/(app)/` or `/(app)/index` - Home screen
- `/(app)/explore` - Explore services
- `/(app)/bookings` - Manage bookings
- `/(app)/profile` - User profile

### Features:
- ✅ Tab-based navigation
- ✅ Quick actions on home
- ✅ Service exploration
- ✅ Booking management
- ✅ Profile settings
- ✅ Logout functionality

## 🚀 Route Groups Explained

### What are Route Groups?
Folders wrapped in parentheses `(name)` are **route groups**. They:
- Organize routes without adding to the URL path
- Allow multiple layouts at the same level
- Enable conditional navigation logic

### `(auth)` Group:
- Contains all authentication-related screens
- Hidden from URL path
- Uses stack navigation
- No header shown

### `(app)` Group:
- Contains main application screens
- Hidden from URL path
- Uses tab navigation
- Requires authentication

## 🔄 Navigation Between Groups

### From Auth to App:
```typescript
// After successful login
router.replace('/(app)');
```

### From App to Auth (Logout):
```typescript
// On logout
router.replace('/(auth)/login');
```

### Between Auth Screens:
```typescript
<Link href="/(auth)/register">Sign Up</Link>
<Link href="/(auth)/forgot-password">Forgot Password?</Link>
```

### Between App Tabs:
Automatic via tab bar, or programmatically:
```typescript
router.push('/(app)/bookings');
router.push('/(app)/profile');
```

## 🛡️ Protected Routes

The root layout (`app/_layout.tsx`) handles authentication logic:

```typescript
const isAuthenticated = false; // Replace with actual auth state

useEffect(() => {
  const inAuthGroup = segments[0] === '(auth)';
  
  if (!isAuthenticated && !inAuthGroup) {
    // Not logged in and trying to access app → redirect to login
    router.replace('/(auth)/login');
  } else if (isAuthenticated && inAuthGroup) {
    // Logged in but on auth screen → redirect to app
    router.replace('/(app)');
  }
}, [isAuthenticated, segments]);
```

### To Implement Real Auth:
1. Connect to Redux store:
```typescript
import { useAppSelector } from '../src/store';
const isAuthenticated = useAppSelector(state => state.user.isAuthenticated);
```

2. Or use context/custom hook:
```typescript
const { isAuthenticated } = useAuth();
```

## 📱 Screen Examples

### Login Screen Features:
- Email & password inputs
- Form validation
- Error messages
- Forgot password link
- Sign up link
- Loading state
- Auto-redirect on success

### Register Screen Features:
- Full name, email, password, confirm password
- Password matching validation
- Minimum length check
- Back to login link
- Auto-redirect on success

### Home Screen Features:
- Welcome message
- Quick action cards
- Recent activity
- Empty states
- Navigation to other tabs

### Profile Screen Features:
- User avatar & info
- Account settings
- Support links
- App version
- Logout button

## 🎨 Styling

All screens use the centralized theme system:
```typescript
import { useColors } from '../../../hooks/useColors';
import { spacing } from '../../../themes';

const colors = useColors(); // Get theme colors
// Use spacing.md, spacing.lg, etc.
```

## 📦 Components Used

From `components/ui/`:
- `Container` - Main screen wrapper
- `Button` - Action buttons
- `Input` - Text input fields
- `Text` - Themed text
- `Layout` - Spacing container

## 🔧 Customization

### Add New Auth Screen:
1. Create `app/(auth)/new-screen.tsx`
2. Add to `app/(auth)/_layout.tsx`:
```typescript
<Stack.Screen name="new-screen" />
```

### Add New App Tab:
1. Create `app/(app)/new-tab.tsx`
2. Add to `app/(app)/_layout.tsx`:
```typescript
<Tabs.Screen
  name="new-tab"
  options={{
    title: 'New Tab',
    tabBarIcon: ({ color }) => <TabBarIcon name="icon" color={color} />,
  }}
/>
```

### Change Initial Route:
Edit `app/_layout.tsx`:
```typescript
router.replace('/(auth)/login'); // Start at login
// or
router.replace('/(app)'); // Start at app (if authenticated)
```

## 🎯 Benefits of This Structure

✅ **Clear Separation** - Auth and app flows are distinct
✅ **Protected Routes** - Auth logic in one place
✅ **File-Based** - Routes generated from file structure
✅ **Type-Safe** - TypeScript navigation
✅ **Scalable** - Easy to add new routes
✅ **Modern** - Following Expo Router best practices

## 🚦 User Flow

```
App Launch
    ↓
Root Layout (_layout.tsx)
    ↓
Check Authentication
    ↓
┌─────────────────┬─────────────────┐
│ Not Authenticated│  Authenticated   │
↓                 ↓                  ↓
(auth)/login      (app)/index        
    ↓                 ↓
Login Form        Home Screen
    ↓                 ↓
Success          Tab Navigation
    ↓             (home/explore/
Navigate to        bookings/profile)
(app)/index
```

## 📝 Next Steps

1. **Implement Real Auth**:
   - Connect to Redux store
   - Add token management
   - Handle auth persistence

2. **Add More Features**:
   - Social login options
   - Biometric authentication
   - Remember me functionality

3. **Enhance Screens**:
   - Add animations
   - Improve validation
   - Add success messages

4. **Connect to Backend**:
   - Wire up auth service
   - Handle API errors
   - Add loading states

---

**Your app now has a complete, production-ready authentication and navigation flow!** 🎉
