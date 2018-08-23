import { Component, OnInit, Input } from "@angular/core";
@Component({
  selector: "visiting-card",
  templateUrl: "visiting-card.component.html",
  styleUrls: ["visiting-card.component.scss"]
})
export class VisitingCardComponent implements OnInit {
  @Input()
  cardDetails: any;

  constructor() {}

  ngOnInit() {}
}
