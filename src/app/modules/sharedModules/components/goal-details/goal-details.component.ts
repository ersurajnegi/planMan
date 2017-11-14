import { EditGoalComponent } from './../edit-goal/edit-goal.component';
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { MzModalService } from 'ng2-materialize';



@Component({
        selector: 'cockpit-goal-details',
        templateUrl: './goal-details.component.html',
        styleUrls: ['./goal-details.component.scss'],
        encapsulation: ViewEncapsulation.None
})
export class GoalDetailsComponent implements OnInit {
        @Input()
        goal: any;

        @Output()
        goalDelete: EventEmitter<any> = new EventEmitter<any>();

        modalComponentRef: any;
        showConfirmationDrawer: boolean;
        constructor(
                private _modalService: MzModalService
        ) {
                this.showConfirmationDrawer = false;
        }

        ngOnInit() {
                console.log('init');
        }

        deleteGoalConfirmed(event: any) {
                this.goalDelete.emit(this.goal.id);
                this.showConfirmationDrawer = !this.showConfirmationDrawer;
        }

        deleteGoal() {
                this.showConfirmationDrawer = !this.showConfirmationDrawer;
        }

        deleteGoalCancel(event: any) {
                this.showConfirmationDrawer = !this.showConfirmationDrawer;
        }

        editGoal() {
                const goal = Object.assign({}, this.goal);
                this.modalComponentRef = this._modalService.open(EditGoalComponent, { goal });
        }
}
