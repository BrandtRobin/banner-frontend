import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/Rx';
import { Banner } from './banner';

@Injectable()
export class BannerService {

  private bannerUrl: string = "http://localhost:65512/api/banner";
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getBanners(): Observable<Banner[]> {
    return this.http.get(this.bannerUrl)
                .map(response => response.json() as Banner[]);
  }

  getBanner(id: string): Observable<Banner> {
    return this.http.get(`${this.bannerUrl}/${id}`)
                .map(response => response.json() as Banner);
  }

  createBanner(banner: Banner): Observable<Banner> {
    return this.http.post(this.bannerUrl, banner, this.headers)
                .map(response => response.json() as Banner);
  }

  updateBanner(banner: Banner): Observable<Banner> {
    return this.http.put(`${this.bannerUrl}/${banner.Id}`, banner, this.headers)
                .map(response => response.json() as Banner);
  }

  deleteBanner(id: string): Observable<any> {
    return this.http.delete(`${this.bannerUrl}/${id}`)
            .map(() => {});
  }

  getBannerHtml(id: string): Observable<string> {
    return this.http.get(`${this.bannerUrl}/${id}/html`)
    .map(response => response.text());
  }

}
