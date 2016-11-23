import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { BannerListComponent } from './banner-list/banner-list.component';
import { BannerService } from './banner.service';
import { BannerFormComponent } from './banner-form/banner-form.component';
import { BannerDetailComponent } from './banner-detail/banner-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerListComponent,
    BannerFormComponent,
    BannerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [BannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
