import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { VisitingCardComponent } from "./visiting-card/visiting-card.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [AppComponent, VisitingCardComponent, HeaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
