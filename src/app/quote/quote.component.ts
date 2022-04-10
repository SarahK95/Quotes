import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {quote:'The purpose of our lives is to be happy',  author:'Dalai Lama', name:'Sarah'},
    {quote:'Life is what happens when you are busy making other plans', author:'John Lennon', name:'Caro'},
    {quote:'Get busy living or get busy dying.', author:'Stephen King', name:'Dave'},
      
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
