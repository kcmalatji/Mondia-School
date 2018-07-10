import { Component } from '@angular/core';
import {LanguageService} from './services/language.service';
import {LessonService} from './services/lesson.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LanguageService,LessonService]
})
export class AppComponent {
  title = 'Mondia';
}
