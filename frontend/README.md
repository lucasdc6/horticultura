# Horticultura

Este es un proyecto desarrollado como trabajo final de la materia Orientación a
Objetos de la Universidad Nacional de La Plata, y tiene como fin simplificar la
gestión de planillas de datos relacionados con los residuos límites admitidos en
los diferentes cultivos.

El proyecto fue desarrollado usando [React](https://es.reactjs.org/), y haciendo
uso de la librería [Material-UI](https://mui.com/)

## Desarrollo

Para iniciar el desarrollo, es necesario contar con una API con la siguientes
epecificación

### Recursos

En la siguiente sección se van a describir los endpoints junto a la respuesta
mínima esperada para el funcionamiento correcto del sistema.

- Recurso `active-ingredients`
  - Listado
    ```
    GET '/active-ingredients'
    Response:
    [
      {
        "id": 1,
        "name": "ACEFATO",
        ...
      },
      {
        "id": 2,
        "name": "ACETAMIPRID",
        ...
      },
      {
        "id": 3,
        "name": "ALACLOR",
        ...
      },
      {
        "id": 4,
        "name": "AZOXISTROBINA",
        ...
      }
      ...
    ]
    ```
- Recurso `aptitudes`
  - Listado
    ```    //residualLimitCache.clear();

    GET '/aptitudes'
    Response:
    [
      {
        "id": 1,
        "name": "Feromona",
        ...
      },
      {
        "id": 2,
        "name": "Herbicida",
        ...
      },
      {
        "id": 3,
        "name": "Fitorregulador",
        ...
      },
      {
        "id": 4,
        "name": "Acaricida",
        ...
      },
      {
        "id": 5,
        "name": "Insecticida",
        ...
      },
      ...
    ]
    ```
- Recurso `crops`
  - Listado
    ```
    GET 'crops'
    Response:
    [
      {
        "id": 1,
        "name": "Rúcula",
        ...
      },
      {
        "id": 2,
        "name": "Achicoria",
        ...
      },
      {
        "id": 3,
        "name": "Albahaca",
        ...
      },
      {
        "id": 4,
        "name": "Brócoli",
        ...
      },
      ...
    ]
    ```
- Recurso `residual-limits`
  - Listado
    ```
    GET '/residual-limits'
    Response:
    [
      {
        "id": 1,
        "active_ingredient": {
          "id": 1,
          "name": "ACEFATO",
          ...
        },
        "aptitude": {
          "id": 1,
          "name": "Feromona",
          ...
        },
        "crop": {
          "id": 1,
          "name": "Rúcula",
          ...
        },
        "residual": 12,
        "harvest": true,
        ...
      },
      {
        "id": 2,
        "active_ingredient": {
          "id": 2,
          "name": "ACETAMIPRID",
          ...
        },
        "aptitude": {
          "id": 3,
          "name": "Fitorregulador",
          ...
        },
        "crop": {
          "id": 1,
          "name": "Rúcula",
          ...
        },
        "residual": 12,
        "harvest": true,
        ...
      },
      ...
    ]
    ```
  - Agregar
    ```
    POST '/residual-limits'
    Body:
    {
      "active_ingredient": "4",
      "aptitude": "4",
      "crop": "7",
      "residual": "1",
      "harvest": "true",
      ...
    }
    ```
  - Editar
    ```
    PUT '/residual-limits/<id>'
    Body:
    {
      "active_ingredient": "4",
      "aptitude": "4",
      "crop": "7",
      "residual": "1",
      "harvest": "true",
      ...
    }
    ```
#### Swagger de ejemplo

A modo orientativo, se puede consultar el swagger del backend de strapi de
testing, en el que se van a encontrar las definiciones de las APIs usadas para
el desarrollo de este forntend.
https://horticultura.herokuapp.com/documentation/v1.0.0


### Uso de strapi

Para simplificar el desarrollo, se provee una configuración de strapi lista para
funcionar, con datos precargados. Para más información, consultar el directorio
`backend` en la raíz del proyecto
