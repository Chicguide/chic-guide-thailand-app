import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// Init for the web
import '@capacitor-community/firebase-analytics';

import { Plugins } from '@capacitor/core';
const { FirebaseAnalytics, Device } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  analyticsEnabled = true;

  constructor(private router: Router) {
    this.initFb();
    FirebaseAnalytics.setCollectionEnabled({
      enabled: true,
    });
  }

  async initFb() {
    if ((await Device.getInfo()).platform == 'web') {
      FirebaseAnalytics.initializeFirebase(environment.firebase);
    }
  }

  setUser(userId) {
    // Use Firebase Auth uid
    FirebaseAnalytics.setUserId({
      userId,
    });
  }

  setProperty() {
    FirebaseAnalytics.setUserProperty({
      name: 'framework',
      value: 'angular',
    });
  }

  logEvent(name, params) {
    FirebaseAnalytics.logEvent({
      name,
      params,
    });
  }

  setScreenName(screenName) {
    FirebaseAnalytics.setScreenName({
      screenName,
    });
  }

  setCurrentScreen(screenName) {
    FirebaseAnalytics.setCurrentScreen(screenName)
      .then((res: any) => console.log('res setCurrentScreen : ', res))
      .catch((error: any) => console.error('error setCurrentScreen : ', error));
  }

  toggleAnalytics() {
    this.analyticsEnabled = !this.analyticsEnabled;
    FirebaseAnalytics.setCollectionEnabled({
      enabled: this.analyticsEnabled,
    });
  }
}
