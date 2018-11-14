import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-components-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  product:any;

  constructor(public issueService: IssueService, private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit() {
      console.log("ListComponent")

      this.issueService.getDiveSiteById(this.route.snapshot.params['65465']).subscribe((data: {}) => {

      console.log(data);
      this.product = data;
    });
  }

}
