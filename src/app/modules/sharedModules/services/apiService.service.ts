import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export const apiUrl = '/api';
@Injectable()
export class ApiService {
        constructor(
                private _http: HttpClient
        ) { }

        public getData(quarterNo: Number): Observable<any> {
                return this._http.get(`http://localhost:3000/personalGoals${quarterNo}`)
                        .map((data: Response) => data);
        }
        addGoal(quarterNo: Number, goal: any) {
                return this._http.post(`http://localhost:3000/personalGoals${quarterNo}`, goal)
                        .map((data: Response) => data);
        }

        deleteGoal(quarterNo: Number, id: Number) {
                return this._http.delete(`http://localhost:3000/personalGoals${quarterNo}/${id}`)
                        .map((data: Response) => data);
        }
}