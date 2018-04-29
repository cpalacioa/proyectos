import { Component, NgZone,ViewChild, ElementRef  } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import * as firebase from 'firebase';
import {Geolocation} from 'ionic-native';

declare var google;

@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {
	_zone:any;
	@ViewChild('map') mapElement: ElementRef;
	map: any;
	guestPicture: string;
  city: any;
  haveCity:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,_zone: NgZone) {
       this._zone = _zone;
       
  }

  ionViewDidLoad() {
       this.loadMap();

  }
  

 addInfoWindow(marker, content){
 
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });
 
  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });
 
}
   
getInfoGeo(position){
  
	 		var geocoder = new google.maps.Geocoder();
     	var request = {
        latLng: position
      };
    return new Promise((resolve, reject) => {
       geocoder.geocode(request, function(data, status)  {
         if (status == google.maps.GeocoderStatus.OK) {
          if (data[0] != null) {
             // var citytmp = data[0].address_components[3].short_name;
              resolve(data);
            //alert("address is: " + data[0].formatted_address);
          } else {
              resolve(null);
          }
         }
       });
    });
     
}

addMarker(){
 
  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });
 
  let content = "<h4>Information!</h4>";          
 
  this.addInfoWindow(marker, content);
 
}


 loadMap(){
	  let options = {timeout: 10000, enableHighAccuracy: true};
		let latlng2 = new google.maps.LatLng(-34.9290, 138.6010);


			 Geolocation.getCurrentPosition(options).then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
       //let latLng = new google.maps.LatLng(-34.9290, 138.6010);
			let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(document.querySelector('#map'), mapOptions);
     
			this.addMarker();
			this.getInfoGeo(latLng).then((result:any[])=>{
        //console.log(result[0].address_components[3].short_name);
         // var citytmp = data[0].address_components[3].short_name;
            //alert("address is: " + data[0].formatted_address);
            if(result){
              this.city = result[0].address_components[3].short_name;
            }
      })
      .catch(error=>{
        console.log(error);
      })
    });
  }
  uploadImage(name, data) {

        let ctrl= this.toastCtrl;

        let promise = new Promise((res,rej) => {
            let fileName = name + ".jpg";
            let uploadTask = firebase.storage().ref("/images/"+fileName).put(data);
            uploadTask.on('state_changed', function(snapshot) {
            }, function(error) {
                let toast = ctrl.create({
                message: error.message,
                duration: 5000
              });
            toast.present();
              }, function() {
                 var downloadURL = uploadTask.snapshot.downloadURL;
                  let toast = ctrl.create({
                message: "Almacenada correctamente",
                duration: 5000
              });
            toast.present();
                res(downloadURL);
            });
        });
        return promise;
  }

  uploadImage64(name, data) {
      
        let ctrl= this.toastCtrl;
        let toast = ctrl.create({
                message: name+"/"+data,
                duration: 5000
              });
            toast.present();
        let promise = new Promise((res,rej) => {
            let fileName = name + ".jpg";
            let uploadTask = firebase.storage().ref("/images/"+fileName).putString(data,'data_url');
            uploadTask.on('state_changed', function(snapshot) {
            }, function(error) {
               let toast = ctrl.create({
                message: error.message,
                duration: 5000
              });
            toast.present();
            }, function() {
            var downloadURL = uploadTask.snapshot.downloadURL;
                res(downloadURL);
            });
        });
        return promise;
  }

  takePicture(){
   Camera.getPicture({
    quality : 95,
    destinationType : Camera.DestinationType.DATA_URL,
   // sourceType : Camera.PictureSourceType.CAMERA,
    allowEdit : false,
    //encodingType: Camera.EncodingType.PNG,
    targetWidth: 500,
    targetHeight: 500,
    saveToPhotoAlbum: false})
    .then((imageData) => {
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.guestPicture = base64Image;
       /* this._zone.run(() => {
            this.guestPicture = 'data:image/jpeg;base64,' + imageData;      
        });*/
     //this.uploadImage64("prueba2",base64Image);
    }, (err) => {
        
         let toast = this.toastCtrl.create({
          message: err,
          duration: 5000
        });
        toast.present();
 
    });
  }

}
