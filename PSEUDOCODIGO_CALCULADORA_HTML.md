# 🧮 PSEUDOCÓDIGO - Componente Calculadora Angular

## 📋 **Índice**

1. [HTML - Estructura del Template](#html---estructura-del-template)
2. [Distribución de Tareas](#distribución-de-tareas)

---

## 🏗️ **HTML - Pseudocódigo del Template**

### 📋 **Instrucciones para implementar calculadora.html**

#### **🎯 SECCIÓN 1: Contenedor Principal**

```
CREAR un div con clase "calculadora-container"
  ESTE div será el contenedor principal de toda la calculadora
  DEBE envolver todo el contenido del componente
```

#### **🎯 SECCIÓN 2: Título del Componente**

```
DENTRO del contenedor principal:
  CREAR un encabezado h1
  USAR interpolation para mostrar la propiedad "titulo" del componente
  SI la propiedad titulo está vacía, MOSTRAR "Calculadora Angular" como texto por defecto
  USAR el operador OR (||) para esta lógica condicional
```

#### **🎯 SECCIÓN 3: Panel de Información**

```
CREAR un div con clase "info-panel"
  APLICAR property binding para agregar clases dinámicas:
    - Clase "panel-activo" SI mostrarResultado es verdadero
    - Clase "tiene-operaciones" SI el historial tiene elementos

  DENTRO del panel crear DOS subsecciones:

  Subsección A - Información de operación:
    CREAR div contenedor
    AÑADIR h2 que muestre: "Operación actual: " + operacionActual
    SI operacionActual está vacío, MOSTRAR "Ninguna"
    AÑADIR párrafo que muestre: "Total de operaciones: " + cantidad de elementos en historial
    USAR operador ternario para verificar si historial existe

  Subsección B - Resultado y estado:
    CREAR div contenedor
    AÑADIR h2 con texto "Resultado"
    CREAR div con clase "resultado-numero" que muestre el resultado
    SI resultado es null, MOSTRAR "-" en su lugar
    CREAR span con clase "badge" para mostrar estado
    APLICAR property binding para clases dinámicas del badge:
      - "badge-new" SI mostrarResultado es verdadero
      - "badge-old" SI mostrarResultado es falso
    MOSTRAR texto "ACTIVO" o "INACTIVO" según el estado
```

#### **🎯 SECCIÓN 4: Entrada de Números**

```
CREAR div con clase "entrada-numeros"
  AÑADIR h2 con texto "Ingresa los números"

  Para el primer número:
    CREAR label asociado al input con for="numero1"
    CREAR input con las siguientes características:
      - id="numero1"
      - class="input-numero"
      - type="number"
      - USAR two-way binding [(ngModel)] conectado a la propiedad numero1
      - placeholder descriptivo

  Para el segundo número:
    REPETIR la estructura anterior pero para numero2
    CAMBIAR los identificadores y la conexión ngModel correspondiente
```

#### **🎯 SECCIÓN 5: Botones de Operaciones**

```
CREAR div con clase "botones-operaciones"

  Para CADA operación (suma, resta, multiplicación, división):
    CREAR button con:
      - Clase base "btn" + clase específica (ej: "btn-suma")
      - Event binding (click) que ejecute el método correspondiente
      - Property binding [disabled] que desactive el botón SI:
        * numero1 es null O numero2 es null
        * Para división: ADEMÁS verificar que numero2 no sea 0
      - Emoji y texto descriptivo de la operación

  CREAR botón "Limpiar":
    - Event binding (click) que ejecute método limpiar()
    - SIN condición de deshabilitado

  CREAR botón "Limpiar Historial":
    - Event binding (click) que ejecute método limpiarHistorial()
    - Property binding [disabled] que desactive SI historial está vacío
```

#### **🎯 SECCIÓN 6: Panel de Resultado**

```
CREAR div con clase "resultado-panel"
  USAR structural directive *ngIf para mostrar SOLO SI:
    - mostrarResultado es verdadero Y resultado no es null

  DENTRO del panel:
    AÑADIR h2 con texto "Resultado de la operación"
    CREAR div con clase "resultado-numero" mostrando el resultado
    CREAR div con clase "resultado-info" que muestre:
      - numero1 + símbolo de operación + numero2 + " = " + resultado
      - USAR operadores ternarios anidados para determinar el símbolo:
        * SI operacionActual es "suma" MOSTRAR "+"
        * SI operacionActual es "resta" MOSTRAR "-"
        * SI operacionActual es "multiplicación" MOSTRAR "×"
        * SI operacionActual es "división" MOSTRAR "÷"
        * EN CASO CONTRARIO MOSTRAR "?"
```

#### **🎯 SECCIÓN 7: Historial de Operaciones**

```
CREAR div con clase "historial-panel"
  USAR structural directive *ngIf para mostrar SOLO SI historial existe Y tiene elementos

  AÑADIR h3 mostrando "Historial de operaciones" + cantidad entre paréntesis

  CREAR lista ul con clase "historial-lista"
    USAR structural directive *ngFor para iterar sobre historial
    DEFINIR variables de contexto: item, índice, primero, último

    Para CADA elemento li:
      - Aplicar clase base "historial-item"
      - Property binding para clases condicionales:
        * "primer-item" SI es el primer elemento
        * "ultimo-item" SI es el último elemento

      DENTRO del li:
        CREAR span mostrando: número de índice + ". " + contenido del item
        CREAR badges condicionales:
          - Badge "NUEVO" con *ngIf SOLO para el primer elemento
          - Badge "ANTIGUO" con *ngIf SOLO para el último elemento (y si hay más de 1)
```

#### **🎯 SECCIÓN 8: Panel de Debug**

```
CREAR div con clase "debug-info"
  USAR structural directive *ngIf para verificar que getDebugInfo existe

  AÑADIR h3 con título del debug
  CREAR elemento pre que muestre:
    - Resultado de getDebugInfo() transformado con pipe json

  CREAR div con clase "debug-details" con párrafos que muestren:
    - "Número 1: " + numero1 (o "No definido" si es null)
    - "Número 2: " + numero2 (o "No definido" si es null)
    - "Operación: " + operacionActual (o "Ninguna" si está vacío)
    - "Resultado visible: " + "Sí" o "No" según mostrarResultado
```
