import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { SpotifyService } from "./services/spotify.service";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./components/search/search.component";
import { HomeComponent } from "./components/home/home.component";
import { ArtistComponent } from "./components/artist/artist.component";
import { CardComponent } from "./components/card/card.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { LoadingComponent } from "./components/shared/loading/loading.component";
import { NoimagePipe } from './pipes/noimage.pipe';
import { PreviewPipe } from './pipes/preview.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    ArtistComponent,
    LoadingComponent,
    CardComponent,
    NoimagePipe,
    PreviewPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "search", component: SearchComponent },
      { path: "artist/:id", component: ArtistComponent },
      { path: "", pathMatch: "full", redirectTo: "home" },
      { path: "**", pathMatch: "full", redirectTo: "home" }
    ])
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
