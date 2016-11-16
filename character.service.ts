import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { SWCharacter } from './apiTypes';

const API_URL = 'http://localhost:8085';

@Injectable()
export class characterService {
    constructor(private http: Http) {
    }

    load$(): Observable<SWCharacter[]> {
        return this.http.get(API_URL + '/archetypes').map((res: Response) => res.json());
    }
}
