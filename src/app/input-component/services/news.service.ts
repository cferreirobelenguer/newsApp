import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


//Http petition
@Injectable()
export class NewsService{
    public url:string
    public key:string
    constructor( public _http:HttpClient){
        //url of API REST mediastack
        this.key="&apiKey=c8f11d1ce8d249978e871681d2b3da6d"
        this.url='https://newsapi.org/v2/top-headlines/sources?category='
        
    }

    getNews(category:string): Observable<any>{
        //Recieve the category in parameter
        return this._http.get(this.url+category+this.key)
    }
    


}