import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
        selector: 'cockpit-quick-add',
        templateUrl: './quick-add.component.html',
        styleUrls: ['./quick-add.component.scss'],
        encapsulation: ViewEncapsulation.Emulated
})
export class QuickAddComponent implements OnInit {

        title: string;

        @Output()
        quickAdd: EventEmitter<any> = new EventEmitter<any>();

        constructor() {
                this.title = '';
        }

        ngOnInit() {
        }
        addGoal(title: string) {
                this.quickAdd.emit(title);
        }

}
