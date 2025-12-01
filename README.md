# Prueba Técnica - Desarrollador Angular

¡Bienvenido/a! Esta prueba técnica tiene como objetivo evaluar tus conocimientos en Angular, específicamente en formularios reactivos, validaciones y habilidades de maquetación.

## 📋 Descripción del Proyecto

Deberás desarrollar un **formulario de registro de usuarios** con validaciones avanzadas y un diseño limpio y profesional.

## ⏱️ Tiempo Estimado

**4 a 6 horas** distribuidas en un máximo de **2 días** desde la recepción de esta prueba.

## 📦 Entrega

Una vez finalizada la prueba:

1. Asegurate de que todos tus cambios estén commiteados
2. Envía el enlace de tu repositorio público a: **[marcosarjonapsn@gmail.com]**
3. Verifica que el proyecto se pueda clonar y ejecutar correctamente

**Fecha límite:** 02/11/25 - 22hs

---

## 🎯 Requisitos Funcionales

### Campos del Formulario

El formulario debe contener los siguientes campos:

1. **Nombre completo**
   - Campo requerido
   - Mínimo 3 caracteres

2. **Email**
   - Campo requerido
   - Validación de formato de email

3. **Teléfono** (formato argentino)
   - Campo requerido
   - Dividido en dos inputs:
     - **Prefijo** (código de área, ej: 11, 351, 261)
     - **Número** (el resto del teléfono)

4. **Fecha de nacimiento**
   - Campo requerido
   - El usuario debe ser mayor de 18 años

5. **Contraseña**
   - Campo requerido
   - Mínimo 8 caracteres
   - Debe incluir al menos:
     - Una letra mayúscula
     - Una letra minúscula
     - Un número

6. **Confirmar contraseña**
   - Campo requerido
   - Debe coincidir exactamente con el campo contraseña

7. **País**
   - Campo requerido
   - Lista desplegable (select) con al menos 5 países

---

## ✅ Validaciones Requeridas

- **Todas las validaciones deben ser reactivas** (Reactive Forms)
- Mostrar **mensajes de error específicos** para cada tipo de validación
- Los errores deben aparecer **solo cuando el campo ha sido tocado** (`touched`)
- Debes implementar **al menos un validador personalizado** (por ejemplo, el validador de edad mínima)
- Estados visuales claros para campos válidos e inválidos

---

## 🚀 Funcionalidades Adicionales

1. **Botón de envío:**
   - Debe estar **deshabilitado** hasta que el formulario sea completamente válido
   - Al hacer click, procesar el envío

2. **Mostrar resumen:**
   - Al enviar exitosamente, mostrar los datos ingresados en un **card/tabla/popup de resumen**
   - Puedes usar cualquier método de visualización que consideres apropiado

3. **Toggle de contraseña:**
   - Implementar un botón/ícono para **mostrar/ocultar** la contraseña
   - Aplicable tanto a "Contraseña" como "Confirmar contraseña"

4. **Reset del formulario:**
   - Después de un envío exitoso, el formulario debe limpiarse automáticamente

---

## 🎨 Diseño y Estilos (CSS)

Si bien la **funcionalidad del formulario es la prioridad**, el diseño y estilado también suman puntos importantes:

- Layout **responsive** (mobile-first preferentemente)
- Diseño **limpio y profesional**
- Estados visuales claros (hover, focus, error, success)
- **Animaciones o transiciones** suaves (opcional pero valorado)

**Nota:** Puedes usar CSS puro, SCSS, Tailwind, o cualquier enfoque que prefieras. ¡Demuestra tu creatividad!

---

## 🛠️ Setup del Proyecto

- Node.js (v18 o superior)
- Angular CLI (v20 o superior)

---

## 📚 Librerías Permitidas

Puedes instalar y utilizar librerías confiables si lo consideras necesario, como:

- **NgxMask** - Para máscaras de input
- **SweetAlert2** - Para modales/alertas
- **Angular Material** - Para componentes UI
- **Tailwind CSS** - Para estilos utility-first
- Otras librerías estables y bien mantenidas

---

## 📝 Recomendaciones

- **Haz commits frecuentes** con mensajes descriptivos
- **Prioriza la funcionalidad** sobre el diseño (pero no descuides ninguno)
- **Escribe código limpio** y mantenible
- **Testea tu formulario** antes de enviar
- Si algo no está claro, toma la decisión que consideres mejor y documéntala

---

## 📧 ¿Preguntas?

Si tienes dudas o consultas durante el desarrollo:

- Email: **[marcosarjonapsn@gmail.com]**

---

## 📄 Entregables

Al finalizar, tu repositorio debe incluir:

1. ✅ Código fuente completo
2. ✅ README actualizado con:
   - Instrucciones para ejecutar el proyecto
   - Decisiones técnicas relevantes
   - Librerías utilizadas (si aplica)
   - Tiempo aproximado invertido
3. ✅ El proyecto debe ejecutarse sin errores con `npm install && ng serve`

---

## ⚡ Comenzar

1. Haz un **fork** de este repositorio
2. Clona tu fork localmente
3. ¡Comienza a desarrollar!
4. Cuando termines, envía el link de tu repositorio

---

**¡Mucha suerte! Esperamos ver tu solución. 🚀**

---

*Esta prueba técnica evalúa habilidades fundamentales para el puesto. Tómate tu tiempo y demuestra lo mejor de tus capacidades.*
