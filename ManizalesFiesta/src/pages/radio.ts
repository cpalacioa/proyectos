export class RadioPlayer {
  url:string;
  stream:any;
  promise:any;
  stream2:any;

 constructor() {
   this.url = "https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3";
   this.stream = new Audio(this.url);
 };

 play() {
   this.stream.play();
   this.promise = new Promise((resolve,reject) => {
     this.stream.addEventListener('playing', () => {
       resolve(true);
     });

     this.stream.addEventListener('error', () => {
       reject(false);
     });
   });
   
  return this.promise;
};

pause() {
  this.stream.pause();
};

play2(url) {
  
  if(typeof this.stream2 !== 'undefined'){
   console.log(this.stream2);

    this.stream2.pause();
   // this.stream2 = null;
   this.stream2 = new Audio(url);
   this.stream2.play();

  }
  else{
   this.stream2 = new Audio(url);
   this.stream2.play();
   
   this.promise = new Promise((resolve,reject) => {
     this.stream2.addEventListener('playing', () => {
       resolve(true);
     });

     this.stream2.addEventListener('error', () => {
       reject(false);
     });
   });
   
  return this.promise;
  }
};

pause2() {

  this.stream2.pause();
}

}