import { ApiService } from './../../services/apiService.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
        selector: 'cockpit-goal-list',
        templateUrl: './goal-list.component.html',
        styleUrls: ['./goal-list.component.scss'],
        encapsulation: ViewEncapsulation.None
})
export class GoalListComponent implements OnInit {

        goals: any = []
        constructor(
                private _api: ApiService
        ) { }

        ngOnInit() {
                this._api.getData().subscribe((data) => {
                        setTimeout(()=> {
                                this.goals = data;
                        }, 1000)
                        
                });
        }

}
