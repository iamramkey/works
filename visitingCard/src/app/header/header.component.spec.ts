import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { HeaderComponent } from './header.component';
import { HeaderService } from './shared/header.service';
import { Header } from './shared/header.model';

describe('a header component', () => {
	let component: HeaderComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: HeaderService, useClass: MockHeaderService },
				HeaderComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([HeaderComponent], (HeaderComponent) => {
		component = HeaderComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original header service
class MockHeaderService extends HeaderService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
