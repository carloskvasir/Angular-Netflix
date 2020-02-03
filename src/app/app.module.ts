import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./shared/nav-bar/nav-bar.component";
import { FullBannerComponent } from './shared/full-banner/full-banner.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, FullBannerComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
