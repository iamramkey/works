import {
  Component,
  OnInit,
  Input,
  DoCheck,
  ChangeDetectorRef
} from "@angular/core";
import { VisitingCard } from "./shared/visiting-card.model";
@Component({
  selector: "visiting-card",
  templateUrl: "visiting-card.component.html",
  styleUrls: ["visiting-card.component.scss"]
})
export class VisitingCardComponent implements OnInit, DoCheck {
  @Input()
  inputData: any;
  cardDetails: VisitingCard;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngDoCheck() {
    if (JSON.stringify(this.inputData) != JSON.stringify(this.cardDetails)) {
      this.cd.markForCheck();
      this.cardDetails = this.inputData;
    }
  }
}
