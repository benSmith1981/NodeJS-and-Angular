import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  product:any;
  products:any = [];

  constructor(public issueService: IssueService, private route: ActivatedRoute, private router: Router) { 
        console.log("ListComponent")

  }

  ngOnInit() {
    console.log("ListComponent")
    /*
    this.issueService.getDiveSiteById('65465').subscribe((data: {}) => {

      console.log(data);
      this.product = data;
    });
    */
    
    this.products = [];
    this.issueService.getDiveSites().subscribe((data: {}) => {
      //console.log("Products "+data.dataResponse);
      this.products = data;
    });
  }

}
