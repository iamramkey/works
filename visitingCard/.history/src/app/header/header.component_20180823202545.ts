import { Component, OnInit } from '@angular/core';

import { Header } from './shared/header.model';
import { HeaderService } from './shared/header.service';

@Component({
	moduleId: module.id,
	selector: 'header',
	templateUrl: 'header.component.html',
	providers: [HeaderService]
})

export class HeaderComponent implements OnInit {
	header: Header[] = [];

	constructor(private headerService: HeaderService) { }

	ngOnInit() {
		this.headerService.getList().subscribe((res) => {
			this.header = res;
		});
	}
}