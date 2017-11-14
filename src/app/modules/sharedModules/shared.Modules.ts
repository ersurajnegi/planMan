import { EditService } from './services/editGoal.service';
import { GoalDetailsComponent } from './components/goal-details/goal-details.component';
import { GoalListComponent } from './components/goal-list/goal-list.component';
import { QuickAddComponent } from './components/quick-add/quick-add.component';
import { ApiService } from './services/apiService.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MalihuCustomScrollerModule } from 'ngx-malihu-scroller';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { MaterializeModule } from 'ng2-materialize';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { FormsModule } from '@angular/forms';
import { EditGoalComponent } from './components/edit-goal/edit-goal.component';



@NgModule({
        imports: [
                CommonModule,
                MaterializeModule.forRoot(),
                MalihuCustomScrollerModule,
                HttpClientModule,
                FormsModule
        ],
        exports: [
                QuickAddComponent,
                GoalListComponent,
                GoalDetailsComponent,
                CommonModule,
                MalihuCustomScrollerModule,
                HttpClientModule,
                LoaderComponent,
                DeleteConfirmationComponent,
                FormsModule
        ],
        declarations: [
                QuickAddComponent,
                GoalListComponent,
                GoalDetailsComponent,
                LoaderComponent,
                DeleteConfirmationComponent,
                EditGoalComponent
        ],
        entryComponents: [EditGoalComponent]
})
export class SharedModule {
        static forRoot(): ModuleWithProviders {
                return {
                        ngModule: SharedModule,
                        providers: [ApiService, EditService]
                }
        }
}
