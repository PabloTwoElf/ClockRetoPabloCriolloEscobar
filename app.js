function dosDigitos(valor) {
    return String(valor).padStart(2, "0");
}

function actualizarHora() {
    const fecha = new Date();

    let horas = dosDigitos(fecha.getHours());
    let minutos = dosDigitos(fecha.getMinutes());
    let segundos = dosDigitos(fecha.getSeconds());

    document.querySelector(".hora").textContent = horas;
    document.querySelector(".minuto").textContent = minutos;
    document.querySelector(".segundo").textContent = segundos;
}


actualizarHora();


setInterval(actualizarHora, 1000);
