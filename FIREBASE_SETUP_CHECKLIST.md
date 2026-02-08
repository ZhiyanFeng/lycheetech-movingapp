# ✅ Firebase Authentication - Setup Checklist

## 🚀 Quick Setup (Follow in Order)

### Step 1: Firebase Console Setup

- [ ] Go to https://console.firebase.google.com/
- [ ] Select your project (or create new one)
- [ ] Click **Build** → **Authentication** → **Get Started**
- [ ] Click **Sign-in method** tab
- [ ] Find **Email/Password** provider
- [ ] Click **Enable** toggle
- [ ] Click **Save**

---

### Step 2: Download Configuration File

#### For Android:
- [ ] In Firebase Console, go to **Project Settings** (⚙️ icon)
- [ ] Scroll to **Your apps** section
- [ ] Find your Android app (or click **Add app** if not exists)
- [ ] Click **Download google-services.json**
- [ ] Place file in: `android/app/google-services.json`
- [ ] Verify path is correct: `android/app/google-services.json` ✓

#### For iOS (if needed):
- [ ] Click iOS app icon
- [ ] Download **GoogleService-Info.plist**
- [ ] Place in: `ios/YourAppName/GoogleService-Info.plist`

---

### Step 3: Rebuild Native App

```bash
# Clean and rebuild
npx expo prebuild --clean

# Run on Android
npx expo run:android
```

- [ ] Run prebuild command
- [ ] Run android command
- [ ] App launches successfully

---

### Step 4: Test Authentication

#### Create Test User in Firebase Console:
- [ ] Go to **Authentication** → **Users** tab
- [ ] Click **Add user**
- [ ] Email: test@example.com
- [ ] Password: test123456
- [ ] Click **Add user**

#### Test in App:
- [ ] Launch app
- [ ] Should see **Login screen**
- [ ] Enter test credentials
- [ ] Click **Sign In**
- [ ] Should navigate to **Home screen** ✓

---

### Step 5: Test Registration

- [ ] On Login screen, click **Sign Up**
- [ ] Enter new email (e.g., newuser@example.com)
- [ ] Enter password (min 6 characters)
- [ ] Confirm password
- [ ] Click **Create Account**
- [ ] Should auto-login and navigate to Home ✓
- [ ] Check Firebase Console → Users (new user appears)

---

### Step 6: Test Sign Out

- [ ] Navigate to **Profile** tab
- [ ] Scroll down
- [ ] Click **Log Out**
- [ ] Confirm in dialog
- [ ] Should navigate to **Login screen** ✓
- [ ] Try accessing app screens (should redirect to login)

---

### Step 7: Test Password Reset

- [ ] On Login screen, click **Forgot Password?**
- [ ] Enter email address
- [ ] Click **Reset Password**
- [ ] Check email inbox
- [ ] Reset email received ✓
- [ ] Click link in email
- [ ] Create new password
- [ ] Login with new password ✓

---

### Step 8: Test Persistence

- [ ] Sign in to app
- [ ] Close app completely
- [ ] Reopen app
- [ ] Should remain logged in ✓
- [ ] Should show Home screen (not Login)

---

## 🔍 Verification Checklist

### Code Implementation:
- [x] Firebase config created (`src/config/firebase.ts`)
- [x] AuthContext created (`src/contexts/AuthContext.tsx`)
- [x] useAuth hook created (`src/hooks/useAuth.ts`)
- [x] Root layout wrapped with AuthProvider
- [x] Login screen uses Firebase signIn
- [x] Register screen uses Firebase signUp
- [x] Forgot password uses Firebase resetPassword
- [x] Profile screen shows user data and sign out

### Firebase Console:
- [ ] Authentication enabled
- [ ] Email/Password provider enabled
- [ ] google-services.json downloaded
- [ ] Test user created (optional)

### App Functionality:
- [ ] App launches without errors
- [ ] Login screen appears when logged out
- [ ] Can create new account
- [ ] Can sign in with credentials
- [ ] Can reset password
- [ ] Can sign out
- [ ] Auth state persists after restart
- [ ] Profile shows user email

---

## 🐛 Troubleshooting

### Issue: App won't build

**Check:**
- [ ] google-services.json is in `android/app/` (not `android/`)
- [ ] File name is exactly `google-services.json`
- [ ] Run: `cd android && ./gradlew clean`
- [ ] Run: `npx expo prebuild --clean`

### Issue: "No user found" error

**Check:**
- [ ] Firebase Authentication is enabled in console
- [ ] Email/Password provider is enabled
- [ ] google-services.json is correct file
- [ ] App was rebuilt after adding config

### Issue: Navigation doesn't work

**Check:**
- [ ] AuthProvider wraps app in `_layout.tsx`
- [ ] Check console for errors
- [ ] Verify `index.tsx` uses `useAuth()`

### Issue: Can't sign in

**Check:**
- [ ] Email format is valid
- [ ] Password is at least 6 characters
- [ ] User exists in Firebase Console
- [ ] No typos in email/password
- [ ] Internet connection is active

---

## 📱 Testing Matrix

| Test | Expected | Status |
|------|----------|--------|
| Register new user | Account created, auto-login | [ ] |
| Login existing user | Navigate to home | [ ] |
| Login wrong password | Error shown | [ ] |
| Forgot password | Email sent | [ ] |
| Sign out | Navigate to login | [ ] |
| App restart (logged in) | Stay logged in | [ ] |
| App restart (logged out) | Stay logged out | [ ] |
| Access protected route (logged out) | Redirect to login | [ ] |
| Profile shows user email | Email displayed | [ ] |
| Sign out confirmation | Dialog appears | [ ] |

---

## 📚 Documentation Reference

| Need Help With | Read This File |
|----------------|----------------|
| Quick examples | FIREBASE_AUTH_QUICK_REF.md |
| Complete guide | FIREBASE_AUTH_COMPLETE.md |
| How to use | FIREBASE_AUTH_GUIDE.md |
| Testing | FIREBASE_AUTH_TESTING.md |
| Architecture | FIREBASE_AUTH_ARCHITECTURE.md |

---

## ✨ Success Criteria

You're done when:

- [x] Code is implemented (already done! ✓)
- [ ] google-services.json added
- [ ] App rebuilt successfully
- [ ] Can register new user
- [ ] Can login
- [ ] Can sign out
- [ ] Auth persists after restart
- [ ] All tests pass

---

## 🎯 Next Steps After Setup

Once everything works:

1. **Customize UI**
   - Update colors, fonts, styles
   - Add your branding

2. **Add Features**
   - Email verification
   - Social login
   - Profile management

3. **Deploy**
   - Test on real device
   - Create production build
   - Submit to app store

---

## 🎉 You're All Set!

Once this checklist is complete, your app has:

✅ Complete authentication system
✅ User registration
✅ User login
✅ Password reset
✅ Sign out
✅ Protected routes
✅ Persistent sessions

**Happy coding!** 🚀

---

**Last Updated:** February 8, 2026
**Status:** Implementation Complete - Ready for Firebase Setup
