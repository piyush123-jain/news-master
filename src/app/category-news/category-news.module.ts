import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryNewsPageRoutingModule } from './category-news-routing.module';

import { CategoryNewsPage } from './category-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryNewsPageRoutingModule
  ],
  declarations: [CategoryNewsPage]
})
export class CategoryNewsPageModule {}
