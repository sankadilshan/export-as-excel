import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './directory/course/course.component';
import { CoComponent } from './directory/course/co.component';
import { SummeryPipe } from './directory/course/summery.pipe';
import { UserComponent } from './directory/user/user.component';
import {HttpClientModule} from '@angular/common/http'
import { AdminService } from 'src/admin.service';
import { ExcelService } from 'src/excel.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoComponent,
    SummeryPipe,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AdminService,ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
