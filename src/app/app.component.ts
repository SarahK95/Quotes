import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];

  constructor(){
    this.quotes = ['The purpose of our lives is to be happy', 'Life is what happens when you are busy making other plans', 'Get busy living or get busy dying']
  }
}
