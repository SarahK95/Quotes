import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote("", "", "", );
  @Output() addQuote = new EventEmitter<Quote>();
  // quote:string
  // author:string
  // name:string


  submitQuote(){
    this.addQuote.emit(this.newQuote);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
