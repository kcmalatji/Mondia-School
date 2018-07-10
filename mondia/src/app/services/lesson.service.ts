import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class LessonService {
    constructor(private http: Http) {
        console.log('lessons Service Initialized...');

    }
    getLesson() {
        return this.http.get('http://localhost:3000/api/lessons')
            .map(res => res.json());

    }
    addLesson(newLesson) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/lessons',JSON.stringify(newLesson),{headers: headers} )
            .map(res => res.json());

    }
    deleteLesson(id) {
        return this.http.delete('http://localhost:3000/api/lessons/'+ id)
            .map(res => res.json());

    }
    updateLesson(lesson) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
      
        return this.http.put('http://localhost:3000/api/lessons/'+ lesson._id,JSON.stringify(lesson),{headers: headers} )
            .map(res => res.json());

    }
}