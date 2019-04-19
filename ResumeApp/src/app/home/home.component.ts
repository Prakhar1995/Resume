import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles: [`
  :host {
      flex-grow:1;
      justify-content:center;
      align-items: center;
         display: flex;
  }
`]
  
})
export class HomeComponent implements OnInit {

  constructor() { 
    
  }
  createResume=function(){
    (window.location.href="contact")
  }

  ngOnInit() {
  }

}
