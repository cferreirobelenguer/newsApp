import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputComponentComponent } from './input-component.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NewsService } from './services/news.service';
import { ShowInfoComponent } from '../show-info/show-info.component';


@NgModule({
  declarations: [
    //import the components
    InputComponentComponent,
    ShowInfoComponent
  ],
  exports:[
    //exports the component to call in app.module.ts
    InputComponentComponent,
    ShowInfoComponent
  ],
  imports: [
    //the modules
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  //the service
  providers: [NewsService]
})
export class InputModule { }
