import { Component, OnInit } from '@angular/core';
import { RequirementService } from '../requirement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-info',
  templateUrl: './candidate-info.component.html',
  styleUrls: ['./candidate-info.component.css']
})
export class CandidateInfoComponent implements OnInit {

  constructor(private requirementService: RequirementService ,  private router: Router) { }
  candidateInfo(reqform){
    console.log(reqform);
    this.requirementService.candidateInfo(reqform.value).subscribe(res => {
      console.log('candidateinfo added successfully');
      alert('candidate Added Successfully...!')
      reqform.reset();
      this.router.navigateByUrl("/gettallcandi");
    }, err => {
      console.log('requirement not added');
    });
  }
  

  ngOnInit() {
  }

}
