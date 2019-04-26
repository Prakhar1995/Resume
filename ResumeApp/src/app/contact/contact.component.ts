import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  styles: [`
  :host {
    display:flex;
    flex-grow:1;
    align-items:center;
    flex-direction:column;      
  }
`]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
