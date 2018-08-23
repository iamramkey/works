import { Component, OnInit } from "@angular/core";
import { VisitingCard } from "./visiting-card/shared/visiting-card.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  x = 4;
  y = 5;
  cardsList = [];

  constructor(private http: HttpClient) {
    this.http
      .get<VisitingCard>("../assets/defaultCards.json")
      // clone the data object, using its known Config shape
      .subscribe((data: any) => {
        console.log(this.cardsList, data);
        this.cardsList = [...data];
      });
  }

  ngOnInit() {}
}
