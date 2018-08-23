import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { VisitingCardComponent } from './visiting-card.component';
import { VisitingCardService } from './shared/visiting-card.service';
import { VisitingCard } from './shared/visiting-card.model';

describe('a visiting-card component', () => {
	let component: VisitingCardComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: VisitingCardService, useClass: MockVisitingCardService },
				VisitingCardComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([VisitingCardComponent], (VisitingCardComponent) => {
		component = VisitingCardComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original visiting-card service
class MockVisitingCardService extends VisitingCardService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
