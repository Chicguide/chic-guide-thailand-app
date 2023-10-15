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
      iosClientId: '280692033654-m6308ml8geueqltgcccrat1j7gv44nr8.apps.googleusercontent.com',
      androidClientId: '817086527950-c1ptfgh98lkm2n4lca65169up55g2v2r.apps.googleusercontent.com',
      serverClientId: '817086527950-c1ptfgh98lkm2n4lca65169up55g2v2r.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
