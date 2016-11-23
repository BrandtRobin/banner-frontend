import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Banner } from '../banner';
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-banner-detail',
  templateUrl: './banner-detail.component.html',
  styleUrls: ['./banner-detail.component.css']
})
export class BannerDetailComponent implements OnInit {
  @Input()
  banner: Banner = new Banner();

  constructor(private bannerService: BannerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getBanner();
  }

  getBanner() {
    this.route.params
    .map(params => params['id'])
    .switchMap(id => this.bannerService.getBanner(id))
    .subscribe(banner => this.banner = banner);
  }

  updateBanner(banner: Banner) {
    this.bannerService.updateBanner(this.banner)
    .subscribe(() => this.router.navigate(['/banners']));
  }

}
