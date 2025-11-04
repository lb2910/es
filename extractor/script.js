// script.js (Versión Corregida para Descarga)

document.addEventListener('DOMContentLoaded', (event) => {

    // 1. Definir el CÓDIGO BASE (plantilla HTML)
    const CODIGO_BASE = `
<!DOCTYPE html>
<html>
<head>
    <title>Código Generado</title>
</head>
<body>
    <div id="data-container" style="border: 1px solid #000; padding: 20px;">
        <h2>Resultado del Proceso</h2>
        <p>Esta es la parte vacía que ha sido completada:</p>
        
        **[INSERTAR_CODIGO_AQUI]**

        <p>Proceso completado exitosamente.</p>
    </div>
</body>
</html>
`;

    // 2. Obtener referencias a los elementos del DOM
    const inputElement = document.getElementById('codigoInput');
    const botonGenerar = document.getElementById('generarBtn');
    const botonDescargar = document.getElementById('descargarBtn'); 
    const salidaElemento = document.getElementById('codigoSalida');
    const MARCADOR = /\*\*\[INSERTAR\_CODIGO\_AQUI\]\*\*/g;
    
    // Almacena el código generado para la función de descarga
    let codigoFinalGenerado = ""; 

    // 3. Función para generar y mostrar el código
    function generarCodigoCompleto() {
        let entradaUsuario = inputElement.value;
        // Sanear la entrada
        entradaUsuario = entradaUsuario.replace(/"/g, '\\"').replace(/\n/g, '\\n');
        
        // Generar y ALMACENAR el código final
        codigoFinalGenerado = CODIGO_BASE.replace(MARCADOR, entradaUsuario);

        // Mostrar el código final
        salidaElemento.textContent = codigoFinalGenerado;
        
        // Habilitar el botón de descarga
        botonDescargar.disabled = false; 
    }

    // 4. Función de DESCARGA (usa Blob para crear el archivo)
    function descargarCodigo() {
        // **VALIDACIÓN CRÍTICA:** Detiene la descarga si la variable está vacía
        if (!codigoFinalGenerado) {
            alert("Error: Debe generar el código primero.");
            return;
        }

        // Crear un objeto Blob con el código y tipo HTML
        const blob = new Blob([codigoFinalGenerado], { type: 'text/html' });
        
        // Crear una URL temporal para ese Blob
        const url = URL.createObjectURL(blob);
        
        // Crear un enlace <a> temporal en memoria
        const a = document.createElement('a');
        
        // Configurar la descarga
        a.href = url;
        a.download = 'index.html'; // Nombre del archivo

        // Simular clic para forzar la descarga
        document.body.appendChild(a);
        a.click();
        
        // Limpieza: importante para liberar memoria
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // 5. Asignar los eventos a los botones
    botonGenerar.addEventListener('click', generarCodigoCompleto);
    botonDescargar.addEventListener('click', descargarCodigo); 
});
