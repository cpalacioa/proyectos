import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { YoutubePlayerComponent } from '../components/youtube-player/youtube-player';
import { IonicAudioModule, AudioProvider, WebAudioProvider, audioProviderFactory } from 'ionic-audio';
import { YoutubeService } from '../providers/youtube-service';
/**
 * Sample custom factory function to use with ionic-audio
 */
export function myCustomAudioProviderFactory() {
  return new WebAudioProvider();
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProgressBarComponent,
    YoutubePlayerComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicAudioModule.forRoot({ provide: AudioProvider, useFactory: audioProviderFactory }), 
    // or use custom function above to force a specific provider
    // { provide: AudioProvider, useFactory: myCustomAudioProviderFactory }
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProgressBarComponent,
    YoutubePlayerComponent
  ],
  providers: [YoutubeService,{provide: ErrorHandler, useClass: IonicErrorHandler}],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
