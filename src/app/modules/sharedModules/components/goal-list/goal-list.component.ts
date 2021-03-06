import { EditService } from './../../services/editGoal.service';
import { QuickAddComponent } from './../quick-add/quick-add.component';
import { ApiService } from './../../services/apiService.service';
import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';


@Component({
        selector: 'cockpit-goal-list',
        templateUrl: './goal-list.component.html',
        styleUrls: ['./goal-list.component.scss'],
        encapsulation: ViewEncapsulation.None
})
export class GoalListComponent implements OnInit {
        @Input()
        quarterNumber: Number;
        goals: any;
        isLoading: boolean;
        @ViewChild(QuickAddComponent) quickAdd: QuickAddComponent;
        constructor(
                private _api: ApiService,
                private _editService: EditService
        ) {
                this.isLoading = false;
                this.goals = [];
        }

        ngOnInit() {
                this.listenToEditGoalStream();
                this.isLoading = true;
                this._api.getData(this.quarterNumber).subscribe((data) => {
                        setTimeout(() => {
                                this.goals = data;
                                this.isLoading = false;
                        }, 3000);
                }, (error) => {
                        this.isLoading = false;
                });
        }

        listenToEditGoalStream() {
                this._editService.editGoalSaveObservable.subscribe((data) => {
                        console.log('data Updated stream : ', data);
                        if (data.quarterNumber !== this.quarterNumber) { return; }
                        const idx = this.goals.findIndex((item) => {
                                return item.id === data.id;
                        });
                        this.goals[idx] = data;
                });
        }

        goalAdded(title) {
                const id = Math.floor((Math.random() * 100000) + 1);
                this._api.addGoal(this.quarterNumber, { id, title, status: 'InProgress' })
                        .subscribe(() => {
                                this.quickAdd.title = '';
                                this.goals.unshift({ id, title, status: 'InProgress' });
                        }, (error) => {
                                console.error('error : ', error);
                        });

        }

        deleteGoal(id: Number) {
                this._api.deleteGoal(this.quarterNumber, id)
                        .subscribe((data) => {
                                this.goals = this.goals.filter((goal) => {
                                        return goal.id !== id;
                                });
                        }, (error) => {
                                console.error('error : ', error);
                        });
        }

}
