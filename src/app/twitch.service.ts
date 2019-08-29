import {Injectable} from '@angular/core';
import TwitchClient, {HelixStream, HelixUser} from 'twitch';
import {environment} from '../environments/environment';
import {from, Observable} from 'rxjs';
import {mergeMap, publishReplay, refCount} from 'rxjs/operators';
import {HelixPaginatedVideoFilter} from 'twitch/lib/API/Helix/Video/HelixVideoAPI';
import HelixVideo from 'twitch/lib/API/Helix/Video/HelixVideo';
import HelixPaginatedResult from "twitch/lib/API/Helix/HelixPaginatedResult";
import {HelixStreamFilter} from "twitch/lib/API/Helix/Stream/HelixStreamAPI";

@Injectable({
  providedIn: 'root'
})
export class TwitchService {
  channel = 'natopotato';

  constructor() {
  }

  getClient() {
    return from(TwitchClient.withCredentials(environment.TWITCH_CLIENT_ID)).pipe(publishReplay(1), refCount());
  }

  getUserByName(name: string): Observable<HelixUser | null> {
    return this.getClient().pipe(mergeMap(client => client.helix.users.getUserByName(name)));
  }

  getStream(): Observable<HelixStream | null> {
    return this.getClient().pipe(mergeMap(client => client.helix.streams.getStreamByUserName(this.channel)));
  }

  getVideosByUser(id: string, filter?: HelixPaginatedVideoFilter): Observable<HelixPaginatedResult<HelixVideo>> {
    return this.getClient().pipe(mergeMap(client => client.helix.videos.getVideosByUser(id, filter)));
  }

  getTeam(team: string) {
    return this.getClient().pipe(mergeMap(client => client.kraken.teams.getTeamByName(team)));
  }

  getTeamUsers(team: string) {
    return this.getTeam(team).pipe(mergeMap(t => t.getUsers()));
  }

  getStreamPaginated(data: HelixStreamFilter) {
    return this.getClient().pipe(mergeMap(client => client.helix.streams.getStreamsPaginated(data).getAll()));
  }
}
