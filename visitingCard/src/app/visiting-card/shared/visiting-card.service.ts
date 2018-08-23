import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { VisitingCard } from './visiting-card.model';

@Injectable()
export class VisitingCardService {

	constructor(private http: Http) { }

	getList(): Observable<VisitingCard[]> {
		return this.http.get('/api/list').map(res => res.json() as VisitingCard[]);
	}
}