import { Component } from '@angular/core';
import { Home } from '../home/home';
import { CatalogPage } from '../catalog/catalog';
import { SponsorsPage } from '../sponsors/sponsors';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Home;
  tab2Root: any = CatalogPage;
  tab3Root: any = SponsorsPage;

  constructor() {

  }
}
