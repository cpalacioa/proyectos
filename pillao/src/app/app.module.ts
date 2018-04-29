import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule} from 'angularfire2';
import * as firebase from 'firebase';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import  { ReportPage } from '../pages/report/report';

export const firebaseGlobalConfig = {
  apiKey            : 'AIzaSyDoGGaB4Fb8oaWdSJZwm7Zf8l2W8xh9wgQ',
  authDomain        : 'pillao-b66c1.firebaseapp.com',
  databaseURL       : 'https://pillao-b66c1.firebaseio.com',
  storageBucket     : 'pillao-b66c1.appspot.com',
  messagingSenderId : '600409917586'
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
    ReportPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseGlobalConfig)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
    ReportPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
