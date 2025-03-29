document.addEventListener("DOMContentLoaded", function () {

    // ACTIVIDAD 1: Verdadero o Falso
    function verificarVF(boton, respuestaCorrecta) {
        let mensaje = document.createElement("p");
        if (respuestaCorrecta) {
            mensaje.textContent = "✅ ¡Correcto!";
            mensaje.style.color = "green";
        } else {
            mensaje.textContent = "❌ Incorrecto. Intenta de nuevo.";
            mensaje.style.color = "red";
        }
        boton.parentElement.appendChild(mensaje);
        setTimeout(() => mensaje.remove(), 2000); // Borra el mensaje después de 2 segundos
    }

    window.verificarVF = verificarVF; // Hace la función accesible desde HTML

    // ACTIVIDAD 2: Arrastrar y Soltar
    let elementosArrastrables = document.querySelectorAll(".draggable");
    let zonasSoltar = document.querySelectorAll(".drop-zone");

    elementosArrastrables.forEach(el => {
        el.addEventListener("dragstart", function (e) {
            e.dataTransfer.setData("text", e.target.id);
        });
    });

    zonasSoltar.forEach(zona => {
        zona.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        zona.addEventListener("drop", function (e) {
            e.preventDefault();
            let idElemento = e.dataTransfer.getData("text");
            let elemento = document.getElementById(idElemento);
            if (zona.dataset.correct === idElemento) {
                zona.appendChild(elemento);
                elemento.style.cursor = "default";
                elemento.draggable = false;
                elemento.style.backgroundColor = "lightgreen";
            } else {
                alert("❌ Incorrecto. Intenta de nuevo.");
            }
        });
    });

    // Verificar si todas las respuestas de arrastrar y soltar son correctas
    function verificarDragDrop() {
        let correctas = 0;
        zonasSoltar.forEach(zona => {
            let elementoArrastrado = zona.querySelector(".draggable");
            if (elementoArrastrado && elementoArrastrado.id === zona.dataset.correct) {
                correctas++;
            }
        });

        let mensaje = document.createElement("p");
        if (correctas === zonasSoltar.length) {
            mensaje.textContent = "✅ ¡Todas las respuestas son correctas!";
            mensaje.style.color = "green";
        } else {
            mensaje.textContent = "❌ Algunas respuestas son incorrectas. Intenta de nuevo.";
            mensaje.style.color = "red";
        }
        
        document.getElementById("actividad2").appendChild(mensaje);
        setTimeout(() => mensaje.remove(), 3000); // Elimina el mensaje después de 3 segundos
    }

    window.verificarDragDrop = verificarDragDrop; // Hace la función accesible desde HTML

    // ACTIVIDAD 3: Completar la Tabla de Verdad
    function verificarTablaVerdad() {
        let respuestas = document.querySelectorAll(".respuesta");
        respuestas.forEach(input => {
            if (input.value.toUpperCase() === input.dataset.respuesta) {
                input.style.backgroundColor = "lightgreen";
            } else {
                input.style.backgroundColor = "red";
            }
        });
    }

    window.verificarTablaVerdad = verificarTablaVerdad; // Hace la función accesible desde HTML

});

