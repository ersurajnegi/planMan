import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

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

        showConfirmationDrawer: boolean;
        constructor() {
                this.showConfirmationDrawer = false;
        }

        ngOnInit() {
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

}
