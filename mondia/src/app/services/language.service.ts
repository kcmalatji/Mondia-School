import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LanguageService {
    constructor(private http: Http) {
        console.log('language Service Initialized...');

    }
    getLanguages() {
        return this.http.get('http://localhost:3000/api/Programming_language')
            .map(res => res.json());

    }

    addLanguage(newLanguage) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log(newLanguage);
        return this.http.post('http://localhost:3000/api/Programming_language',JSON.stringify(newLanguage),{headers: headers} )
            .map(res => res.json());

    }
    deleteLanguage(id) {
        return this.http.delete('http://localhost:3000/api/Programming_language/'+ id)
            .map(res => res.json());

    }
    updateLanguage(language) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
      
        return this.http.put('http://localhost:3000/api/Programming_language/'+ language._id,JSON.stringify(language),{headers: headers} )
            .map(res => res.json());

    }
   
}