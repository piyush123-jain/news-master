import { Component, OnInit } from '@angular/core';
import { NewService } from '../new-service.service';
import { error } from 'protractor';

@Component({
  selector: 'app-define-news',
  templateUrl: './define-news.page.html',
  styleUrls: ['./define-news.page.scss'],
})
export class DefineNewsPage implements OnInit {
  data = false;
  categoryData: any;
  
  constructor(
    private newService: NewService) {

      
      this.newService.messages$.subscribe(
        
        data=>
        {console.log(data)
          this.categoryData = data['articles']},
        err=> alert(err)
          );
          
      }
      ngOnInit() {  }
    }

    