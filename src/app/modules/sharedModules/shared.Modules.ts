import { GoalDetailsComponent } from './components/goal-details/goal-details.component';
import { GoalListComponent } from './components/goal-list/goal-list.component';
import { QuickAddComponent } from './components/quick-add/quick-add.component';
import { ApiService } from './services/apiService.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MalihuCustomScrollerModule } from 'ngx-malihu-scroller';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
        imports: [
                CommonModule,
                MalihuCustomScrollerModule,
                HttpClientModule
        ],
        exports: [
                QuickAddComponent,
                GoalListComponent,
                GoalDetailsComponent,
                CommonModule,
                MalihuCustomScrollerModule,
                HttpClientModule
        ],
        declarations: [
                QuickAddComponent,
                GoalListComponent,
                GoalDetailsComponent
        ],
})
export class SharedModule {
        static forRoot(): ModuleWithProviders {
                return {
                        ngModule: SharedModule,
                        providers: [ApiService]
                }
        }
}