import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
        selector: 'cockpit-goal-details',
        templateUrl: './goal-details.component.html',
        styleUrls: ['./goal-details.component.scss'],
        encapsulation: ViewEncapsulation.None
})
export class GoalDetailsComponent implements OnInit {
        @Input()
        goal: any;
        constructor() { }

        ngOnInit() {
        }

}
