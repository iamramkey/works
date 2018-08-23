import { Component, OnInit } from "@angular/core";
import { HttpClient } from "selenium-webdriver/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  x = 0;
  y = 0;
  cardsList = [];

  constructor(private httpService: HttpClient) {
    this.httpService.send
  }

  ngOnInit(){

  }
}
