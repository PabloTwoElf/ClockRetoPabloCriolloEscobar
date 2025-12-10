Reto práctico de creación de un reloj analógico y digital, desarrollado con HTML, CSS y JavaScript.
El proyecto muestra un reloj analógico con animación de agujas y un reloj digital que se actualiza cada segundo.

📌 Características principales

⏱ Reloj analógico con animación suave de horas, minutos y segundos.

🔢 Reloj digital con formato de dos dígitos (00:00:00).

📱 Diseño responsive (se adapta a celulares, tablets y escritorio).

🎨 Fondo dinámico y estilizado con background-size: cover.

⚡ Actualización en tiempo real usando setInterval.

🧩 Estructura del proyecto
/
│── index.html     → Estructura del reloj analógico y digital.
│── app.js         → Lógica para calcular y actualizar la hora.
│── README.md       → Documentación del proyecto.

🛠 Lógica del reloj
✔ Reloj analógico

Calcula los grados de rotación:

Segundos → (segundos / 60) * 360 + 90

Minutos → (minutos / 60) * 360 + 90

Horas → (horas / 12) * 360 + 90

Se aplica la rotación a las agujas con CSS.

✔ Reloj digital

Se obtiene la hora actual y se formatea con:

String(valor).padStart(2, "0")


Luego se muestra en el DOM actualizando:

.hora

.minuto

.segundo

Cada segundo se ejecuta:

setInterval(actualizarHora, 1000);

📱 Responsive design

Incluye media queries para ajustar:

Tamaño del reloj

Grosor de las agujas

Tamaño del texto
