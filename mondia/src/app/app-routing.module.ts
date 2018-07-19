import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonsComponent } from './components/lessons/lessons.component';
import { LanguagesComponent } from './components/languages/languages.component';

const routes: Routes = [

    {path:'languages', component:LanguagesComponent},
    {path:'lessons',component:LessonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponet=[LanguagesComponent,LessonsComponent]