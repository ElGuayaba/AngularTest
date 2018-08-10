import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//My components
import { HomeComponent } from './home/home.component';
import { CalcComponent } from './calc/calc.component';
import { AddStudentComponentComponent } from './add-student-component/add-student-component.component';
import { AddStudentComponent } from './add-student/add-student.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'calc', component: CalcComponent},
  {path: 'crud', component: AddStudentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalcComponent,
    AddStudentComponentComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
