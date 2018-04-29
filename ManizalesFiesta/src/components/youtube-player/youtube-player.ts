import { Component } from '@angular/core';
import { YoutubeService } from '../../providers/youtube-service';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'youtube-player',
  templateUrl: 'youtube-player.html',
 providers:[YoutubeService]

})
export class YoutubePlayerComponent {

  channelID: string = 'UCh78F0yEEeFWKoo4aNvCqgg';
  maxResults: string = '10';
  pageToken: string; 
  googleToken: string = 'AIzaSyCFxay0HS5sg7sM8Q1smAmRrreNAAvguGk';
  searchQuery: string = '';
  posts: any = [];
  onPlaying: boolean = false; 



  constructor(public http: Http,public ytPlayer: YoutubeService) {
    this.loadSettings();
  }
  
  launchYTPlayer(id, title): void {
    this.ytPlayer.launchPlayer(id, title);
  }

  fetchData(): void {

    let url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelID + '&q=' + this.searchQuery + '&type=video&order=viewCount&maxResults=' + this.maxResults + '&key=' + this.googleToken;

    if(this.pageToken) {
      url += '&pageToken=' + this.pageToken;
    }

    this.http.get(url).map(res => res.json()).subscribe(data => {
      
      // *** Get individual video data like comments, likes and viewCount. Enable this if you want it.
       let newArray = data.items.map((entry) => {
       let videoUrl = 'https://www.googleapis.com/youtube/v3/videos?part=id,snippet,contentDetails,statistics&id=' + entry.id.videoId + '&key=' + this.googleToken;
         this.http.get(videoUrl).map(videoRes => videoRes.json()).subscribe(videoData => {
           this.posts = this.posts.concat(videoData.items);
           return entry.extra = videoData.items;
         });
       });
      this.posts = this.posts.concat(data.items);
    });

  }
  loadSettings(): void {
      this.fetchData();
      
  }
  openSettings(): void {
      console.log("TODO: Implement openSettings()");
  }
  playVideo(e, post): void {
      this.onPlaying = true;
      this.ytPlayer.launchPlayer(post.id, post.snippet.title);
  }
  loadMore(): void {
      console.log("TODO: Implement loadMore()");
  }

}
