import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [

    new Quote('The purpose of our lives is to be happy.', 'Dalai Lama','Sarah'),
    new Quote('Life is what happens when you are busy making other plans.', 'John Lennon','Caro'),
    new Quote('Get busy living or get busy dying.','Stephen King','Dave'),  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
