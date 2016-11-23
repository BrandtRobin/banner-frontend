import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
              private router: Router,
              private route: ActivatedRoute) { }

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


  editBanner(bannerId: string) {
    this.router.navigate(['/banners/', bannerId]);
  }

  deleteBanner(id: string) {
    this.bannerService.deleteBanner(id)
    .subscribe(() => this.removeFromList(id));
  }

  removeFromList(id: string) {
    this.banners = this.banners.filter(function(banner) {
      return banner.Id !== id;
    });
  }

  goToNewBannerForm() {
    this.router.navigate(['/banners/new']);
  }
}
