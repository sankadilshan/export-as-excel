import {Pipe,PipeTransform} from '@angular/core'
@Pipe({
    name:'summary'
})
export class SummeryPipe implements PipeTransform{
    transform(value: string, arg?:any) {
       if(!value)
         return null;

        return value.substr(0,50);    
    }

}