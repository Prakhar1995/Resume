import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag:boolean=true;
  title = 'ResumeApp';
  toggle=function(){
    if (this.flag==true){
    document.getElementById("sidebar").style.display="block";
    this.flag=false;
    }
    else{
      document.getElementById("sidebar").style.display="none";
      this.flag=true;
    }
  }
}
