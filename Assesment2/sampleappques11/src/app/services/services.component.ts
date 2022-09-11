import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
     numArray!: [1, 2, 3, 4, 5, 6, 7, 8, 9];
     block=false
     constructor() { }

  ngOnInit(): void {
  }
changeEvent(){
  this.block=!this.block
}
}
