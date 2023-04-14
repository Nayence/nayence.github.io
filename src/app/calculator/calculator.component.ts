import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  calculatorForm = new FormGroup({
    number1: new FormControl(),
    number2: new FormControl(),
    operation: new FormControl('add')
  });

  result: number | null = null;

  onSubmit() {
    const { number1, number2, operation } = this.calculatorForm.value;

    switch (operation) {
      case 'add':
        this.result = number1 + number2;
        break;
      case 'subtract':
        this.result = number1 - number2;
        break;
      case 'multiply':
        this.result = number1 * number2;
        break;
      case 'divide':
        if (number2 === 0) {
          alert('La division par 0 est pas possible');
          return;
        }
        this.result = number1 / number2;
        break;
      default:
        alert('Operation pas valide');
    }
  }
}