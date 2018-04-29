import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RadioPlayer } from '../radio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RadioPlayer]

})
export class HomePage {
  player:any;
  preload:boolean =  false;
  // dos
    tracks: any;
    playing: boolean = true;
    currentTrack: any;
    progressInterval: any;

  constructor(public navCtrl: NavController,player: RadioPlayer) {
    this.player = player;
    setTimeout(()=>{
      this.preload = true;
    },5000)

     this.tracks = [
            {title: 'Something About You', artist: 'ODESZA', playing: false, progress: 0, src:'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3'},
            {title: 'Run', artist: 'Allison Wonderland', playing: false, progress: 0,src:'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3'},
            {title: 'Breathe', artist: 'Seeb Neev', playing: false, progress: 0,src:'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3'},
            {title: 'HyperParadise', artist: 'Hermitude', playing: false, progress: 0,src:'https://archive.org/download/swrembel2010-03-07.tlm170.flac16/swrembel2010-03-07s1t05.mp'},
            {title: 'Lifespan', artist: 'Vaults', playing: false, progress: 0,src:'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3'},
            {title: 'Stay High', artist: 'Tove Lo', playing: false, progress: 0,src:'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3'},
            {title: 'Lean On', artist: 'Major Lazer', playing: false, progress: 0,src:'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3'},
            {title: 'They Say', artist: 'Kilter', playing: false, progress: 0,src:'https://archive.org/download/swrembel2010-03-07.tlm170.flac16/swrembel2010-03-07s1t05.mp3'}
        ];
 
        this.currentTrack = this.tracks[0];
 

  }

  play() {
  	this.player.play().then(() => {
  		console.log('Playing');
  	});
  }

 pause() {
  	this.player.pause();
  }

    playTrack(track){
         // First stop any currently playing tracks
        for(let checkTrack of this.tracks){
            if(checkTrack.playing){
                this.pauseTrack(checkTrack);
            }
        }
 
        track.playing = true;
        this.currentTrack = track;
        //console.log(track);
        this.player.play2(track.src);
        // Simulate track playing
        this.progressInterval = setInterval(() => {
        track.progress < 100 ? track.progress++ : track.progress = 0;
        }, 1000);
 
    }
 
    pauseTrack(track){
 
        track.playing = false;
        this.player.pause2();
        clearInterval(this.progressInterval);
 
    }
 
    nextTrack(){
        let index = this.tracks.indexOf(this.currentTrack);
        index >= this.tracks.length - 1 ? index = 0 : index++;
        this.playTrack(this.tracks[index]);
       
        this.player.play2(this.tracks[index].src);
 
    }
    prevTrack(){
 

        let index = this.tracks.indexOf(this.currentTrack);
        index > 0 ? index-- : index = this.tracks.length - 1;
        this.playTrack(this.tracks[index]);
        this.player.play2(this.tracks[index].src);
 
    }
}
