import { Component, OnInit } from '@angular/core';
import {LessonService} from '../../services/lesson.service';
import {Lesson} from '../../lesson';


@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  lessons: Lesson[];
  constructor(private lessonService:LessonService ) { 
    this.lessonService.getLesson().subscribe(lessons=>{
      this.lessons=lessons;
    }
    );
  }

  lessonname: string;
  language: string;
  description: string;
  details: string;
  
  addLesson() {
    
   var newlesson = {

      name: this.lessonname,
      language: this.language,
     description: this.description,
     details: this.details
   
    }
    console.log(newlesson);
    this.lessonService.addLesson(newlesson).subscribe(lesson => {
      this.lessons.push(lesson);
    });
  }//end of add method













  deleteLesson(id){
    var lessons=this.lessons;
    this.lessonService.deleteLesson(id).subscribe(data=>{
      if(data.n ==1){
        for(var i=0;i< lessons.length; i++ ){
          if(lessons[i]._id==id){
            lessons.splice(i,1);
          }
  
        }
      }
      
  });
  }
  updateLesson(lesson){
    var _lesson = {
      _id: lesson._id,
      name: lesson.name,
      description: lesson.description,
      details: lesson.details
    };
    console.log(_lesson);
    this.lessonService.updateLesson(_lesson).subscribe(data=>{
     
      
  });
  }

  lesson: Lesson
  onSelectProduct(lesson){
    this.lesson=lesson
  }
  ngOnInit() {
  }

}
