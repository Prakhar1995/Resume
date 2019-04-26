import { Component } from '@angular/core';
import{AngularFireDatabase} from '@angular/fire/database'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  flag:boolean=true;
  title = 'ResumeApp';
  constructor(db:AngularFireDatabase){
    let res=db.list('name')
    .valueChanges().subscribe(resp=>{
      console.log(resp)
    })
    console.log("Hello")
    console.log(res)
  }
  // toggle=function(){
  //   if (this.flag==true){
  //   document.getElementById("sidebar").style.display="block";
  //   this.flag=false;
  //   }
  //   else{
  //     document.getElementById("sidebar").style.display="none";
  //     this.flag=true;
  //   }
  // }
}
