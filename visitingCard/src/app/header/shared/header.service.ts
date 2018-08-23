import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Header } from './header.model';

@Injectable()
export class HeaderService {

	constructor(private http: Http) { }

	getList(): Observable<Header[]> {
		return this.http.get('/api/list').map(res => res.json() as Header[]);
	}
}