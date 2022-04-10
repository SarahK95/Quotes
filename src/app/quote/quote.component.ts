import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {name:'Sarah', author:'Dalai Lama',quote:'The purpose of our lives is to be happy'},
    {name:'Caro', author:'John Lennon',quote:'Life is what happens when you are busy making other plans'},
    {name:'Dave', author:'Stephen King',quote:'Get busy living or get busy dying.'},
      
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
