import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { VisitingCardComponent } from "./visiting-card/visiting-card.component";

@NgModule({
  declarations: [AppComponent, VisitingCardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
