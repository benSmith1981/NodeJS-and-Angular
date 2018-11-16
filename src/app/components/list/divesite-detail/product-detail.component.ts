import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from '../../../issue.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class DetailComponent implements OnInit {

  product:any;

  constructor(public issueService:IssueService, private route: ActivatedRoute, private router: Router, private meta: Meta) { 
    console.log("DetailComponent")
    this.meta.addTags([
      {name: 'description', content: 'How to use Angular 4 meta service'},
      {name: 'author', content: 'talkingdotnet'},
      {name: 'keywords', content: 'Angular, Meta Service'}
    ]);
  }

  ngOnInit() {
  
    this.issueService.getDiveSiteById(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.product = data;
      this.meta.addTags([
        {name: 'description', content: 'YEYEYEYEYES'},
        {name: 'author', content: 'talkingdotnet'},
        {name: 'keywords', content: 'Angular, Meta Service'}
      ]);
    });
    
  }

}