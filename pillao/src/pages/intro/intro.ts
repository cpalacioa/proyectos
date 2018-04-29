import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';


@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
  	setTimeout(()=>{
  		this.navCtrl.push(TabsPage);
  	},1000);
  	
  }

}
