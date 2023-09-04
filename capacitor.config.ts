import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.quanlabs.nearme5',
  appName: 'Chic Guide Thailand',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: '#ffffffff',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      spinnerColor: '#999999',
      splashFullScreen: true,
      splashImmersive: true,
    },
    GoogleAuth: {
      scopes: ['profile', 'email'],
      iosClientId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com',
      androidClientId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com',
      serverClientId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
