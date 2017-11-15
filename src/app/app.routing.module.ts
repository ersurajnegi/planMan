import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
        // tslint:disable-next-line:indent

        { path: 'personal', loadChildren: './modules/personalGoalsModule/personalGoal.module#PersonalGoalModule' },
        { path: 'team', loadChildren: './modules/teamGoalModules/teamGoal.module#TeamGoalModule' },
        { path: '', redirectTo: 'personal', pathMatch: 'full' },
        { path: '**', redirectTo: 'personal', pathMatch: 'full' }
];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRoutingModule {

}
