import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CatalogPage } from '../pages/catalog/catalog';
import { SponsorsPage } from '../pages/sponsors/sponsors';

@NgModule({
  declarations: [
    MyApp,
    Home,
    IntroPage,
    TabsPage,
    CatalogPage,
    SponsorsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    CatalogPage,
    SponsorsPage,
    IntroPage,
    TabsPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
