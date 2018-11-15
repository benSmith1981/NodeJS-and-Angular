import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class DetailComponent implements OnInit {

  product:any;

  constructor(public issueService:IssueService, private route: ActivatedRoute, private router: Router) { 
    console.log("DetailComponent")
  }

  ngOnInit() {
  
    this.issueService.getDiveSiteById('62625').subscribe((data: {}) => {
      console.log(data);
      this.product = data.dataResponse[0];
    });
    
  }

}