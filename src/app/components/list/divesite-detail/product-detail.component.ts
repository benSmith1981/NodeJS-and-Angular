import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from '../../../issue.service';
import {
    DomSanitizer,
    Meta
} from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})


export class DetailComponent implements OnInit {

  site: any;
  applink: any;
  image: any;
//  var appIdentifier: String
  constructor(public issueService:IssueService, 
              private route: ActivatedRoute, 
              private router: Router, 
              private meta: Meta, 
              private sanitization: DomSanitizer) { 
    console.log("DetailComponent")
    this.applink = "https://testflight.apple.com/join/m8FhAgDg"
    //var appIdentifier =  "com.bensmithinc.wannadive://"

  }

  ngOnInit() {
    console.log(this.route.routeConfig.path)
    if (this.route.routeConfig.path == "diveSite/:id"){
      this.diveSiteRoute()
    } else if (this.route.routeConfig.path == "diveShop/:id"){
      this.diveShopRoute()
    }else if (this.route.routeConfig.path == "trip/:id"){
      this.diveTripRoute() 
    }
  }

  diveTripRoute() {
    this.issueService.getTripById(this.route.snapshot.params['id']).subscribe((data: {}) => {
      this.site = data["details"]["trip"][0]
      console.log(this.site)
        if (this.site.imagesDetails.length > 0) {
          this.image = this.site.imagesDetails[0].imageUrl
        } else {
          this.image = "https://s.hswstatic.com/gif/sharks-1.jpg"
        }

        //this.applink = "com.bensmithinc.wannadive://trip/"+this.site.id
        console.log(data)
        this.meta.addTags([
          {name: 'description', content: this.site.description},
          {name: 'title', content: this.site.name},
          {name: 'keywords', content: 'Dive Spot App, Diving, Scuba, Scuba Diving, Divespot'}
        ]);
    })
  }

  diveShopRoute() {
      this.issueService.getShopById(this.route.snapshot.params['id']).subscribe((data: {}) => {
        this.site = data["dataResponse"][0]
        console.log(this.site)
        if (this.site.imagesDetails.length > 0) {
          this.image = this.site.imagesDetails[0].imageUrl
        } else {
          this.image = "https://s.hswstatic.com/gif/sharks-1.jpg"
        }
        //this.applink = "com.bensmithinc.wannadive://diveShop/"+this.site.id

        this.meta.addTags([
          {name: 'description', content: this.site.description},
          {name: 'title', content: this.site.name},
          {name: 'keywords', content: 'Dive Spot App, Diving, Scuba, Scuba Diving, Divespot'}
        ]);
      })
  }

  diveSiteRoute() {
      this.issueService.getDiveSiteById(this.route.snapshot.params['id']).subscribe((data: {}) => {
        this.site = data["dataResponse"][0]
        console.log(this.site)
        if (this.site.imagesDetails.length > 0) {
          this.image = this.site.imagesDetails[0].imageUrl
        } else {
          this.image = "https://s.hswstatic.com/gif/sharks-1.jpg"
        }
        //this.applink = "com.bensmithinc.wannadive://diveSite/"+this.site.id
        console.log(this.applink)
        //this.applink = this.sanitization.bypassSecurityTrustStyle("com.bensmithinc.wannadive://diveSite/"+this.site.id);
        this.meta.addTags([
            {name: 'description', content: this.site.description},
            {name: 'title', content: this.site.name},
            {name: 'keywords', content: 'Dive Spot App, Diving, Scuba, Scuba Diving, Divespot'}
        ]);

      })
  }

}