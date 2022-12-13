import { Component, OnInit } from '@angular/core';
import { news } from './interface/newsInterface';
import { NewsService } from './services/news.service';



@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css'],
  providers:[NewsService]
})
export class InputComponentComponent {
  public categorySelect:string
  public datosNews:news;
  public view:boolean;
  public infoTotal:news[];

  //Implements service in the component
    constructor(private newsService:NewsService){
      this.categorySelect=""
      this.view=false
      this.datosNews={
        name:"",
        description:"",
        url:"",
        category:"",
        country:""
      }
      this.infoTotal=[]
    }
  
  
  captureCategory(){
    //select information is captured with ngModel
    this.categorySelect=this.categorySelect
    console.log(this.categorySelect)
    
  }
  searchInfo(){
    this.captureNews()
    this.categorySelect=""
  }
  changeView(){
    //boolean that it changes the view when the user press the button
    this.view=!this.view
  }

  captureNews(){
    this.newsService.getNews(this.categorySelect).subscribe(
      result=>{
        //put the results into array
        for(let i of result.sources){
          this.datosNews={
            name:i.name,
            description:i.description,
            url:i.url,
            category:i.category,
            country:i.country
          }
          this.infoTotal.push(this.datosNews)
        }
        
        console.log(this.infoTotal)
      }
    )
  }
}
