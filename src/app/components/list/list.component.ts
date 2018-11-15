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

    this.divesites()
  }

  divesites() {
    this.products = [];
    this.issueService.getDiveSites().subscribe((data: {}) => {
      //console.log("Products "+data.dataResponse);
      this.products = data;
    });
  }

  diveSiteBy(id) {
    console.log("diveSiteBy(id) "+id);
    this.issueService.getDiveSiteById(id).subscribe((data: {}) => {
      console.log(data);

      this.router.navigate(['divesite-detail/'+id]);
      console.log(data);
      this.product = data;
    });
  }

}
