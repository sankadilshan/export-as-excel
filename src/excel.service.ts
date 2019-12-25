import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import {Workbook} from 'exceljs'
import * as XLSX from 'xlsx';


const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelService {
  constructor() { }
generate(headers:any,d:any){
  const title=''
  let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('sample export');

  console.log(d)
  console.log(headers[0])
 headers.forEach(element => {
   console.log(element)
   //console.log(d[element]['results'])
   //add title
     let titleRow=worksheet.addRow([element])
     //title css
     titleRow.font = { name: 'Comic Sans MS', family: 4, size: 16, underline: 'double', bold: true }
     worksheet.addRow([])
     //add header
     let headerRow=worksheet.addRow(Object.keys(d[element]['results'][0]))
     headerRow.eachCell((cell, number) => {
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFDAB9' },
          bgColor: { argb: '7FFFD4' }
        }
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
      })
      //add results
     d[element]['results'].forEach(result =>{
       // worksheet.addRow(result)
        console.log(Object.values(result))
        //make array with values
        worksheet.addRow(Object.values(result))
     })
    // worksheet.addRow(d[element]['results'])
     worksheet.addRow([])
 });

  //const title="sample excel";
  //const header = ["Year", "Month", "Make", "Model", "Quantity", "Pct"]  
  const data=[]

  
    let titleRow = worksheet.addRow([title]);
    titleRow.font = { name: 'Comic Sans MS', family: 4, size: 16, underline: 'double', bold: true }
    worksheet.addRow([]);

    worksheet.addRow([]);

    //Add Header Row
  //  let headerRow = worksheet.addRow(header);

        // Cell Style : Fill and Border
        // headerRow.eachCell((cell, number) => {
        //   cell.fill = {
        //     type: 'pattern',
        //     pattern: 'solid',
        //     fgColor: { argb: 'FFFFFF00' },
        //     bgColor: { argb: 'FF0000FF' }
        //   }
        //   cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
        // })
        worksheet.addRow([])
       
         
    //Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
     FileSaver.saveAs(blob, 'Export Data');
    })




}

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet',worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

}