import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directiveexample';

  
  videos = [
    { title: 'my video 1', share: 415, likes: 542, dislikes: 12, thumbnail: 'assets/image1.jpg' },
    { title: 'my video 2', share: 215, likes: 325, dislikes: 34, thumbnail: 'assets/image2.jpg' },
    { title: 'my video 3', share: 513, likes: 123, dislikes: 112, thumbnail: 'assets/image3.jpg' }
  ]

  mostLikedVideo = this.getmostlikedVideo();

  getmostlikedVideo() {
    let videoCopy = [...this.videos];
    return videoCopy.sort((a,b) => b.likes - a.likes)[0]
  }
}
