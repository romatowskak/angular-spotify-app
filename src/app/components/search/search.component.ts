import { Component } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent {
  artists: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) {}

  searchMusic(searchStr: string) {
    console.log(searchStr);

    this.loading = true;
    this.spotifyService.getArtists(searchStr).subscribe((data: any) => {
      console.log(data);
      this.artists = data;
      this.loading = false;
    });
  }
}
