import { Component,OnInit ,ViewChild} from '@angular/core';
import { CardBlockComponent } from '../card-block/card-block.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CardBlockComponent,FormsModule,CommonModule],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent  implements OnInit{

  title = 'AppComponent title';
 name = "Irina";
 age = 24;

  constructor() 
  {
  }
  products= [
    { id: 1, name: 'Курс з Front-end розробки', price: 52500, description: 'Курс з Front-end розробки в Одесі.Опануйте професію front-end розробника для карєри в IT',color: 'blue'},
    { id: 2, name: 'Курс Тестування ПЗ', price: 27440, description: 'Курс тестувальник ПЗ (QA) в Одесі.На курсі QA ви навчитеся знаходити помилки в роботі сайтів та додатків та забезпечувати якість продукту та його процесів',color: 'blue'},
    { id: 3, name: 'Комп.графіка та дизайн', price: 118350, description: 'Курси графічного дизайну в Одесі.Отримайте професію та заробляйт',color: 'blue'},
  ];

  
  selected: any = null;

  nameChange(product: any) {
    this.selected = product;
  }

  isDiscount= false; 
  discount() {
    this.isDiscount = true;
  }

  ngOnInit(){
  
    }
}
