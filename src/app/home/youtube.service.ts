import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) {
  }

  getPlaylist(playlistId: string) {
    const key = environment.YOUTUBE_KEY;
    // tslint:disable-next-line:max-line-length
    return this.http.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${playlistId}&maxResults=3&key=${key}`);
  }
}
