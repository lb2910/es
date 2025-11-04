// script.js

document.addEventListener('DOMContentLoaded', (event) => {

    // 1. Definir el CÓDIGO BASE (plantilla HTML sin etiquetas innecesarias)
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
    
    let codigoFinalGenerado = ""; // Almacena el código para que la función de descarga pueda usarlo

    // 3. Función para generar y mostrar el código
    function generarCodigoCompleto() {
        let entradaUsuario = inputElement.value;
        // Sanear la entrada para que no rompa el string en JavaScript
        entradaUsuario = entradaUsuario.replace(/"/g, '\\"').replace(/\n/g, '\\n');
        
        // Generar y almacenar el código final
        codigoFinalGenerado = CODIGO_BASE.replace(MARCADOR, entradaUsuario);

        // Mostrar el código final en el área de salida
        salidaElemento.textContent = codigoFinalGenerado;
        
        // Habilitar el botón de descarga solo después de generar
        botonDescargar.disabled = false; 
    }

    // 4. Función de DESCARGA (usa Blob para crear el archivo)
    function descargarCodigo() {
        // 1. Crear un objeto Blob (Binary Large Object) con el código y tipo HTML
        const blob = new Blob([codigoFinalGenerado], { type: 'text/html' });
        
        // 2. Crear una URL temporal para ese Blob
        const url = URL.createObjectURL(blob);
        
        // 3. Crear un enlace <a> temporal en memoria
        const a = document.createElement('a');
        
        // 4. Configurar la descarga
        a.href = url;
        a.download = 'index.html'; // Nombre del archivo

        // 5. Simular clic para forzar la descarga
        document.body.appendChild(a);
        a.click();
        
        // 6. Limpieza: remover el enlace y liberar la memoria
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // 5. Asignar los eventos a los botones
    botonGenerar.addEventListener('click', generarCodigoCompleto);
    botonDescargar.addEventListener('click', descargarCodigo); 
});
