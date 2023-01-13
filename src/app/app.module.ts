import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FraudActivityDetailsComponent } from './fraud-activity-details/fraud-activity-details.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { FraudImpactComponent } from './fraud-impact/fraud-impact.component';
 import { MyServiceService } from './my-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FraudActivityDetailsComponent,
    SubjectDetailsComponent,
    FraudImpactComponent
  ],
  imports: [
 
  BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient, MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
