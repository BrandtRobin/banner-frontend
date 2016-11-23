import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Banner } from '../banner';
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-banner-form',
  templateUrl: './banner-form.component.html',
  styleUrls: ['./banner-form.component.css']
})
export class BannerFormComponent implements OnInit {
  private banner: Banner = new Banner();
  constructor(private bannerService: BannerService,
              private router: Router) { }

  ngOnInit() {
  }

  createBanner(banner: Banner) {
    this.bannerService.createBanner(banner).subscribe(() => this.gotoBannerList());
  }

  gotoBannerList() {
    this.router.navigate(['/banners']);
  }
}
