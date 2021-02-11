import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(public toastController: ToastController) { }

  ngOnInit() { }
country_name = [
      {
        "name":"india",
        "img": "https://newsapi.org/images/flags/in.svg",
        "searchName":"in"
      },
      {
        "name":"new zeland",
        "img": "https://newsapi.org/images/flags/nz.svg",
        "searchName":"nz"
      },
      {
        "name":"united states",
        "img": "https://newsapi.org/images/flags/us.svg",
      "searchName":"nz"
      },
      {
        "name":"Austrila",
        "img": "https://newsapi.org/images/flags/au.svg",
        "searchName":"au"
      }
    ]

    countryNames = [
        {
          "name":"Brazil",
          "img": "https://newsapi.org/images/flags/br.svg",
          "searchName":"br"
        },
        {
          "name":"canda",
          "img": "https://newsapi.org/images/flags/ca.svg",
          "searchName":"ca"
        },
        {
          "name":"china",
          "img": "https://newsapi.org/images/flags/cn.svg",
          "searchName":"cn"
        },
        {
          "name":"Egypt",
          "img": "https://newsapi.org/images/flags/eg.svg",
          "searchName":"eg"
        }
    ]

country()
{
    this.presentToast();
}

async presentToast() {
  const toast = await this.toastController.create({
    message: 'This Page Under Development',
    duration: 2000
  });
  toast.present();
}

}
