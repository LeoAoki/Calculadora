import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  resultadoExibir: string = ""
  valor1: number = 0
  valor2: number = 0
  operacao: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  addNumero(numero: string) {
    this.resultadoExibir += numero;
    if(this.valor1 == 0)
      this.valor1 = Number(this.resultadoExibir)
    else {
      this.valor2 = Number(this.resultadoExibir)
    }
  }

  addOperacao(operacao: string) {
    this.resultadoExibir = ""
    this.operacao = operacao
  }

  resultado() {
    switch(this.operacao) {
      case "+": {
          this.resultadoExibir = String(this.valor1 + this.valor2)
        break;
      }
      case "-": {
        this.resultadoExibir = String(this.valor1 - this.valor2)
         break;
      }
      case "*": {
        this.resultadoExibir = String(this.valor1 * this.valor2)
        break;
      }
      case "/": {
        this.resultadoExibir = String(this.valor1 / this.valor2)
        break;
      }
      default: {
      break;
      }
    }
    this.valor1 = Number(this.resultadoExibir)
    this.valor2 = 0
    this.operacao = ""

  }

  limpar() {
    this.resultadoExibir = ""
    this.valor1 = 0
    this.valor2 = 0
    this.operacao = ""
  }

}
