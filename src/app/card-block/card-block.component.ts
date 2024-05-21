import { Component , Input, Output, EventEmitter,ContentChild ,ElementRef  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card-block',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './card-block.component.html',
  styleUrl: './card-block.component.css'
})
// export class CardBlockComponent {
//   @Input() userName:string = "";

//   @Output() userNameChange = new EventEmitter<string>();//Дочерний компонент отправляет родительскому строку 

//   onNameChange(model: string){

//       this.userName = model;
//       this.userNameChange.emit(model);//передача родителю через эмит
//   }
// }
export class CardBlockComponent {



  @Input() userName: any;  
  @Input() isDiscount: boolean = false;//TASK2



  
  @ContentChild("headerContent", {static:false})//TASK3
  header: ElementRef | undefined;//TASK3


  @Output() userNameChange = new EventEmitter<any>();//Дочерний компонент отправляет родительскому строку 

  onNameChange(){  
    this.userNameChange.emit(this.userName);  //передача родителю через єміт
  }
  
  ngAfterViewInit() {//викликажться після ініціалізації дочірніх компонентів.
    if (this.header) {
      this.header.nativeElement.style.backgroundColor = this.userName.color;
    }
  }

}


