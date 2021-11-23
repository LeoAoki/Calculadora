import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  auxiliar: string = ""
  exibicao: string = ""
  valor1: number = 0
  valor2: number = 0
  operacao: string = ""
  i: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  addNumero(numero: string) {
    this.auxiliar += numero
    this.exibicao += numero
    if(!this.i)
      this.valor1 = Number(this.auxiliar)
    else {
      this.valor2 = Number(this.auxiliar)
    }
  }

  addOperacao(operacao: string) {
    this.auxiliar = ""
    this.exibicao = this.exibicao + " " + operacao + " "
    this.operacao = operacao
    this.i = true
  }

  resultado() {
    switch(this.operacao) {
      case "+": {
        this.exibicao = String(this.valor1 + this.valor2)
        break;
      }
      case "-": {
        this.exibicao = String(this.valor1 - this.valor2)
         break;
      }
      case "*": {
        this.exibicao = String(this.valor1 * this.valor2)
        break;
      }
      case "/": {
        this.exibicao = String(this.valor1 / this.valor2)
        break;
      }
      default: {
      break;
      }
    }
    this.valor1 = Number(this.exibicao)
    this.valor2 = 0
    this.auxiliar = ""
    this.operacao = ""
  }

  limpar() {
    this.auxiliar = ""
    this.exibicao = ""
    this.valor1 = 0
    this.valor2 = 0
    this.operacao = ""
    this.i = false
  }

}
