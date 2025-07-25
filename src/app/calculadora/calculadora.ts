import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculadora',
  imports: [CommonModule, FormsModule],
  templateUrl: './calculadora.html',
  styleUrls: ['./calculadora.css']
})

export class Calculadora {
  public numero1: number | null = null;
  public numero2: number | null = null;
  public resultado: number = 0;

  //Variable string para el título de la calculadora
  public titulo: string = '';

  //Variable string para la operación actual
  public operacionActual: string = 'ninguna';

  // Variables boolean(true-false) para mostrar el resultado
  public mostrarResultado: boolean = false;
 
  //Variable tipo string de arreglo para el historial de operaciones
  public historial: string[] = [];
  
  private readonly MAX_HISTORIAL: number = 5;

  constructor() {
    console.log('Calculadora inicializada');
  }

  public sumar(): void {
    if (this.numero1 !== null && this.numero2 !== null) {
      this.resultado = this.numero1 + this.numero2; 

      this.operacionActual = 'suma';
      this.mostrarResultado = true;
      // Template literal $ interpolación strings, Agregar la operación al historial
      this.agregarAlHistorial(` ${this.numero1} + ${this.numero2} = ${this.resultado} `);
    }
  }

  public restar(): void{
    if (this.numero1 !== null && this.numero2 !== null) {
      this.resultado = this.numero1 - this.numero2;

      this.operacionActual = 'Restar';
      this.mostrarResultado = true;
      // Template literal $ interpolación strings, Agregar la operación al historial
      this.agregarAlHistorial(` ${this.numero1} - ${this.numero2} = ${this.resultado} `);
    }
  }

  public dividir(): void {
    if (this.numero1 !== null && this.numero2 !== null) {
      if(this.numero2 != 0){
        this.resultado = this.numero1 / this.numero2;
        this.operacionActual = 'Division';
        this.mostrarResultado = true;
        // Template literal $ interpolación strings, Agregar la operación al historial
        this.agregarAlHistorial(` ${this.numero1} / ${this.numero2} = ${this.resultado} `);
      }else {
        alert('No se puede dividir por cero');
      }
    }
  }

  public multiplicar(): void {
    if (this.numero1 !== null && this.numero2 !== null) {
      this.resultado = this.numero1 * this.numero2;
      this.operacionActual = "Multiplicar";
      this.mostrarResultado = true;
      // Template literal $ interpolación strings, Agregar la operación al historial
      this.agregarAlHistorial(` ${this.numero1} * ${this.numero2} = ${this.resultado} `);
    }
  }

  public limpiar(): void {
    this.numero1 = null;
    this.numero2 = null;
    this.resultado = 0;
    this.operacionActual = 'ninguna';
    this.mostrarResultado = false;
  }

  public limpiarHistorial(): void {
    this.historial = [];// Array vacío
  }

  private agregarAlHistorial(operacion:string): void {

    this.historial.unshift(operacion); 
    if(this.historial.length > this.MAX_HISTORIAL){
      this.historial.pop(); // Elimina el último elemento del historial si supera el máximo
    }
  }

  public obtenerNumeroOperaciones(): number{
    return this.historial.length; // Retorna la cantidad de operaciones en el historial
  }

  // Método para debug panel
  public getDebugInfo() {
    return {
      numero1: this.numero1 ?? null,
      numero2: this.numero2 ?? null,
      operacionActual: this.operacionActual ?? '',
      mostrarResultado: this.mostrarResultado ?? false,
      resultado: this.resultado ?? null
    };
  }


  public calcular(operacion: string, num1:number, num2:number): number {
    switch (operacion){
      case 'suma':
        return num1 + num2;
      case 'resta': 
        return num1 - num2;
      case 'multiplicacion':
        return num1 * num2;
      case 'division':
        return num2 !== 0 ? num1 / num2 : 0;
      default:
        return 0; // Si la operación no es válida, retorna 0
    }
  }


}

