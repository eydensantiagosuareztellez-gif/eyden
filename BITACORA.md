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

