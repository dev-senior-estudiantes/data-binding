---
name: "🎯 ISSUE #3: Formulario de Entrada"
about: "Implementar formulario con two-way binding para entrada de números"
title: "[ESTUDIANTE 3] Formulario de Entrada - HTML"
labels: ["html", "forms", "two-way-binding", "ngmodel", "estudiante-3", "formularios"]
assignees: []
---

## 🎯 **ISSUE #3: Formulario de Entrada**

**Asignado a: Estudiante 3**

### 📝 **Responsabilidades HTML:**

- [ ] Implementar **SECCIÓN 4**: Entrada de números completa

### 🎯 **Conceptos de Data Binding a aplicar:**

- [ ] **Two-way Binding** `[(ngModel)]` para inputs
- [ ] **Property Binding** para atributos de formulario

### 📚 **Enfoque de aprendizaje:**

```
ESPECIALIZACIÓN: Two-way Data Binding y Formularios
- Dominar la sincronización bidireccional [(ngModel)]
- Implementar formularios reactivos en HTML
- Crear experiencias de usuario intuitivas
- Manejar inputs de números con validaciones
```

### 📋 **Tareas específicas:**

#### ✅ **SECCIÓN 4: Entrada de Números**

```html
<!-- TODO: Implementar formulario de entrada -->
<!-- 
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
-->
```

### 🧠 **Guía de conceptos específicos:**

```
TWO-WAY BINDING (sincronización bidireccional):
  SINTAXIS: [(ngModel)]="propiedad"
  EJEMPLOS: [(ngModel)]="numero1"
  REQUISITOS: FormsModule importado

FORM ELEMENTS:
  - Labels asociados
  - Input types apropiados
  - Placeholders descriptivos
  - Estructura accesible
```

### ✅ **Criterios de aceptación:**

- [ ] El formulario de entrada está implementado correctamente
- [ ] Two-way binding [(ngModel)] funciona para ambos inputs
- [ ] Los labels están correctamente asociados con los inputs
- [ ] Los inputs tienen type="number" y placeholders apropiados
- [ ] Los cambios en los inputs se reflejan inmediatamente en el componente
- [ ] Los cambios en el componente se reflejan en los inputs
- [ ] El código está bien comentado y documentado
- [ ] No hay errores de compilación en Angular

### 📁 **Archivos a modificar:**

- `src/app/calculadora/calculadora.html`

### 🔗 **Dependencias:**

- **Requiere**: FormsModule debe estar importado en el componente
- **Paralela**: Puede trabajarse en paralelo con Issue #1 y #2
- **Bloquea**: Issue #4 (botones necesitan los números para funcionar)

### 📅 **Estimación:**

- **Tiempo estimado**: 1.5-2 horas
- **Dificultad**: ⭐⭐ Intermedia
- **Prioridad**: 🟡 Media

---

### 🔧 **Verificación técnica:**

Antes de comenzar, verificar que el componente tenga:

```typescript
// En calculadora.ts
import { FormsModule } from '@angular/forms';

@Component({
  // ...
  imports: [FormsModule, CommonModule],
  // ...
})
```

### 📖 **Recursos de aprendizaje:**

- [Angular Two-way Binding](https://angular.io/guide/two-way-binding)
- [Angular Forms](https://angular.io/guide/forms-overview)
- [FormsModule Documentation](https://angular.io/api/forms/FormsModule)
- [HTML Form Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/forms)

---

**⚠️ Importante**: Este formulario es la base para que los usuarios ingresen los números que se van a operar. Debe sincronizarse perfectamente con las propiedades del componente.
