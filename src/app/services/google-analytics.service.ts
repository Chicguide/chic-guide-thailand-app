import { Injectable } from '@angular/core';
declare var gtag;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() { }

  startTrackerWithId(id) {
    gtag('config', id);
  }

  trackView(pageUrl: string, screenName: string) {}

  trackEvent(category, action, label?, value?) {}
}