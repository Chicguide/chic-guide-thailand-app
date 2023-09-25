import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.chicguide.appchicguide.thailand',
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
      iosClientId: '969989942144-jdk8e8uefi2bvc0rq7ciooarklj4no3s.apps.googleusercontent.com',
      androidClientId: '824153985838-ng4e3ig620o55bb40j7ak1ooscclhjeb.apps.googleusercontent.com',
      serverClientId: '824153985838-ng4e3ig620o55bb40j7ak1ooscclhjeb.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
