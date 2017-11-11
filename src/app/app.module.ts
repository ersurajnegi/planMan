import { PersonalGoalModule } from './modules/personalGoalsModule/personalGoal.module';
import { SharedModule } from './modules/sharedModules/shared.Modules';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';



@NgModule({
        declarations: [
                AppComponent
        ],
        imports: [
                BrowserModule,
                SharedModule.forRoot(),
                PersonalGoalModule
        ],
        providers: [],
        bootstrap: [AppComponent]
})
export class AppModule { }
