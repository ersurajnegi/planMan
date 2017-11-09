import { PersonalGoalModule } from './modules/personalGoalsModule/personalGoal.module';
import { SharedModule } from './modules/sharedModules/shared.Modules';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'ng2-materialize';


import { AppComponent } from './app.component';


@NgModule({
        declarations: [
                AppComponent
        ],
        imports: [
                BrowserModule,
                SharedModule.forRoot(),
                PersonalGoalModule,
                MaterializeModule.forRoot()
        ],
        providers: [],
        bootstrap: [AppComponent]
})
export class AppModule { }
