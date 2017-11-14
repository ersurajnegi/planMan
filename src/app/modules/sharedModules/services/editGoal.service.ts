import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EditService {
        editGoalSave: Subject<any> = new Subject<any>();
        editGoalSaveObservable = this.editGoalSave.asObservable();
        constructor() {
        }

        editGoalSaveStream(data: any) {
                this.editGoalSave.next(data);
        }
        // tslint:disable-next-line:eofline
}