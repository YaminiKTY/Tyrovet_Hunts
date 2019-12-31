import { Component, OnInit } from '@angular/core';
import { RequirementService } from '../requirement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css']
})
export class ScheduleInterviewComponent implements OnInit {

  constructor(private requirementService: RequirementService ,  private router: Router) { }

  ngOnInit() {
  }
  addInterview(scheduleinterview){
    console.log(scheduleinterview);
    this.requirementService.scheduleInterview(scheduleinterview.value).subscribe(res => {
      console.log('interview sheduled successfully');
      alert('interview sheduled successfully...!')
      scheduleinterview.reset();
      this.router.navigateByUrl("/gettall");
    }, err => {
      console.log('interview sheduled fail');
    });
  }
  }

