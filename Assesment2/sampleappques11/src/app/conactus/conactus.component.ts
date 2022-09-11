import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-conactus',
  templateUrl: './conactus.component.html',
  styleUrls: ['./conactus.component.css']
})
export class ConactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 public addEmployee(f:NgForm){

 }
ShowFunction(): void{
  alert("our team will contact soon..")
}
}