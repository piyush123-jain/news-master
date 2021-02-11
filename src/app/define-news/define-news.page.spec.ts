import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DefineNewsPage } from './define-news.page';

describe('DefineNewsPage', () => {
  let component: DefineNewsPage;
  let fixture: ComponentFixture<DefineNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefineNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DefineNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
