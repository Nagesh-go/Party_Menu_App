## PartyMenuApp

React Native app for selecting party dishes, filtering by category and veg/non-veg, and viewing ingredients.

Built with React Native 0.81 and React Navigation (Stack). Includes a simple web demo file for previewing the UI.

### Prerequisites
- Node.js ≥ 20
- npm (bundled with Node)
- Git (recommended)
- Android build tools:
  - Android Studio (includes Android SDK + Emulator)
  - JDK (Android Studio’s bundled JBR works fine)

### 1) Clone and install
```bash
cd PartyMenuApp
npm install
```

### 2) Android setup
Ensure Android SDK path is available and the project has `local.properties`:

`android/local.properties`
```
sdk.dir=C:\Users\<YOUR_USER>\AppData\Local\Android\Sdk
```

You can also set environment variables in the shell where you run commands:
```powershell
$env:ANDROID_HOME="C:\Users\<YOUR_USER>\AppData\Local\Android\Sdk"
$env:ANDROID_SDK_ROOT=$env:ANDROID_HOME
```

JDK: The project is configured to use Android Studio’s bundled JDK via `android/gradle.properties`:
```
org.gradle.java.home=C:\\Program Files\\Android\\Android Studio\\jbr
org.gradle.java.installations.fromEnv=JAVA_HOME
org.gradle.java.installations.auto-download=false
```

#### Create/start an emulator
From Android Studio: Tools → Device Manager → Create/Start AVD (e.g., Pixel 4). For low-RAM systems, set RAM 1024–1536 MB, disable Snapshots, and Cold Boot.

Alternatively via PowerShell:
```powershell
& "$env:ANDROID_HOME\emulator\emulator.exe" -list-avds
& "$env:ANDROID_HOME\emulator\emulator.exe" -avd Pixel_4 -no-snapshot -memory 1024 -no-boot-anim -gpu swiftshader_indirect -accel off
```

### 3) Run on Android
From the project folder:
```bash
npx react-native start   # in one terminal (Metro)
```

In another terminal (with emulator running or device connected):
```bash
npx react-native run-android
```

If you prefer to build the APK and install manually:
```powershell
cd android
./gradlew assembleDebug
```
APK output:
```
android/app/build/outputs/apk/debug/app-debug.apk
```
Install:
```powershell
adb install -r android\app\build\outputs\apk\debug\app-debug.apk
```

### 4) iOS (macOS only)
```bash
cd PartyMenuApp
npx react-native run-ios
```

### 5) Quick web preview (demo)
A lightweight HTML demo (not a full RN Web port) is available:
```
PartyMenuApp/demo.html
```
Open it in your browser to preview the UI/flows.

### Project scripts
```json
{
  "start": "react-native start",
  "android": "react-native run-android",
  "ios": "react-native run-ios",
  "test": "jest",
  "lint": "eslint ."
}
```

### Project structure (app core)
```
PartyMenuApp/
  App.tsx                 # NavigationContainer + Stack
  screens/
    HomeScreen.js         # Categories, filters, list, selection
    IngredientScreen.js   # Dish detail + ingredients
  components/
    DishCard.js
    FilterToggle.js
    SearchBar.js
  data/
    dishes.json
    ingredients.json
  android/                # Native Android project
  ios/                    # Native iOS project
```

### Troubleshooting

• Command `run-android` unrecognized
- You are not in the app folder. Run `cd PartyMenuApp` first.

• SDK location not found
- Ensure `android/local.properties` contains the correct `sdk.dir`.
- Or set env vars:
```powershell
$env:ANDROID_HOME="C:\Users\<YOU>\AppData\Local\Android\Sdk"
$env:ANDROID_SDK_ROOT=$env:ANDROID_HOME
```

• JAVA_HOME / JDK errors or Gradle toolchain warnings
- The project pins Android Studio JBR in `android/gradle.properties`. Ensure Android Studio is installed at `C:\Program Files\Android\Android Studio`.

• Emulator fails to launch or times out
- Start it from Android Studio’s Device Manager, cold boot, reduce RAM (1024–1536 MB), disable Snapshots.
- Or use a physical Android device with USB debugging enabled.

• Insufficient memory / paging file too small (DOS error/errno=1455)
- Increase Windows virtual memory: sysdm.cpl → Advanced → Performance (Settings) → Advanced → Virtual memory (Change). Set Custom size: Initial 4096 MB, Maximum 8192–12288 MB. Restart Windows.

• Metro already running
- It’s fine. If needed, stop existing Metro (Ctrl+C) and run `npx react-native start` again.

### Notes
- The codebase uses React Native 0.81 APIs and React Navigation Stack.
- Data is local JSON; no backend required.
- TypeScript config is included; core screens/components are in JavaScript.

### License
MIT

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
