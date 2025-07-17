---
name: "🎯 ISSUE #1: Estructura Base y Título"
about: "Implementar la estructura HTML base y título del componente calculadora"
title: "[ESTUDIANTE 1] Estructura Base y Título - HTML"
labels: ["html", "estructura", "interpolation", "estudiante-1", "fundamentos"]
assignees: []
---

## 🎯 **ISSUE #1: Estructura Base y Título**

**Asignado a: Estudiante 1**

### 📝 **Responsabilidades HTML:**

- [ ] Implementar **SECCIÓN 1**: Contenedor principal
- [ ] Implementar **SECCIÓN 2**: Título del componente

### 🎯 **Conceptos de Data Binding a aplicar:**

- [ ] **Interpolation** `{{ }}` para mostrar título
- [ ] **Conditional Operators** `||` para valores por defecto

### 📚 **Enfoque de aprendizaje:**

```
ESPECIALIZACIÓN: Fundamentos de Data Binding
- Comprender la sintaxis básica de interpolation
- Implementar operadores condicionales simples
- Crear la estructura HTML base del componente
- Establecer el contenedor principal responsivo
```

### 📋 **Tareas específicas:**

#### ✅ **SECCIÓN 1: Contenedor Principal**

```html
<!-- TODO: Implementar contenedor principal -->
<!-- 
CREAR un div con clase "calculadora-container"
ESTE div será el contenedor principal de toda la calculadora
DEBE envolver todo el contenido del componente
-->
```

#### ✅ **SECCIÓN 2: Título del Componente**

```html
<!-- TODO: Implementar título con interpolation -->
<!-- 
DENTRO del contenedor principal:
CREAR un encabezado h1
USAR interpolation para mostrar la propiedad "titulo" del componente
SI la propiedad titulo está vacía, MOSTRAR "Calculadora Angular" como texto por defecto
USAR el operador OR (||) para esta lógica condicional
-->
```

### 🧠 **Guía de conceptos específicos:**

```
INTERPOLATION (mostrar datos):
  SINTAXIS: {{ expresion }}
  EJEMPLOS: {{ titulo }}, {{ titulo || 'Calculadora Angular' }}

CONDITIONAL OPERATORS básicos:
  SINTAXIS: valor1 || valor2
  USO: Proporcionar valores por defecto

HTML STRUCTURE:
  - Contenedores semánticos
  - Jerarquía de elementos
  - Atributos y clases
```

### ✅ **Criterios de aceptación:**

- [ ] El contenedor principal está implementado correctamente
- [ ] El título usa interpolation con operador OR como fallback
- [ ] La estructura HTML es semántica y bien organizada
- [ ] El código está bien comentado y documentado
- [ ] No hay errores de compilación en Angular

### 📁 **Archivos a modificar:**

- `src/app/calculadora/calculadora.html`

### 🔗 **Dependencias:**

- **Ninguna** - Esta es la tarea base del proyecto

### 📅 **Estimación:**

- **Tiempo estimado**: 1-2 horas
- **Dificultad**: ⭐ Básica
- **Prioridad**: 🔴 Alta (bloquea otras tareas)

---

### 📖 **Recursos de aprendizaje:**

- [Angular Template Syntax - Interpolation](https://angular.io/guide/interpolation)
- [JavaScript Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [HTML Semantic Elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_elements)

---

**⚠️ Importante**: Este issue debe completarse antes que los demás, ya que establece la estructura base del componente.
