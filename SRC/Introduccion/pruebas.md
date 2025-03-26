## ✅ Consola del navegador y primeras pruebas (console.log)

para mostrar mensajes en la consola del navegador, usamos la función `console.log()`.

_ejemplo:_

#### 🎗️ si queremos mostrar nuestro primer `Hola mundo ` en **JavaScript** en un documento HTML, usamos la siguiente sintaxis:

---

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi primer documento HTML</title>
  </head>
  <body>
    <p id="mensaje"></p>
    <script>
      document.getElementById("mensaje").textContent =
        "Hola mundo en JavaScript";
    </script>
  </body>
</html>
```
---
* Ahora si abrimos el navegador y vemos la consola, veremos que nos
muestra el mensaje `Hola mundo en JavaScript`. 🎗️ Si queremos mostrar un mensaje
en la consola del navegador, usamos la función **console.log()**. ejemplo: 🎗️ si
queremos mostrar nuestro primer "Hola mundoen JavaScript" en un documento HTML,
usamos la siguiente sintaxis:
*
---

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi primer documento HTML</title>
  </head>
  <body>
    <p id="mensaje"></p>

    <script>
      console.log("Hola mundo en JavaScript");
    </script>
  </body>
</html>
```

-- Ahora si abrimos el navegador y vemos la consola, veremos que nos muestra el
mensaje "Hola mundo en JavaScript".
````
