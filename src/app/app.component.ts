import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang_form';
  constructor(){}
  email:String="";
  pass:String="";
  data ={
    email:this.email,
    pass:this.pass
  }
  getValues(){
    console.log(this.email,this.pass);
  }
}
