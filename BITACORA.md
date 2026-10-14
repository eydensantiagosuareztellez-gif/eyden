## P0
**Cliente:** El navegador que uno abre en la computadora o el celular (como Chrome o Edge) para pedir la página.
**Servidor:** El programa o la computadora donde está guardada la aplicación esperando recibir peticiones para responderlas.
**Entrada:** Lo que envía el navegador al presionar Enter: la URL que buscamos, el método y los datos que le enviamos.
**Salida:** Lo que nos devuelve el servidor: la respuesta diciendo si todo salió bien un 200 o si hubo un error 404, junto con el contenido para mostrarlo en pantalla.

## P1
**¿Qué respuesta vas a ver en cada una?**
En las tres rutas (/, /hola y /lo-que-sea) se verá exactamente la misma respuesta: "Hola desde el servidor".

**¿Por qué?**
Porque el código no revisa cuál URL se está pidiendo sin importar la ruta que consulte, el servidor siempre ejecuta la misma instrucción.

## P2
**¿Cuántas líneas "Llegó una petición" van a aparecer en la terminal?**
 Aparece una sola línea: Llegó una petición: GET /.
 El navegador únicamente realiza la petición directa a la URL que se ingresa en la barra de direcciones.

 ## P3
 **¿Qué responde el servidor si pides /actividades/ (con slash al final)? ¿Y /ACTIVIDADES?**
 En ambos casos responde "Ruta no encontrada"

 **Reflexión (bitácora)**

Enrutamiento: Resuelto. Express lo simplifica con métodos claros (app.get(), app.post()) y parámetros dinámicos (:id).

Manejo de respuestas: Resuelto. Con res.json() y res.send() los headers y la conversión a JSON son automáticos.

Lectura del body: Sigue igual. Express sigue requiriendo configurar middlewares (app.use(express.json())), de lo contrario req.body es undefined

## P4
**No has programado ninguna ruta para /no-existe. ¿Qué crees que responde Express si la pides?**

Express responde en la pantalla con el texto Cannot GET /no-existe y devuelve un código de estado 404 (Not Found).

**Reflexión (bitácora)**
Express resolvió el enrutamiento al usar métodos explícitos como app.get() y app.post(), y el manejo de respuestas automatizando todo con res.json() y res.send().

Lo que sigue igual es la lectura del body, ya que todavía requiere configurar app.use(express.json()) para evitar que req.body sea undefined.

## P5
**¿Qué ves en el navegador?**
 rta: lo que sucede es que al quitar el next del codigo la pagina se queda cargando infinitamente y al añadirlo vuelve a la normalidad, tambien cuando se escribe una ruta nueva se muestra en el navegador cannot la peticion y la ruta que se escribio.

 ## P6
 Pides GET /actividades/1. La actividad con id 1 sí existe. ¿Qué código de estado y qué body vas a
recibir?
Pista para cuando ejecutes: mira lo que imprime console.log('params:', req.params). ¿El 1
aparece con comillas o sin comillas?
rta: El 1 aparece con comillas (es decir, como un string o texto: '1'). Esto se debe a que Express siempre captura los parámetros de la URL como cadenas de texto. Por esa razón, en el código es estrictamente necesario hacer la conversión con Number(req.params.id) para que la comparación estricta (===) del .find() funcione correctamente con los números de tu arreglo.

## P7
En la versión corregida, borra la palabra return que está antes de res.status(404) y pide
/actividades/99. ¿Qué recibe el cliente? ¿Qué aparece en la terminal? Después vuelve a poner el
return.
rta: lo que ve el cliente  "mensaje": "No existe la actividad con id 99" y en la terminal se ve  5:01:05 p. m. GET /actividades/99

## p8
r/: Cuando ponemos ?tipo=agua, ?tipo=AGUA y ?tipo=fuego. ?tipo=AGUA y ?tipo=fuego nos dan error 200 con una lista vacia mientras que ?tipo=agua nos muestra una lista de id.

## P9
¿Qué código de estado y qué body vas a recibir? ¿Qué va a imprimir console.log('Body
recibido:', req.body) en la terminal?
R/: Recibimos el codigo 201 y imprime Body recibido: undefined

## P10
Haz cualquier cambio en app.js y guarda (con --watch el servidor se reinicia solo). Vuelve a pedir
GET /actividades. ¿Sigue estando la actividad que creaste?
R/: Los datos se van a guardar temporalmente en el servidor pero cuando se reinicie el servidor con los datos guardados se borra

## P11
Mueve este bloque al inicio, justo después de express.json(), y pide GET /actividades. ¿Qué pasa? ¿Por qué? Después regrésalo al final.

lo que sucede es que el servidor no acepta ninguna de las otras rutas ya que al colocar el 404 arriba deja de leer ya que el express lee el odigo de arriba a abajo y si el 404 esta arriba no va a seguir leyendo

## Conclusión para la bitácora
explicacion Express evalúa los middlewares y rutas en el orden exacto en que fueron declarados, ejecutando el siguiente bloque cuando se invoca la función next.