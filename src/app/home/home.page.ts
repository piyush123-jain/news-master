import { Component, OnInit } from '@angular/core';
import { NewService } from '../new-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  data:boolean = false;
  constructor(private router:Router,
          private newService:NewService)  {}

   newsData:any;

  ngOnInit() {
    setTimeout(() => {
      this.data= true
    }, 1000);
    this.newService.callNewsApi()
    .subscribe(datas=>{
      this.newsData = datas["articles"];
  })
}
showNews(t_h)
{
  this.newService.news(t_h);
}

    
}
