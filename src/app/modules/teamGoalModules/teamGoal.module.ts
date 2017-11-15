import { SharedModule } from './../sharedModules/shared.Modules';
import { NgModule } from '@angular/core';
import { TeamGoalRoutingModule } from './teamGoal.routing.module';
import { TestComponent } from './components/testComponent';

@NgModule({
        imports: [SharedModule.forRoot(), TeamGoalRoutingModule],
        exports: [],
        declarations: [TestComponent]
})
export class TeamGoalModule {
}
