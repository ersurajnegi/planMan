import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
        constructor(
                private _http: HttpClient
        ) { }

        public getData() {
                return this._http.get('https://api.myjson.com/bins/1eirin')
                        .map((data: Response) => data);
        }
}