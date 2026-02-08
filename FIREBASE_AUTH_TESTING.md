# Testing Firebase Authentication

## Prerequisites

1. **Firebase Project Setup**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project
   - Enable Email/Password authentication
   - Download `google-services.json` → Place in `android/app/`

2. **Rebuild Native App**
   ```bash
   npx expo prebuild --clean
   npx expo run:android
   ```

## Test Scenarios

### 1. User Registration

**Steps:**
1. Launch app → Should redirect to Login screen
2. Click "Sign Up"
3. Fill in the form:
   - Full Name: Test User
   - Email: test@example.com
   - Password: password123
   - Confirm Password: password123
4. Click "Create Account"

**Expected Result:**
- ✅ Account created in Firebase
- ✅ Automatically signed in
- ✅ Redirected to Home screen (/(app)/)
- ✅ User email visible in Profile tab

**Check Firebase Console:**
- Go to Authentication → Users
- New user should appear with the email

---

### 2. User Login

**Steps:**
1. Launch app (if logged out)
2. Enter credentials:
   - Email: test@example.com
   - Password: password123
3. Click "Sign In"

**Expected Result:**
- ✅ Successfully logged in
- ✅ Redirected to Home screen
- ✅ Auth state persisted

---

### 3. Password Reset

**Steps:**
1. On Login screen, click "Forgot Password?"
2. Enter email: test@example.com
3. Click "Reset Password"

**Expected Result:**
- ✅ Success message shown
- ✅ Email sent to the address
- ✅ Check inbox for reset link

**Check Email:**
- Password reset email from Firebase
- Click link to reset password

---

### 4. Auth State Persistence

**Steps:**
1. Sign in to the app
2. Close the app completely
3. Reopen the app

**Expected Result:**
- ✅ User remains logged in
- ✅ Redirected to Home screen (not Login)
- ✅ Profile shows user data

---

### 5. Sign Out

**Steps:**
1. Navigate to Profile tab
2. Scroll down
3. Click "Log Out"
4. Confirm in dialog

**Expected Result:**
- ✅ Confirmation dialog appears
- ✅ User signed out
- ✅ Redirected to Login screen
- ✅ Cannot access app screens without signing in

---

### 6. Protected Routes

**Steps:**
1. Sign out completely
2. Try to access app screens directly

**Expected Result:**
- ✅ Always redirected to Login screen
- ✅ Cannot access protected routes when logged out

---

### 7. Error Handling - Invalid Credentials

**Steps:**
1. On Login screen:
   - Email: test@example.com
   - Password: wrongpassword
2. Click "Sign In"

**Expected Result:**
- ✅ Error message displayed
- ✅ User stays on Login screen
- ✅ Error is user-friendly

---

### 8. Error Handling - Invalid Email

**Steps:**
1. On Register/Login screen:
   - Email: invalid-email
   - Password: password123
2. Click submit

**Expected Result:**
- ✅ Firebase validates email format
- ✅ Error message shown
- ✅ Form remains filled

---

### 9. Error Handling - Password Mismatch

**Steps:**
1. On Register screen:
   - Password: password123
   - Confirm Password: different123
2. Click "Create Account"

**Expected Result:**
- ✅ Error: "Passwords do not match"
- ✅ Form not submitted
- ✅ User can correct

---

### 10. Profile Display

**Steps:**
1. Sign in successfully
2. Navigate to Profile tab

**Expected Result:**
- ✅ User email displayed
- ✅ User initial/avatar shown
- ✅ Display name (if set) shown

---

## Manual Testing Checklist

- [ ] User can register a new account
- [ ] User can log in with correct credentials
- [ ] User cannot log in with incorrect credentials
- [ ] Password reset email is sent
- [ ] Auth state persists after app restart
- [ ] User can sign out
- [ ] Protected routes redirect to login when logged out
- [ ] Error messages are clear and helpful
- [ ] Loading states appear during async operations
- [ ] Profile displays user information correctly

## Automated Testing (Future)

Consider adding these tests:

```typescript
// Example test structure
describe('Authentication', () => {
  it('should register a new user', async () => {
    // Test registration flow
  });

  it('should login existing user', async () => {
    // Test login flow
  });

  it('should sign out user', async () => {
    // Test sign out
  });

  it('should persist auth state', async () => {
    // Test persistence
  });
});
```

## Debugging Tips

### Check Firebase Initialization

```typescript
// Add to src/config/firebase.ts
console.log('Firebase initialized:', firebaseAuth.app.name);
```

### Check Auth State Changes

```typescript
// Add to AuthContext.tsx in useEffect
console.log('Auth state changed:', user?.email || 'No user');
```

### Check Navigation

```typescript
// Add to src/app/index.tsx
console.log('Navigating to:', user ? '/(app)' : '/(auth)/login');
```

### Common Issues

1. **"No user found" error**
   - Firebase not initialized
   - Check google-services.json location
   - Rebuild app

2. **Navigation not working**
   - Check AuthProvider wraps app
   - Verify router is properly configured
   - Check console for errors

3. **Build errors**
   ```bash
   cd android && ./gradlew clean
   cd ..
   npx expo prebuild --clean
   npx expo run:android
   ```

## Firebase Console Checks

### During Testing:

1. **Authentication → Users**
   - New users appear here
   - Check last sign-in time
   - Verify email addresses

2. **Authentication → Sign-in method**
   - Email/Password should be enabled
   - Check any restrictions

3. **Authentication → Templates**
   - Verify password reset email template
   - Customize if needed

## Success Criteria

✅ All test scenarios pass
✅ No console errors
✅ Smooth user experience
✅ Error messages are helpful
✅ Navigation works correctly
✅ Auth state persists properly

## Next Steps After Testing

1. **Customize Error Messages**
   - Make errors more user-friendly
   - Add translations if needed

2. **Add Email Verification**
   - Send verification email after signup
   - Require verification before access

3. **Add Social Login**
   - Google Sign-In
   - Facebook Login
   - Apple Sign In

4. **Add User Profile Management**
   - Update display name
   - Update profile photo
   - Delete account

5. **Add Security Features**
   - Two-factor authentication
   - Biometric authentication
   - Session management

## Need Help?

Check these resources:
- [Firebase Auth Docs](https://firebase.google.com/docs/auth)
- [React Native Firebase](https://rnfirebase.io/)
- `FIREBASE_AUTH_GUIDE.md` in this project
- `FIREBASE_AUTH_ARCHITECTURE.md` for structure
