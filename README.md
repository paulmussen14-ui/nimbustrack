![CI](https://github.com/paulmussen14-ui/nimbustrack/actions/workflows/ci.yml/badge.svg)

# NimbusTrack

Aplicación de seguimiento de tareas (To-Do list) construida con Node.js como parte de una práctica de DevOps.

## API en producción

🔗 https://nimbustrack.onrender.com

## Endpoints

- `GET /` — estado de la API
- `GET /tareas` — lista todas las tareas
- `POST /tareas` — crea una tarea nueva (body: `{ "texto": "..." }`)

## Cómo correr el proyecto localmente

npm install
npm start

El servidor corre en `http://localhost:3000`.
