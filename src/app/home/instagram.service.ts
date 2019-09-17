import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor(private http: HttpClient) {
  }

  getUser(user: string) {
    return this.http.get(`https://www.instagram.com/${user}/?__a=1`);
  }

  getFeed(user: string) {
    return this.getUser(user).pipe(mergeMap(value => {
      const shortcodes = [];
      let i = 0;
      // @ts-ignore
      for (const edge of value.graphql.user.edge_owner_to_timeline_media.edges) {
        if (i >= 3) {
          break;
        }
        const shortcode = edge.node.shortcode;
        const r = this.http.get(`https://api.instagram.com/oembed/?url=https://instagr.am/p/${shortcode}/&maxwidth=320&omitscript=true`);
        shortcodes.push({
          i,
          request: r
        });
        i++;
      }
      return shortcodes;
    }));
  }


}
