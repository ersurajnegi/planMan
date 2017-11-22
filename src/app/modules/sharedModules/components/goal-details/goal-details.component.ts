import { DeleteConfirmationComponent } from './../delete-confirmation/delete-confirmation.component';
import { EditGoalComponent } from './../edit-goal/edit-goal.component';
import {
        Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter,
        ComponentFactoryResolver, ViewContainerRef, ViewChild, ComponentRef
} from '@angular/core';
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

        @ViewChild('delete', { read: ViewContainerRef }) delete: ViewContainerRef;
        deleteInstance: ComponentRef<DeleteConfirmationComponent>;
        constructor(
                private _modalService: MzModalService,
                private _resolver: ComponentFactoryResolver
        ) {
                this.showConfirmationDrawer = false;
        }

        ngOnInit() {
                console.log('init');
        }

        deleteGoalConfirmed(event: any) {
                this.goalDelete.emit(this.goal.id);
                this.showConfirmationDrawer = !this.showConfirmationDrawer;
                this.destroyDeleteComponentInstance();
        }

        deleteGoal() {
                const componentFactory = this._resolver.resolveComponentFactory(DeleteConfirmationComponent);
                this.deleteInstance = this.delete.createComponent(componentFactory);
                this.deleteInstance.instance.confirm.subscribe((event) => this.deleteGoalConfirmed(event));
                this.deleteInstance.instance.cancel.subscribe((event) => this.deleteGoalCancel(event));
                this.showConfirmationDrawer = !this.showConfirmationDrawer;
        }

        deleteGoalCancel(event: any) {
                this.showConfirmationDrawer = !this.showConfirmationDrawer;
                this.destroyDeleteComponentInstance();
        }

        editGoal() {
                const goal = Object.assign({}, this.goal);
                this.modalComponentRef = this._modalService.open(EditGoalComponent, { goal });
        }

        destroyDeleteComponentInstance() {
                this.deleteInstance.destroy();
        }
}
