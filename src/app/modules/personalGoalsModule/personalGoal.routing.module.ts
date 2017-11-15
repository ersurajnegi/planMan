import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalHomeComponent } from './components/personalHome/personal-home.component';

const routes: Routes = [
        {
                path: '',
                children: [
                        { path: '', component: PersonalHomeComponent },
                        { path: 'test', component: PersonalHomeComponent }
                ]
        }
];

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
})
export class PersonalGoalRoutingModule {

}
