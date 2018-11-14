import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:any;

  constructor(public issueService:IssueService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.issueService.getDiveSiteById(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.product = data;
    });
  }

}