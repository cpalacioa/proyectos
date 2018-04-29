import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page1 } from '../page1/page1';
import { TabsPage } from '../tabs/tabs';



@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
  	setTimeout(()=>{
  		this.navCtrl.push(TabsPage);
  	},3000)
	
}

}
