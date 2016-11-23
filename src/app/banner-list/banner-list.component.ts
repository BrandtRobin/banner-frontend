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

  constructor(private bannerService: BannerService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBanners();
  }

  getBanners(): void {
    this.bannerService.getBanners().subscribe(banners => this.banners = banners);
  }

  showHtml(id: string) {
    this.router.navigate([`/banners/${id}/html`]);
  }

  editBanner(id: string) {
    this.router.navigate(['/banners/', id]);
  }

  deleteBanner(id: string) {
    this.bannerService.deleteBanner(id)
    .subscribe(() => this.removeFromList(id));
  }

// Remove list item from ui for observable callback
  removeFromList(id: string) {
    this.banners = this.banners.filter(function(banner) {
      return banner.Id !== id;
    });
  }
}
