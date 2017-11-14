import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MzBaseModal, MzModalComponent } from 'ng2-materialize';
import { ApiService } from '../../services/apiService.service';
import { EditService } from '../../services/editGoal.service';


@Component({
        selector: 'cockpit-edit-goal',
        templateUrl: './edit-goal.component.html',
        styleUrls: ['./edit-goal.component.scss']
})
export class EditGoalComponent extends MzBaseModal implements OnInit {
        @Input()
        goal;

        @ViewChild('modal') modal: MzModalComponent;
        statuses: Array<any> = [
                { label: 'New', value: 'New' },
                { label: 'In Progress', value: 'InProgress' },
                { label: 'Done', value: 'Done' }
        ];
        constructor(
                private _api: ApiService,
                private _edit: EditService
        ) {
                super();
        }

        ngOnInit() {
        }
        onSubmit(formData: any) {
                const postData = Object.assign({}, this.goal, formData);
                this._api.updateGoal(postData).subscribe(() => {
                        this._edit.editGoalSaveStream(postData);
                        this.close();
                });
        }
        close() {
                this.modal.close();
        }
}
