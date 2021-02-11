import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryNewsPage } from './category-news.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryNewsPageRoutingModule {}
