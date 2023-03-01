import { Component } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppAppComponent {
  categories = [{id: 1, title:'Drink'}, {id: 2, title:'Smartphone'}, {id: 3, title:'Earphone'}, {id: 4, title:'mouse'}];
  
}
