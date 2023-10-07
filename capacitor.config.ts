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
      iosClientId: '427617387136-h1hm398kgamcmcsonnta0pvgni0sk2rl.apps.googleusercontent.com',
      androidClientId: '184156139631-8uebiqmt0hblhd654cjh6v568h7451pl.apps.googleusercontent.com',
      serverClientId: '184156139631-8uebiqmt0hblhd654cjh6v568h7451pl.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
