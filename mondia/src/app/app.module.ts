import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { LanguagesComponent } from './components/languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
