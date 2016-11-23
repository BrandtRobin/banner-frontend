import { Component, OnInit } from '@angular/core';
import { BannerService } from './banner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  constructor(private bannerService: BannerService) {}

  ngOnInit(): void {
    this.getName();
  }

  getName(): void {
    this.title = this.bannerService.getString();
  }
}
