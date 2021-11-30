# Trabajo final OO2

En este repositorio se va a encontrar todo el código de la entrega final de
Orientacion a Objetos 2

## Desarrollo

El desarrollo se centró en el frontend, por lo que, para evitar un desarrllo
extra, se utilizó strapi para el desarrollo del backend.

## CI/CD

Para simplificar las pruebas, este repositorio tiene todo lo necesario para
configurar la integración y despliegue contínuo tanto del frontend como del
backend

### Frontend

Se encarga de construir el fontend y dejarlo disponible en las pages del
repositorio. Para su funcionamiento, hace falta configurar lo siguientes secrets

- `REACT_APP_API_URL`: url del backend

Para más información del workflow, se puede consultar el archivo `.github/workflows/frontend.yml`

### Backend

Se encarga de interactuar con heroku para desplegar el ambiente de testing de
forma automática. Para su funcionamiento, hace falta configurar los siguientes
secrets

- `HEROKU_API_KEY`: api key generada en heroku, se puede generar usando el
  siguiente comando

  ```bash
  heroku authorizations:create -d "Github Actions"
  ```
  **Este token nunca expira**
- `HEROKU_EMAIL`: email del usuario que va a realizar el despliegue
- `HEROKU_APP_NAME`: nombre de la aplicación en heroku


## Testing

Se desplegó un ambiente de testing a modo de POC de la solución, la misma consta
de lo siguiente

- Un backend desarrolado en stapi, desplegado en heroku, con una base de datos
  postgres. El mismo es accesible mediante
  - https://horticultura.herokuapp.com/admin
- Un frontend desarrolado en react, desplegado de forma contínua ante cada
  cambio en la rama main del repositorio, mediante github actions, sobre las
  github pages. El mismo es accesible mediante
  - https://lucasdc6.github.io/horticultura/
