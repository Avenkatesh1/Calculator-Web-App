import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-caluclator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caluclator.component.html',
  styleUrl: './caluclator.component.scss'
})
export class CaluclatorComponent {
  displayValue: string = '0';
  currentInput: string = '';
  operator: string = '';
  waitingForSecondOperand: boolean = false;

  appendNumber(number: string): void {
    if (this.waitingForSecondOperand) {
      this.displayValue = number;
      this.waitingForSecondOperand = false;
    } else {
      this.displayValue = this.displayValue === '0' ? number : this.displayValue + number;
    }
  }

  appendDecimal(): void {
    if (!this.displayValue.includes('.')) {
      this.displayValue += '.';
    }
  }

  setOperator(op: string): void {
    if (this.waitingForSecondOperand) {
      this.operator = op;
    } else {
      this.calculate();
      this.operator = op;
      this.waitingForSecondOperand = true;
    }
  }

  calculate(): void {
    const firstOperand = parseFloat(this.currentInput);
    const secondOperand = parseFloat(this.displayValue);

    if (!isNaN(firstOperand) && !isNaN(secondOperand)) {
      switch (this.operator) {
        case '+':
          this.displayValue = (firstOperand + secondOperand).toString();
          break;
        case '-':
          this.displayValue = (firstOperand - secondOperand).toString();
          break;
        case '*':
          this.displayValue = (firstOperand * secondOperand).toString();
          break;
        case '/':
          this.displayValue = secondOperand !== 0 ? (firstOperand / secondOperand).toString() : 'Error';
          break;
        default:
          break;
      }
    }

    this.currentInput = this.displayValue;
    this.operator = '';
  }

  clear(): void {
    this.displayValue = '0';
    this.currentInput = '';
    this.operator = '';
    this.waitingForSecondOperand = false;
  }
}

