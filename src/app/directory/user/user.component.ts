import { Component, OnInit ,Input} from '@angular/core';
import { AdminService } from 'src/admin.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ExcelService } from 'src/excel.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   @Input() isFavourite: boolean;
  export=[]
  jsondata:any
  headers=['apis','api','transaction']
  constructor(private http:HttpClient, private adminServie:AdminService,private excelService:ExcelService) { 
  }
  @Input() post={
    title:"Title",
    isFavourite: true
  }
  ngOnInit() {
    this.adminServie.sendData().subscribe(
      data=>{
        this.jsondata=data
        this.headers.forEach(header=>{
          this.export.push(header);
         // console.log(header,"=",data[header])
          data[header]['results'].forEach(result=>{
              //  console.log(result);
                this.export.push(result);
          })
        })

      }
    )
  }
  onClick(){
    this.isFavourite=!this.isFavourite;
  }

  exportToExcel(){
   // console.log('export',this.export);  
    //this.excelService.exportAsExcelFile(this.export,'dfdfdf')
    console.log(this.jsondata['apis']['results'])
   console.log(Object.keys(this.jsondata['apis']['results'][0]))
   console.log(Object.values(this.jsondata['apis']['results'][0]))
   this.excelService.generate(this.headers,this.jsondata);
  }
}
