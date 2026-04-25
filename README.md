# UNItech solutions S.A.C

- Pagina web de servicios especializados de sistemas y computo (UNItech solutions s.a.c),

## Infraestructura de Red y Conectividad

1. Instalación y configuración de routers y switches.
2. Implementación de redes LAN y WiFi seguras.
3. Cableado estructurado (UTP categoría 5e/6) y fibra óptica.
4. Configuración de redes con segmentación y control de acceso.

## Sistemas de Videovigilancia

1. Instalación de cámaras de seguridad IP y grabadores (DVR/NVR).
2. Configuración de monitoreo local y remoto.
3. Integración con dispositivos móviles (vigilancia por app).
4. Asesoría en colocación estratégica para máxima cobertura.

## Instalación de Equipos Informáticos

1. Instalación y configuración de PCs, laptops, impresoras y escáneres.
2. Instalación de sistemas operativos y programas institucionales.
3. Configuración de impresoras en red o compartidas.

## Asesoría Tecnológica Personalizada

1. Evaluación de necesidades tecnológicas según el tipo de institución.
2. Recomendaciones de equipos y arquitectura de red.
3. Propuesta de mejora para optimizar el uso de la tecnología disponible.

## UNIdev

- Enseñanza en programacion en C++, ADA
- Asesoria de tesis o tesina en la carrera de sistemas

## ROLES

1. Ingeniero de sistemas colegiado.
2. Tecnico en redes y cableado.
3. Tecnico en soporte informatico.
4. Tecnico electronico.

## COMANDOS PARA PROYECTO FRONTEND CON REACT

## UNIDEV Frontend

Este es el frontend del proyecto **UNIDEV**, creado con React y preparado para pruebas y despliegue en contenedores Docker.

---

## Scripts y Comandos NPM

### Instalación

- npm install

### Desarrollo

- npm start
  
### Build (Produccion)

- npm run build

### Testing

- npm test

## Docker

### Contruccion de la imagen

- $ docker build -t unidev-frontend .

### Ejecutar contenedor (modo produccion)

- $ docker run -d -p 3000:80 --name unidev-container-frontend unidev-frontend
- (puertolocal : puertocontenedor)

### ver logs

- $ docker logs unidev-container

### Detener contenedor

- $ docker stop unidev-container

### Eliminar contenedor

- $ docker rm unidev-container

### Eliminar imagen

- $ docker rmi unidev-frontend

### probar la aplicacion corriendo

- http://localhost:3000
