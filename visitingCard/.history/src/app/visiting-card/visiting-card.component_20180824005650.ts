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

  constructor(private cd: ChangeDetectorRef) {
    this.cardDetails = <VisitingCard>{
      name: "Sampat Rama Krishna",
      userEmail: "iamramkey@gmail.com",
      userPhone: "+918099249887",
      userPhoneFormatted: "(+91) 809 924 9887",
      addressLine1: "S15, Elysium Mansion, Gachibowly",
      addressLine2: "Hyderabad, 500032",
      designation: "Creative Worker",
      website: "http://www.iamramkey.com/",
      dateOfBirth: "06 April 1990"
    };
  }

  ngOnInit() {}

  ngDoCheck() {
    /* if (JSON.stringify(this.inputData) != JSON.stringify(this.cardDetails)) {
      this.cd.markForCheck();
      this.cardDetails = this.inputData;
    } */
  }
}
