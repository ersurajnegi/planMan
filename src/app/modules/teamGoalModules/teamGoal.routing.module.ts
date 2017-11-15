import { TestComponent } from './components/testComponent';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
        {
                path: '',
                children: [
                        { path: '', component: TestComponent }
                ]
        }
];

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
})
export class TeamGoalRoutingModule {

}
