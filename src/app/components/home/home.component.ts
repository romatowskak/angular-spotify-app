import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  newSongs: any[] = [];
  loading: boolean;

  error: boolean;
  errorMessage: string;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;

    this.spotifyService.getNewReleases().subscribe(
      (data: any) => {
        console.log(data);
        this.newSongs = data;
        this.loading = false;
      },
      errorService => {
        this.loading = false;
        this.error = true;
        console.log(errorService);
        this.errorMessage = errorService.error.error.message;
      }
    );
  }

  ngOnInit() {}
}
