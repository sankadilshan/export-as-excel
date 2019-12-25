import { Component } from '@angular/core';

@Component({
    selector:'app-co',
    template: `
    <p>hello sample</p>
    {{user.username | uppercase | summary}}<br/>
    {{user.weight | number:'3.2-3'}}<br>
    {{user.money | currency:'AUD':true}}<br>
    {{user.date | date:shortdate }}<br>
    
    
    `
})
export class CoComponent{
    user={
        username:"hello  this is pipe uppercase dfdsfffffffffffffffffffffffffffffffffffffff  dfdf  dfdf dffffffffffffffff",
        age:23,
        weight:67.3354545,
        money:5.56,
        date:new Date(2019,5,12)
   }
}