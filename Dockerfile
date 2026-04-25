# Usa la imagen oficial de Node.js
FROM node:20 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente de tu app al contenedor
COPY . .

# Instala las dependencias (sin dependencias de desarrollo para producción)
RUN npm run build --only=production

# Usa un servidor NGINX para servir la app
FROM nginx:alpine

# Copia los archivos construidos al contenedor
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Ejecuta NGINX
CMD ["nginx", "-g", "daemon off;"]
