import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProsumerService {
    private readonly _urlApi: string;

    constructor(private httpClient: HttpClient) {
        this._urlApi = environment.api_url;
    }

    getProsumers(): Observable<any> {
        const url = this._urlApi + `prosumers/`;
        return this.httpClient.get(url).pipe(map (prosumers => {
            return prosumers;
        }));
    }
}

