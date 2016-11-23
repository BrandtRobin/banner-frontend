import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Banner } from '../banner';
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.css']
})
export class BannerListComponent implements OnInit {
  banners: Banner[];
  @Input()
  selectedbanner: Banner;
  private banner: Banner = new Banner();
  constructor(private bannerService: BannerService,
              private router: Router) { }

  ngOnInit() {
    this.banner.Html = '<h1>yo</h1>';
    this.getBanners();

  }

  getBanners(): void {
    this.bannerService.getBanners().subscribe(banners => this.banners = banners);
  }

  onSelect(banner: Banner): void {
    // this.selectedbanner = banner;
    console.log('banner: ' +banner.Html);
  }

  getSelected(): Banner {
    return this.selectedbanner;
  }

  goToNewBannerForm() {
    this.router.navigate(['/banners/new']);
  }

  editBanner(bannerId: string) {
    this.router.navigate(['/banners/', bannerId]);
  }

}
