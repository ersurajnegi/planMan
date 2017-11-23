import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
        selector: 'cockpit-delete-confirmation',
        templateUrl: './delete-confirmation.component.html',
        styleUrls: ['./delete-confirmation.component.scss'],
        encapsulation: ViewEncapsulation.None
})
export class DeleteConfirmationComponent {
        @Output()
        confirm: EventEmitter<any> = new EventEmitter<any>();

        @Output()
        cancel: EventEmitter<any> = new EventEmitter<any>();
        /**
 * First line
 *
 * Second line
 */
        confirmClick() {
                this.confirm.emit({
                        event: 'confirm'
                });
        }

        cancelClick() {
                this.cancel.emit({
                        event: 'cancel'
                });
        }

}
