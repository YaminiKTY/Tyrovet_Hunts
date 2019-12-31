import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddrequirementComponent } from './addrequirement/addrequirement.component';
import { UpdaterequirementComponent } from './updaterequirement/updaterequirement.component';
import { GetallrequirementComponent } from './getallrequirement/getallrequirement.component';
import {HttpClientModule} from '@angular/common/http';
import { CandidateInfoComponent } from './candidate-info/candidate-info.component';
import { ScheduleInterviewComponent } from './schedule-interview/schedule-interview.component';
import { GetAllCandidatesComponent } from './get-all-candidates/get-all-candidates.component';
import { InterviewComponent } from './interview/interview.component';
import { SchedulingInterviewReqComponent } from './scheduling-interview-req/scheduling-interview-req.component';
import { GetallscheduleInterviewComponent } from './getallschedule-interview/getallschedule-interview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HighchartsChartModule} from 'highcharts-angular';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddrequirementComponent,
    UpdaterequirementComponent,
    GetallrequirementComponent,
    CandidateInfoComponent,
    ScheduleInterviewComponent,
    GetAllCandidatesComponent,
    InterviewComponent,
    SchedulingInterviewReqComponent,
    GetallscheduleInterviewComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule,
    RouterModule.forRoot([
      { path: '', component: HeaderComponent },
      { path: 'addreq', component: AddrequirementComponent },
      { path: 'updatereq', component: UpdaterequirementComponent },
      {path:'gettall',component:GetallrequirementComponent},
      {path:'candidateinfo',component:CandidateInfoComponent},
      {path:'schedule',component:ScheduleInterviewComponent},
      {path:'gettallcandi',component:GetAllCandidatesComponent},
      {path:'schedulingRequirment',component:SchedulingInterviewReqComponent},
      {path:'interview',component:InterviewComponent},
      {path:'getallschedule',component:GetallscheduleInterviewComponent},
      {path:'dashboard',component:DashboardComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
