import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { VisitingCardComponent } from "./visiting-card/visiting-card.component";
import { HeaderComponent } from "./header/header.component";
import { VisitingCard } from "./visiting-card/shared/visiting-card.model";

@NgModule({
  declarations: [AppComponent, VisitingCardComponent, HeaderComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [VisitingCard],
  bootstrap: [AppComponent]
})
export class AppModule {}
