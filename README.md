# 📝 Angular + Firebase To-Do App (Challenge Técnico - Fullstack)

Aplicación de lista de tareas desarrollada como parte del challenge técnico fullstack. Permite a los usuarios autenticarse por correo, agregar, editar, completar y eliminar tareas, todo conectado con un backend en Firebase Functions y Firestore.

---

## 🚀 Tecnologías usadas

### Frontend
- Angular 17 (standalone)
- Angular Material
- TypeScript
- Lazy loading + route guards
- Animaciones entre rutas

### Backend
- Node.js + Express
- Firebase Functions
- Firebase Firestore

---

## 🔐 Funcionalidades

### Autenticación
- Login por correo electrónico
- Si no existe, se crea el usuario con confirmación
- Guarda `userId` en `localStorage`
- Redirección automática entre rutas si hay o no sesión activa

### Tareas
- CRUD completo (crear, ver, editar, eliminar)
- Marcar como completada
- Filtrado por texto
- Edición en modal (Angular Material Dialog)
- Animaciones entre rutas
- Snackbar para feedback visual
- Loader global al hacer peticiones

---

## 📂 Estructura del proyecto

```plaintext
src/
├── app/
│   ├── modules/             # login, tasks
│   ├── core/                # servicios, guards, interceptores
│   ├── shared/              # componente modal
│   ├── app.routes.ts
│   └── app.config.ts
```

---

## ⚙️ Cómo ejecutar

### Requisitos:
- Node.js 18+
- Angular CLI
- Firebase CLI

### Backend:
```bash
cd todo-backend/functions
npm install
firebase emulators:start
```

### Frontend:
```bash
cd atom-fe-challenge-template-ng-17
npm install
npm run start
```

---

## 🌐 Deploy

### Frontend:
Puedes publicar con:
```bash
ng build --configuration production
firebase deploy --only hosting
```

### Backend:
```bash
firebase deploy --only functions
```

---

## 📌 Observaciones
Se priorizó el uso de buenas prácticas: separación por módulos, guards, servicios, interceptores y tipado estricto.  
El código fue escrito pensando en mantenibilidad, claridad y experiencia de usuario.

---

## 🙌 Autor
Desarrollado por Nelson Cárdenas como parte de un challenge técnico para Atom.
