import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template:`
  
   <h2>{{title}}</h2>
   <h2 [textContent]= "title"></h2>
   <img src={{imageUrl}} />
   <img [src]="title" />
   <table>
         <tr>
           <td [attr.colspan]="colSpan"></td>
         </tr> 
   </table>
   <p [attr.color]='redC'>hello world</p>
   <button class="btn btn-secondary" [class.active]="isActive">click</button>
   <div (click)="onDivClicked()">
   <button [style.backgroundColor]="isActive ? 'red':'blue'"  (click)="onSave($event)">save</button>
   </div>
   <p>{{str}}</p>
   <p>{{event}}</p>
   <input (keyup)="onKeyUp($event)"/>
   <input (keyup.enter)="onKeyUps()"/>
   <div>
   <input (keyup.enter)="onKeyUps1($event)"/>
   </div>
   <input [(ngModel)]="email" />
   <h1>{{email}}</h1>
   
   `,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
 title="hello world"
  imageUrl="../src/assets/img";
  colSpan=2;
  str:string
  isActive=true;
  event:any;
  user={
       username:"sdm123",
       age:23,
       weight:67.3354545,
       money:5.56,
       date:new Date(2019,5,12)
  }
  constructor() { }
  onDivClicked(){
    console.log("div was clicked");
  }
  onSave($event){
    console.log("hello world button was clicked",$event)
    this.str="hello , button was clicked";
    this.event=$event.isTrusted;
    $event.stopPropagation();
    this.isActive!=this.isActive;
  }
  onKeyUp($event){
    if($event.keyCode ===13) console.log("Enter was entered",$event);
  }
  onKeyUps(){
    console.log("onKeyUps enterd")
  }
  onKeyUps1($event){
    console.log("onKeyUps enterd",$event.target.value)
  }
  ngOnInit() {
  }

}
