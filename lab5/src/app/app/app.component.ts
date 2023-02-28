import { Component } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppAppComponent {
  categories = [{id: 1, title:'Чай'}, {id: 2, title:'Газированное'}, {id: 3, title:'Негазированное'}, {id: 4, title:'Вода'},{id: 5, title:'Странное'}];
  
}
