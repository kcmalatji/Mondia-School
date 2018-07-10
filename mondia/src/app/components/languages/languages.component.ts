import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Language } from '../../language';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  languages: Language[];
  constructor(private languageService: LanguageService) {
    this.languageService.getLanguages().subscribe(languages => {
      this.languages = languages;
    }
    );
  }

  Lname: string;
  title: string;
  introduction: string;

 
  addLanguage() {
    
     var newlanguage = {
      name: this.Lname,
      title: this.title,
      introduction: this.introduction
      
    }
   
    this.languageService.addLanguage(newlanguage).subscribe(language => {
      this.languages.push(language);
    });
  }//end of add method




  

  deleteLanguage(id){
    var languages=this.languages;
    this.languageService.deleteLanguage(id).subscribe(data=>{
      if(data.n ==1){
        for(var i=0;i< languages.length; i++ ){
          if(languages[i]._id==id){
            languages.splice(i,1);
          }
  
        }
      }
      
  });
  }
  updateLanguage(language){
    var _language = {
      _id: String(language._id),
      name: language.name,
      introduction: language.introduction,
      title: language.title
    };
   console.log(_language._id);
    this.languageService.updateLanguage(_language).subscribe(data=>{
     
  });
  }


  language: Language
  onSelectProduct(language){
    this.language=language
  }

  ngOnInit() {
  }

}
