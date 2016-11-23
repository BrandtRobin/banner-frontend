import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-banner-html',
  templateUrl: './banner-html.component.html',
  styleUrls: ['./banner-html.component.css']
})
export class BannerHtmlComponent implements OnInit {
  private html: string;

  constructor(private bannerService: BannerService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBannerHtml();
  }

  getBannerHtml() {
    this.route.params
    .map(params => params['id'])
    .switchMap(id => this.bannerService.getBannerHtml(id))
    .subscribe(html => this.html = html);
  }
}
