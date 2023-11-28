let currentStep = 1;

    function nextStep(next) {
        document.getElementById(`step${currentStep}`).classList.remove('active-step');
        currentStep = next;
        document.getElementById(`step${currentStep}`).classList.add('active-step');
    }

    function prevStep(prev) {
        document.getElementById(`step${currentStep}`).classList.remove('active-step');
        currentStep = prev;
        document.getElementById(`step${currentStep}`).classList.add('active-step');
    }

    function generarQR() {
        var datos_a_codificar = "Hola, esto es un código QR generado con JavaScript.";
        var nombre_archivo = "codigo_qr.png";
    
        // Crear el código QR
        var qr = new QRCode(document.getElementById("codigoQrImg"), {
            text: datos_a_codificar,
            width: 128,
            height: 128
        });
    
        // Guardar la imagen
        qr.save(nombre_archivo);
    }
    
    function downloadQR() {
        generarQR();
        alert('¡QR descargado!');
    }