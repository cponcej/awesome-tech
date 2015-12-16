## Cambios importantes en la gestión de memoria de Java 8 de Oracle (2014)

PermGen no pertenece al heap y los objetos no son promocionados a esta sección de memoria gestionada durante un GC. Como bien dices es un espacio contiguo al heap, pero también se limpia cada vez que la tenured/old generation procede a un GC. No es una generación separada del mismo modo que es la young generation, y no hay un mecanismo específico para un GC separado de PermGen. La tenured/old generation y la permanent generation proceden a un GC cuando una de las dos se llena.

De todos modos no me queda claro si incorporaron PermGen dentro del heap en Java 7, aunque poco importa ya con los cambios en Java 8.

Mejor empiezo por introducir qué implementación de JVM es Java 8 de Oracle. Existen numerosas implementaciones de JVM y cada una utiliza diferentes soluciones para la gestión de memoria.

Dos de las soluciones más conocidas y populares de JVM han sido HotSpot de Sun (habitual en Tomcat) y JRockit de BEA (Weblogic). Ambas compañias fueron compradas por Oracle y Java 8 viene a ser la integración definitiva de ambas soluciones.

Históricamente se consideraba que HotSpot es el JVM con mejor rendimiento de las dos, si bien JRockit es valorada como la más escalable.

Originalmente en HotSpot no había generación permanente. Objetos y clases de JVM se almacenaban juntas. Las clases de esta JVM eran estáticas y prácticamente no se utilizaban 'Class Loaders' (Load y Unload/Collection de Clases). PermGen surgió como una mejora de rendimiento. Por defecto los datos en la generación permanente no se eliminan nunca (son datos de JVM y no de aplicación, pudiendo variar según la pólítica de garbage collection). Esto podía llenar la generación permanente generando un OutOfMemoryErrors si se producía un elevado número de classloading. En muchos casos un problema con una generación permanente implica reiniciar regularmente la JVM y la aplicación Java.

Actualmente las clases de JVM son dinámicas y el espacio requerido para metadatos puede cambiar fácilmente.

A diferencia de HotSpot VM, JRockit carece de generación permanente y en cambio almacena los metadatos 'off the heap' en memoria nativa. Estos buffers de código son liberados constantemente cuando sus ClassLoaders no se utilizan. El problema de OutOfMemory en JRockit no es diferente a HotSpot, excepto por el hecho de ser memoria nativa en lugar de memoria heap. Hay dos diferencias significativas. Primero, en JRockit la limpieza de metadatos está habilitada siempre por defecto y segundo, no hay tamaño límite fijo para el espacio de metadatos. Uno de los principales problemas con HotSpot es su dificultad para seleccionar un tamaño adecuado para la generación permanente. ¿128MB, 256MB? Es muy difícil acertar para cada aplicación. JRockit es dinámico en la gestión de memoria reservada para metadatos y sin límites de tamaño (a excepción de la memoria del sistema). JRockit es también el único JVM con soporte de heaps no contiguos (uso de memoria por encima y por debajo del alojamiento del kernel y otras librerías), importante en el caso de Windows donde su kernel a menudo se ubica en mitad del espacio de direcciones.

Java 8 (HotRockit?) incorpora todas las herramientas de monitorización de HotSpot (Java VisualVM, jstat, jmap) y JRockit (Java Mission Control, Java Flight Recorder). Muy interesante.

Un inconveniente de Java 8 es la fragmentación de la memoria nativa para metadatos, pero probablemente incluya compactación en un futuro próximo.

En el 2016 saldrá Java 9 con la funcionalidad de auto-tuning y soporte de tamaños Heap multi-gigas.

En cualquier caso hay una tendencia al Heap-Offloading. El consumo de memoria en Java tiene un coste y las pausas/latencias causadas por los Full GC son proporcionales al tamaño del heap. Estas pausas son notables en tamaños de heap > 1Gb, con un considerable impacto en aplicaciones de tiempo real donde un proceso que no responde rápido puede ser descartado del cluster. Aún así, los servidores actuales hacen uso de frameworks muy pesados y fácilmente requieren heaps > 4Gb. Una solución a este problema es alojar fuera del heap los objetos poco utilizados mediante técnicas de serialización/deserialización (caché). El heap de memoria se mantiene pequeño y el Full GC se completa en milisegundos. Ejemplos:

1. caché de sesión de usuarios, donde un fichero mapeado en memoria almacena gigabytes de sesiones de usuarios inactivos. Una vez que el usuario hace log-in, la aplicación dispone de todos sus datos sin ser necesaria una consulta a la BBDD. 
2. caché de resultados computacionales como queries, páginas html, etc (donde el coste computacional es mayor a la deserialización)

### Referencias
- [Tecnologías de Heap-Offloading son EHcache, Memcached, Jillegal library, etc.](http://ehcache.org/)
- [Jillegal OffHeap Module](https://github.com/serkan-ozal/jillegal)
- [Free eGuide: JVM Troubleshooting Guide](http://freepromagazine.blogspot.de/2014/07/free-eguide-jvm-troubleshooting-guide.html)
- [Cambios importantes en la gestión de memoria de Java 8 de Oracle](http://karunsubramanian.com/websphere/one-important-change-in-memory-management-in-java-8/)
- [PermGen eliminado](http://www.infoq.com/articles/Java-PERMGEN-Removed)
- [On heap vs off heap memory usage](http://www.javacodegeeks.com/2014/12/on-heap-vs-off-heap-memory-usage.html)
- [How Garbage Collection differs in the three big JVMs](http://apmblog.dynatrace.com/2011/05/11/how-garbage-collection-differs-in-the-three-big-jvms/)
