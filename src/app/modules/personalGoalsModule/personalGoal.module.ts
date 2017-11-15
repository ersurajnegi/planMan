import { SharedModule } from './../sharedModules/shared.Modules';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { PersonalGoalRoutingModule } from './personalGoal.routing.module';
import { PersonalHomeComponent } from './components/personalHome/personal-home.component';


@NgModule({
        imports: [PersonalGoalRoutingModule, SharedModule.forRoot()],
        declarations: [ProfileComponent, PersonalHomeComponent]
})
export class PersonalGoalModule {
}
