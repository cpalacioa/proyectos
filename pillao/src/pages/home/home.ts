import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ReportPage } from '../report/report';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goReport(){
    this.navCtrl.push(ReportPage);
  }

}
