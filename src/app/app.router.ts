import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BannerListComponent } from './banner-list/banner-list.component';
import { BannerFormComponent } from './banner-form/banner-form.component';
import { BannerDetailComponent } from './banner-detail/banner-detail.component';

export const router: Routes = [
  { path: 'banners', component: BannerListComponent },
  { path: 'banners/new', component: BannerFormComponent },
  { path: 'banners/:id', component: BannerDetailComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
