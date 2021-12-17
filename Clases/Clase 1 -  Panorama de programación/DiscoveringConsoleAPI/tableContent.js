var tableContent = [
  {
    method: "console.assert()",
    description:
      "Registra un mensaje y apila el seguimiento en la consola si el primer argumento es falso.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/assert",
  },
  {
    method: "console.clear()",
    description: "Limpia la consola.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/clear",
  },
  {
    method: "console.count()",
    description:
      "Registra el número de veces que se ha llamado a esta línea con la etiqueta dada.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/count",
  },
  {
    method: "console.countReset()",
    description: "Restablece el valor del contador con la etiqueta dada.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/countReset",
  },
  {
    method: "console.debug()",
    description:
      "Envía un mensaje a la consola con la depuración del nivel de registro.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/debug",
  },
  {
    method: "console.dir()",
    description:
      "Muestra una lista interactiva de las propiedades de un objeto JavaScript especificado. \n Esta lista le permite usar triángulos desplegables para examinar el contenido de los objetos secundarios.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/dir",
  },
  {
    method: "console.dirxml()",
    description:
      "Muestra una representación XML/HTML Element del objeto especificado si es posible o la vista de Objeto JavaScript si no es posible.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/dirxml",
  },
  {
    method: "console.error()",
    description:
      "Emite un mensaje de error.  \n Puede utilizar la sustitución de cadenas y argumentos adicionales con este método.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/error",
  },
  {
    method: "console.group()",
    description:
      "Crea un nuevo grupo en línea, indentando todos los resultados siguientes en otro nivel. \n Para retroceder un nivel, llame a groupEnd().",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/group",
  },
  {
    method: "console.groupCollapsed()",
    description:
      "Crea un nuevo grupo en línea, indentando todos los resultados siguientes en otro nivel. \n Sin embargo, a diferencia de group(), esto comienza con el grupo en línea colapsado, lo que requiere el uso de un botón de divulgación para expandirlo. \n Para retroceder un nivel, llame a groupEnd().",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/groupCollapsed",
  },
  {
    method: "console.groupEnd()",
    description: "Sale del grupo en línea actual.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/groupEnd",
  },
  {
    method: "console.info()",
    description:
      "Registro informativo de información. Puede utilizar la sustitución de cadenas y argumentos adicionales con este método.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/info",
  },
  {
    method: "console.log()",
    description:
      "Para salida general de información de registro. \n Puede utilizar la sustitución de cadenas y argumentos adicionales con este método.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/log",
  },
  {
    method: "console.profile()",
    description:
      "Inicia el generador de perfiles integrado del navegador (por ejemplo, la herramienta de rendimiento de Firefox). \n Puede especificar un nombre opcional para el perfil.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/profile",
  },
  {
    method: "console.profileEnd()",
    description:
      "Detiene el generador de perfiles. \n Puede ver el perfil resultante en la herramienta de rendimiento del navegador (por ejemplo, la herramienta de rendimiento de Firefox).",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/profileEnd",
  },
  {
    method: "console.table()",
    description: "Muestra datos tabulares como una tabla.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/table",
  },
  {
    method: "console.time()",
    description:
      "Inicia un temporizador con un nombre especificado como parámetro de entrada. \n Se pueden ejecutar hasta 10,000 temporizadores simultáneos en una página determinada.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/time",
  },
  {
    method: "console.timeEnd()",
    description:
      "Detiene el temporizador especificado y registra el tiempo transcurrido en milisegundos desde que comenzó.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/timeEnd",
  },
  {
    method: "console.timeLog()",
    description:
      "Registra el valor del temporizador especificado en la consola.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/timeLog",
  },
  {
    method: "console.timeStamp()",
    description:
      "Agrega un marcador a la herramienta Línea de tiempo o Cascada del navegador.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/timeStamp",
  },
  {
    method: "console.trace()",
    description: "Genera un seguimiento de la pila.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/trace",
  },
  {
    method: "console.warn()",
    description:
      "Emite un mensaje de advertencia. Puede utilizar la sustitución de cadenas y argumentos adicionales con este método.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/console/warn",
  },
]; //Array que contiene toda la información que se despliega en la respectiva tabla.
