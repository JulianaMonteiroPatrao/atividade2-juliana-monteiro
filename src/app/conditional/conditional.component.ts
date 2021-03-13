import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.css']
})
export class ConditionalComponent implements OnInit {
  num = 1;

  ehImpar(){
    return this.num % 2;
  }
  
  constructor() { }

  ngOnInit() {
  }

}