import { Component, OnInit } from '@angular/core';

import { VisitingCard } from './shared/visiting-card.model';
import { VisitingCardService } from './shared/visiting-card.service';

@Component({
	moduleId: module.id,
	selector: 'visiting-card',
	templateUrl: 'visiting-card.component.html',
	providers: [VisitingCardService]
})

export class VisitingCardComponent implements OnInit {
	visitingCard: VisitingCard[] = [];

	constructor(private visitingCardService: VisitingCardService) { }

	ngOnInit() {
		this.visitingCardService.getList().subscribe((res) => {
			this.visitingCard = res;
		});
	}
}