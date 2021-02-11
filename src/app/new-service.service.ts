import { Injectable } from '@angular/core';
import { Subject, Observable, observable } from 'rxjs';
import { merge } from 'rxjs';
import { map, scan } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class NewService {
    messages$: Observable<object>;
  
    private pushSource = new Subject<object>();
      Country_Name;

    constructor(private http:HttpClient,) {
      this.messages$ = this.pushSource.asObservable()
      
    }
  
    // define function for call the category
    categoryNews(category)
    {
      var categoryData = this.http.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=cb56a6533d4b4500a4f8bda920b1bbe5`)
          categoryData.subscribe(Data=> this.pushSource.next(Data));
    }
    
    // define function for top-headine News
    callNewsApi()
    {
      return this.http.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=cb56a6533d4b4500a4f8bda920b1bbe5`)

    }
    // define country Name
    countryName(set)
    {
        this.Country_Name = set;
    }
    news(t_h)
    {
      this.pushSource.next(t_h);
    }    

  }
  






// enum ActionType {
//   push = 'push',
//   pop = 'pop'
// }

// interface Action {
//   type: ActionType;
// }

// interface PushAction extends Action {
//   payload: boolean;
// }
// // create pop interface
// // interface PopAction extends Action { }

// @Injectable()
//     export class NewService {
//     messages$: Observable<boolean>;
  
//     private pushSource = new Subject<boolean>();
  
//     // create pop subject 
//     // private popSource = new Subject<void>();
  
//     constructor(private http:HttpClient,) {
//       const push$ = this.pushSource.asObservable()
//         .pipe(map((payload) => ({ type: ActionType.push, payload })));

//         // create pop objerable method 
//       // const pop$ = this.popSource.asObservable()
//       //   .pipe(map((payload) => ({ type: ActionType.pop })));
  
//       this.messages$ = merge(push$ )  // write pop method in merge option pop$
//         .pipe(
//         scan((acc: any, { payload, type }) => {
//           // pop option
//           // if (type === ActionType.pop) {
//           //   acc = acc.slice(0, -1);
//           // }
//           if (type === ActionType.push) {
//             // if we want to send array type data 
//             // acc = [...acc, payload]
//             acc = payload

//           }
//           return acc;
//         }, [])
//         )
//     }
  
//     pushMessage(msg) {
//     //  console.log(msg);
     
//       this.pushSource.next(msg)
//     }
  
//     // pop function  
//     // popMessage() {
//     //   this.popSource.next()
//     // }
//     categoryNews(category)
//     {
//       var categoryData = this.http.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=cb56a6533d4b4500a4f8bda920b1bbe5`)
//           categoryData.subscribe(Data=> console.log(Data));
//     }
    


//   }
  
