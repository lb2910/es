// script.js

document.addEventListener('DOMContentLoaded', (event) => {

    // 1. Definir el CÓDIGO BASE con el marcador de posición para la inserción
    // NOTA: La etiqueta <pre class="usuario-codigo"> ha sido eliminada.
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

    // 2. Obtener referencias a los elementos del DOM usando sus IDs
    const inputElement = document.getElementById('codigoInput');
    const botonGenerar = document.getElementById('generarBtn');
    const salidaElemento = document.getElementById('codigoSalida');
    const MARCADOR = /\*\*\[INSERTAR\_CODIGO\_AQUI\]\*\*/g;

    // 3. Función principal para generar y mostrar el código
    function generarCodigoCompleto() {
        let entradaUsuario = inputElement.value;

        // Sanear la entrada para evitar errores de sintaxis en el string final
        entradaUsuario = entradaUsuario.replace(/"/g, '\\"').replace(/\n/g, '\\n');
        
        // Reemplazar TODAS las ocurrencias del marcador en el código base
        const CODIGO_FINAL = CODIGO_BASE.replace(MARCADOR, entradaUsuario);

        // Mostrar el código final
        // Nota: la salida se sigue mostrando en <pre id="codigoSalida"> en el HTML principal
        // para mantener el formato legible al usuario.
        salidaElemento.textContent = CODIGO_FINAL;
    }

    // 4. Asignar el evento click al botón
    botonGenerar.addEventListener('click', generarCodigoCompleto);
});
