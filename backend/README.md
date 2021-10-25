# Backend

Este backend fue desarrollado usando strapi, para simplificar el funcionamiento
del ambiente de desarrollo, se provee un `docker-compose` con el cual se va a
poder levantar un ambiente similar al utilizado en los ambientes de testing.

## Desarrollo

Para arrancar el ambiente, hace falta tener descargado `docker-compose`, y
ejecutar el siguiente comando

```bash
docker-compose up
```

Luego, todos los cambios efecturados dentro del directorio de la aplicación
(`app`), se van a reflejar en el backend mediante hot-reload.

## Desplegar un ambiente

Para desplegar un nuevo ambiente, hace falta contar con una instalación de
postgeres a la cual tenemos que tener acceso desde le backend. 
El resto de las configuraciones se va a realizar mediante variables de ambiente,
en particular hace falta definir

```bash
DATABASE_URL=postgres://<username>:<password>@<db_host>:<db_port>/<db_name>
NODE_ENV=production
```

## Desplegar en heroku

Para desplegar en heroku, vamos a crear la aplicación y configurar nuestro
remote de git usando la CLI de heroku

```bash
heroku create horticultura
heroku git:remote -a horticultura
```

Luego vamos a configurar nuestras variables de ambiente

```bash
# Configura el modo de node
heroku config:set NODE_ENV=production
# Configura la URL del sitio
heroku config:set MY_HEROKU_URL=$(heroku info -s | grep web_url | cut -d= -f2)
```

La variable de conección de la base de datos `DATABASE_URL` va a ser configurada
automáticamente por heroku

Para más información de como configurar este despliegue, se puede seguir la guía
oficial de strapi

https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/heroku.html

Por último, vamos a realizar el despliegue de la siguiente forma

```bash
git push  heroku `git subtree split --prefix=backend/app HEAD`:refs/heads/main
```

Se recomienda configurar el workflow de github para evitar problemas en el
despliegue
