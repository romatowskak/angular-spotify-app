import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

// this service can be used in other components

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    // headers are defined which is what Spotify API needs

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQAeWKt0vk7aOBn4C1enbS-U4c6hqVrmbdNf5Ysn6_eSmZqzCb3A5XBKyv5oshz3L2IkX4M2Lc81nQwiDVI"
    });

    return this.http.get(url, { headers });
  }

  // when Spotify API sends the response, it sends too much information
  // .map filters it and gives us what we want

  getNewReleases() {
    return this.getQuery("browse/new-releases?limit=27").pipe(
      map(data => data["albums"].items)
    );
  }

  // Spotify's search reference

  getArtists(searchStr: string) {
    return this.getQuery(`search?q=${searchStr}&type=artist&limit=15`).pipe(
      map(data => data["artists"].items)
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map(data => data["tracks"])
    );
  }
}
