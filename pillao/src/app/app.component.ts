import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';

import * as firebase from 'firebase';

export const firebaseGlobalConfig = {
  apiKey            : 'AIzaSyDoGGaB4Fb8oaWdSJZwm7Zf8l2W8xh9wgQ',
  authDomain        : 'pillao-b66c1.firebaseapp.com',
  databaseURL       : 'https://pillao-b66c1.firebaseio.com',
  storageBucket     : 'pillao-b66c1.appspot.com',
  messagingSenderId : '600409917586'
};

@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  rootPage = IntroPage;

  constructor(platform: Platform) {
      platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    firebase.initializeApp(firebaseGlobalConfig);
  }
}
