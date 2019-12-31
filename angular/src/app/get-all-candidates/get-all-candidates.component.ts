import { Component, OnInit } from '@angular/core';
import { RequirementService } from '../requirement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-candidates',
  templateUrl: './get-all-candidates.component.html',
  styleUrls: ['./get-all-candidates.component.css']
})
export class GetAllCandidatesComponent implements OnInit {
candidates:any[]
  constructor(private requirmentservice: RequirementService, private router: Router) { 
    this.getAllCandidates();
  }

  ngOnInit() {
  }
  getAllCandidates(){
    this.requirmentservice.getCandidate().subscribe(data => {
      console.log(data);
      this.candidates = data.candi;
      console.log(this.candidates);
    },
      err => {
        console.log(err);
      }, () => {
        console.log('Got The data')
      })
  }
  schedule(candidate){
    console.log(candidate)
    this.requirmentservice.SelectedCandidate=candidate;
     this.router.navigateByUrl('/interview');
  }
  }

