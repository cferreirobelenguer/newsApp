import { Component, Input, OnInit } from '@angular/core';
import { news } from '../input-component/interface/newsInterface';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent {
  @Input() infoTotal:news[]
  @Input() categorySelect:string=""
  
  constructor(){
    this.infoTotal=[]
  }
}
