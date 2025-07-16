import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})

export class Calculadora {
  public numero1: number = 0;
  public numero2: number= 0;
  public resultado: number = 0;

  //Variable string para el título de la calculadora
  public titulo: string = 'Calculadora con data-binding';

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
    this.resultado = this.numero1 + this.numero2; 

    this.operacionActual = 'suma';
    this.mostrarResultado = true;
    // Template literal $ interpolación strings, Agregar la operación al historial
    this.agregarAlHistorial(` ${this.numero1} + ${this.numero2} = ${this.resultado} `);

  }

  public restar(): void{
    this.resultado = this.numero1 - this.numero2;

    this.operacionActual = 'Restar';
    this.mostrarResultado = true;
    // Template literal $ interpolación strings, Agregar la operación al historial
    this.agregarAlHistorial(` ${this.numero1} - ${this.numero2} = ${this.resultado} `);

  }

  public dividir(): void {
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

  public multiplicar(): void {
    this.resultado = this.numero1 * this.numero2;
    this.operacionActual = "Multiplicar";
    this.mostrarResultado = true;
    // Template literal $ interpolación strings, Agregar la operación al historial
    this.agregarAlHistorial(` ${this.numero1} * ${this.numero2} = ${this.resultado} `);
  }

  public limpiar(): void {
    this.numero1 = 0;
    this.numero2 = 0;
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

