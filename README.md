# Reto #1 Rindegastos

_Se desarrolló una pequeña aplicación que la cual realiza la conversión de divisas utilizando la API de Open Exchange Rates para obtener la tasa de cambio de
una moneda original a una moneda final, esto tambiñen considera que podemos realizar la conversión para una fecha pasada. Se levantó dos servidores locales, uno para el frontend (puerto 3000) y otro para el backend (puerto 5000)._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Instalación 🔧

_Una vez clonado el repositorio, se deberá instalar las dependencias, par esto debemos ubicarnos en las carpetas "client/" y "server/", y en cada una ejecutar el siguiente comando:_
```
npm i
```

_Luego, en cada carpeta mencionada ejecutaremos el siguiente comando para iniciar los servidores locales:_
```
npm start
```

## Ejecutando las pruebas ⚙️

_Una vez realizada la instalación de las dependencias e iniciado los servidores locales, podemos ejecutar las pruebas usando Postman._
_Se generó el endpoint "conversions?from=USD&to=PEN&amount=1500&dateRequest=2018-06-25", por ende, los parámetros que se usarán serán lo siguientes:_

* to - Se ingresará la abreviatura de la moneda a la cuál se quiere realizar la conversión
* amount - Se ingresará el monto el cuàl serà convertido. Dicho monto debe ser un número positivo
* dateRequest - Se ingresará la fecha para la cuál se quiere la conversión (histórico) en el formado yyyy-mm-dd.

_Se muestra en imagen una de las pruebas realzadas:_
![image](https://user-images.githubusercontent.com/92905019/150651127-1324d01d-25b2-48eb-8da0-99b1bcc80ac9.png)

### Analice las pruebas end-to-end 🔩

_Realizaremos la pruebas a través del frontend, para esto ingresaremos los datos anteriormente mencionados en los formatos indicados. Acontinuación, se muestra las imágenes de las pruebas realizadas:_

* Aplicación al levantar el servidor frontend
![image](https://user-images.githubusercontent.com/92905019/150651369-454e58c4-70e7-40a7-8ffe-d06ca75db432.png)

* Ingresamos los datos con los formatos mencionados
![image](https://user-images.githubusercontent.com/92905019/150651425-b47d9971-8725-4e16-b8df-49b499f797c3.png)

* Obtenemos el resultado esperado
![image](https://user-images.githubusercontent.com/92905019/150651445-20937569-3229-414f-849e-ccb5aeb4df84.png)

## Construido con 🛠️
* [NestJS](https://docs.nestjs.com) - Framework Node.js
* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and Node.js
* [API Open Exchange Rates](https://openexchangerates.org/) - JSON API with live and historical foreign exchange
* [ReactJS](https://es.reactjs.org/) - JavaScript library for building user interfaces

## Autores ✒️

_Este proyecto fue desarrollado con el objetivo de demostrar los conocimientos aprendidos en el mundo de desarrollo._

* **Gabriel Lingan** - *Trabajó enteramente el proyecto* - [acidburn25](https://github.com/acidburn25)
