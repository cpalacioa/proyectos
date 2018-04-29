import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SMS } from 'ionic-native';

@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html'
})
export class SponsorsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
  }

 
  sendSMS(){
    var options={
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
               intent: 'INTENT'  // Opens Default sms app
              //intent: '' // Sends sms without opening default sms app
            }
    }
    SMS.send('+573214291564', 'Hello world!',options)
      .then(()=>{
        alert("success");
      },()=>{
      alert("failed");
      });
  }


}
