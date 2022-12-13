import { Component } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent {
  public categorySelect:string
  public view:boolean;
    constructor(){
      this.categorySelect=""
      this.view=false
    }
  capturarCategory(){
    //select information is captured
    this.categorySelect=this.categorySelect
    console.log(this.categorySelect)
  }
  changeView(){
    this.view=!this.view
  }
}
