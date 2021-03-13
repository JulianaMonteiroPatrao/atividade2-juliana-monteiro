import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repeat',
  templateUrl: './repeat.component.html',
  styleUrls: ['./repeat.component.css']
})
export class RepeatComponent implements OnInit {
  num = 1;
  
  tabuada(){
    let lista: number[] = [];
    for(let i=1; i<=10; i++){
      lista.push(i * this.num);
    }
    return lista;
  }
  constructor() { }

  ngOnInit() {
  }

}