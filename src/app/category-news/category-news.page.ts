import { Component, OnInit } from '@angular/core';
import { NewService } from '../new-service.service';

@Component({
  selector: 'app-category-news',
  templateUrl: './category-news.page.html',
  styleUrls: ['./category-news.page.scss'],
})
export class CategoryNewsPage implements OnInit {

 arrData = []; 
  show: boolean = false;
  constructor(private newService:NewService) { 
      this.newService.messages$.subscribe(
        data=>{
          this.arrData.push(data)
        },
        err=> alert(err)
        );
        console.log(this.arrData);
        setTimeout(()=>{
          if(this.arrData.length == 0){
            this.show  = true;
          }
        })
      }

  ngOnInit() {
  }

    
}
