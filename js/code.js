// EJERCICIO  TRIQUI   

var player = 1;
var finjue = 0;

// Declarar variables de los elementos dinámicos (se inicializan después)
let tb1, tb2, tb3, tb4, tb5, tb6, tb7, tb8, tb9;

function pintartriqui() {
    var txt = "";
    for (let i = 1; i < 10; i++) {
        txt += "<div id='tb" + i + "' onclick='acttb(" + i + ");' class='tb'>&nbsp;&nbsp;</div>";
    }
    txt += "<div id='res'>Empate</div>";
    txt += "<input type='button' id='btnlim' class='btn btn-primary btntri' value='Limpiar'>";
    document.getElementById("triqui").innerHTML = txt;

    // Actualizar las referencias a los elementos después de generarlos
    actualizarReferencias();
}

function actualizarReferencias() {
    tb1 = document.getElementById("tb1");
    tb2 = document.getElementById("tb2");
    tb3 = document.getElementById("tb3");
    tb4 = document.getElementById("tb4");
    tb5 = document.getElementById("tb5");
    tb6 = document.getElementById("tb6");
    tb7 = document.getElementById("tb7");
    tb8 = document.getElementById("tb8");
    tb9 = document.getElementById("tb9");

    const btnlim = document.querySelector('#btnlim');
    if (btnlim) {
        btnlim.addEventListener("click", function () {
            limpiar();
        });
    }
}

function acttb(t) {
    let t1 = document.getElementById("tb" + t);
    if (t1.innerHTML == "&nbsp;&nbsp;" && finjue == 0) {
        if (player == 1) {
            pintar(t, "X", "#0000ff");
            player = 2;
        } else {
            pintar(t, "O", "#ff0000");
            player = 1;
        }
    }
    validar();
}

function validar() {
    let f1 = tb1.innerHTML + tb2.innerHTML + tb3.innerHTML;
    let f2 = tb4.innerHTML + tb5.innerHTML + tb6.innerHTML;
    let f3 = tb7.innerHTML + tb8.innerHTML + tb9.innerHTML;
    let c1 = tb1.innerHTML + tb4.innerHTML + tb7.innerHTML;
    let c2 = tb2.innerHTML + tb5.innerHTML + tb8.innerHTML;
    let c3 = tb3.innerHTML + tb6.innerHTML + tb9.innerHTML;
    let dp = tb1.innerHTML + tb5.innerHTML + tb9.innerHTML;
    let ds = tb3.innerHTML + tb5.innerHTML + tb7.innerHTML;
    let ft = f1 + f2 + f3;
    let n = ft.indexOf("&nbsp;");
    if (f1 == "XXX" || f2 == "XXX" || f3 == "XXX" || c1 == "XXX" || c2 == "XXX" || c3 == "XXX" || dp == "XXX" || ds == "XXX") {
        bloq();
        document.getElementById("res").innerHTML = "Gano Jugador X";
        document.getElementById("res").style.display = "inherit";
        finjue = 1;
        if (f1 == "XXX") pingan(1, 3, 1);
        if (f2 == "XXX") pingan(4, 3, 1);
        if (f3 == "XXX") pingan(7, 3, 1);
        if (c1 == "XXX") pingan(1, 7, 3);
        if (c2 == "XXX") pingan(2, 7, 3);
        if (c3 == "XXX") pingan(3, 7, 3);
        if (dp == "XXX") pingan(1, 9, 4);
        if (ds == "XXX") pingan(3, 5, 2);

    } else if (f1 == "OOO" || f2 == "OOO" || f3 == "OOO" || c1 == "OOO" || c2 == "OOO" || c3 == "OOO" || dp == "OOO" || ds == "OOO") {
        bloq();
        document.getElementById("res").innerHTML = "Gano Jugador O";
        document.getElementById("res").style.display = "inherit";
        finjue = 1;
        if (f1 == "OOO") pingan(1, 3, 1);
        if (f2 == "OOO") pingan(4, 3, 1);
        if (f3 == "OOO") pingan(7, 3, 1);
        if (c1 == "OOO") pingan(1, 7, 3);
        if (c2 == "OOO") pingan(2, 7, 3);
        if (c3 == "OOO") pingan(3, 7, 3);
        if (dp == "OOO") pingan(1, 9, 4);
        if (ds == "OOO") pingan(3, 5, 2);

    } else if (n == -1) {
        bloq();
        document.getElementById("res").innerHTML = "Empate";
        document.getElementById("res").style.display = "inherit";
        finjue = 1;
    }

}

function pintar(t, sa, col) {
    let t1 = document.getElementById("tb" + t);
    t1.innerHTML = sa;
    t1.style.borderColor = col;
    t1.style.color = col;
}

function limpiar() {
    for (let i = 1; i < 10; i++) pintar(i, "&nbsp;&nbsp;", "#ffffff");
    document.getElementById("res").style.display = "none";
    document.getElementById("res").innerHTML = "";
    player = 1;
    finjue = 0;
}

function bloq() {
    for (let i = 1; i < 10; i++) {
        pintar(i, document.getElementById("tb" + i).innerHTML, "#888888");
    }
}

function pingan(im, li, ic) {
    for (let i = im; i < (im + li); i = i + ic) {
        let tb = document.getElementById("tb" + i);
        pintar(i, tb.innerHTML, "#a6ff00");
    }
}
// ...existing code...

const titulos = [
    "Operaciones básicas",
    "¿Cuál es el número mayor?",
    "Mayor, menor o igual que 100",
    "Valores de forma ascendente",
    "Notas",
    "Área de un triángulo",
    "Par o Impar",
    "Descuento Rosas",
    "Ganancias empleado",
    "Concesionario de carros",
    "Decremento de 3 en 3",
    "Serie Fibonacci",
    "Primeros 30 números primos",
    "Suma, resta, promedio y diferencia números pares e impares",
    "Operaciones número de 1 a 5",
    "Divisible por 2 y 3 al mismo tiempo",
    "Números primos en un rango de dos valores",
    "Horas, minutos y segundos desde 00:00:00 hasta 23:00:00",
    "Tabla de multiplicar",
    "Cantidad de pares, impares y primos",
    "Suma de dos números cualquiera",
    "Promedio calificaciones",
    "Área de un rectángulo",
    "Área de una circunferencia",
    "Terrenos, calcular el área",
    "Cálculo del área de una figura compuesta por triángulos y semicircunferencia",
    "Conversión de litros a galones para pagos de producción de leche",
    "Distancia entre dos puntos en el plano cartesiano",
    "Conversión de metros a pulgadas para pedidos de tela",
    "Cálculo del Pago por Consumo de Agua",
    "Determinación del Mayor de Dos Valores",
    "Determinación de si un Número es Positivo o Negativo",
    "Costo de Lápices",
    "Almacenes “El harapiento distinguido”",
    "La Mayor de Tres Cantidades",
    "Cálculo del Presupuesto para Banquetes",
    "Cálculo de Ganancia por la Venta de Uva",
    "Costo de un Viaje Escolar",
    "Costo de una Llamada Telefónica",
    "Costo de un Viaje en Autobús",
    "Consultas del Dr. Lorenzo T. Mata Lozano",
    "Costos de Paquetería Internacional",
    "Aumento de Límite de Crédito en Banco",
    "Premios por Compras en Supermercado SM",
    "Calculadora Básica con Menú",
    "Operaciones Matemáticas con Número",
    "Listado de Números Primos hasta N",
    "Cálculo de Porcentaje de Género",
    "Suma de Cinco Números",
    "Números Pares entre 1 y N",
    "Análisis de Ventas del Supermercado",
    "Suma de Diez Cantidades con Ciclo Mientras",
    "Cálculo de la Edad Promedio de Alumnos",
    "Cálculo de la Estatura Promedio de Personas",
    "Ahorro Mensual y Anual",
    "Generación de la Sucesión de Fibonacci",
    "Cálculo de Sueldo por Horas Trabajadas",
    "Encuentro en la Carretera Aguascalientes-Zacatecas",
    "Análisis de Ventas en la Tienda Tiki Taka",
    "Cálculo de Nómina para Obreros en Constructora Tecnovivir Casas C.A.",
    "Algoritmo para Caja Registradora",
    "Suma de Diez Cantidades con Ciclo Repite",
    "Contador de Cantidades Positivas y Negativas",
    "Cálculo de la Suma de 10 Números",
    "Clasificación y Suma de Números",
    "Búsqueda de un Elemento en un Vector",
    "Reordenamiento de un Vector de Enteros",
    "Promedio de Números Enteros Positivos",
    "Impresión de Notas Aprobadas en una Matriz 5x5",
    "Ordenación y Análisis de una Matriz 5x5 de Números Enteros",
    "Multiplicación de Matrices 3x3 y Suma de Filas y Columnas"
];

function mostrarTitulo(index) {
    const contenido = document.getElementById("triqui");
    contenido.innerHTML = `<h2>${titulos[index]}</h2>`;
}

// ...existing code...


// EJERCICIO 1

function mostrarCalculos() {
    const contenido = document.getElementById("triqui");
    contenido.innerHTML = `
        <h2>Mayor</h2>0
        <form id="calcForm">
            <label for="valor1">Ingrese el primer valor:</label>
            <input type="number" id="valor1" name="valor1"><br><br>
            <label for="valor2">Ingrese el segundo valor:</label>
            <input type="number" id="valor2" name="valor2"><br><br>
            <label for="signo">Ingrese un signo (+, -, *, /):</label>
            <input type="text" id="signo" name="signo" maxlength="1"><br><br>
            <label for="resultado">Resultado:</label>
            <input type="text" id="resultado" name="resultado" readonly><br><br>
            <button type="button" onclick="calcular()">Calcular</button>
            <button type="button" onclick="limpiarCalculos()">Limpiar</button>
        </form>
    `;
}

function calcular() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const signo = document.getElementById('signo').value;
    let resultado = '';

    switch (signo) {
        case '+':
            resultado = `${valor1} + ${valor2} = ${valor1 + valor2}`;
            break;
        case '-':
            resultado = `${valor1} - ${valor2} = ${valor1 - valor2}`;
            break;
        case '*':
            resultado = `${valor1} * ${valor2} = ${valor1 * valor2}`;
            break;
        case '/':
            if (valor2 === 0) {
                resultado = 'La división por cero es imposible :(';
            } else {
                resultado = `${valor1} / ${valor2} = ${valor1 / valor2}`;
            }
            break;
        default:
            resultado = 'Solo se permite suma, resta, multiplicación y división ;)';
    }

    document.getElementById('resultado').value = resultado;
}

function limpiarCalculos() {
    document.getElementById('calcForm').reset();
    document.getElementById('resultado').value = '';
}

// ...existing code...


// EJERCICIO 2

function mostrarMayor() {
    const contenido = document.getElementById("triqui");
    contenido.innerHTML = `
        <h2>Mayor</h2>
        <form id="mayorForm">
            <label for="valor1">Ingrese el primer valor:</label>
            <input type="number" id="valor1" name="valor1"><br><br>
            <label for="valor2">Ingrese el segundo valor:</label>
            <input type="number" id="valor2" name="valor2"><br><br>
            <label for="resultado">Resultado:</label>
            <input type="text" id="resultado" name="resultado" readonly><br><br>
            <button type="button" onclick="calcularMayor()">Calcular</button>
            <button type="button" onclick="limpiarMayor()">Limpiar</button>
        </form>
    `;
}

function calcularMayor() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    let resultado = '';

    if (valor1 < valor2) {
        resultado = `El número mayor es: ${valor2}`;
    } else {
        resultado = `El número mayor es: ${valor1}`;
    }

    document.getElementById('resultado').value = resultado;
}

function limpiarMayor() {
    document.getElementById('mayorForm').reset();
    document.getElementById('resultado').value = '';
}

// ...existing code...

// EJERCICIO 3

function mostrarComparacion() {
    const contenido = document.getElementById("triqui");
    contenido.innerHTML = `
        <h2>Comparar con 100</h2>
        <form id="comparacionForm">
            <label for="valor">Ingrese un valor:</label>
            <input type="number" id="valor" name="valor"><br><br>
            <label for="resultado">Resultado:</label>
            <input type="text" id="resultado" name="resultado" readonly><br><br>
            <button type="button" onclick="compararCon100()">Calcular</button>
            <button type="button" onclick="limpiarComparacion()">Limpiar</button>
        </form>
    `;
}

function compararCon100() {
    const valor = parseFloat(document.getElementById('valor').value);
    let resultado = '';

    if (valor < 100) {
        resultado = `${valor} es menor que 100`;
    } else if (valor === 100) {
        resultado = `${valor} es igual a 100`;
    } else {
        resultado = `${valor} es mayor que 100`;
    }

    document.getElementById('resultado').value = resultado;
}

function limpiarComparacion() {
    document.getElementById('comparacionForm').reset();
    document.getElementById('resultado').value = '';
}

// ...existing code...


// EJERCICIO 4

function mostrarOrdenar() {
    const contenido = document.getElementById("triqui");
    contenido.innerHTML = `
        <h2>Ordenar Números</h2>
        <form id="ordenarForm">
            <label for="valor1">Ingrese el primer valor:</label>
            <input type="number" id="valor1" name="valor1"><br><br>
            <label for="valor2">Ingrese el segundo valor:</label>
            <input type="number" id="valor2" name="valor2"><br><br>
            <label for="valor3">Ingrese el tercer valor:</label>
            <input type="number" id="valor3" name="valor3"><br><br>
            <label for="resultado">Resultado:</label>
            <input type="text" id="resultado" name="resultado" readonly><br><br>
            <button type="button" onclick="ordenarNumeros()">Calcular</button>
            <button type="button" onclick="limpiarOrdenar()">Limpiar</button>
        </form>
    `;
}

function ordenarNumeros() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const valor3 = parseFloat(document.getElementById('valor3').value);
    let resultado = '';

    let numeros = [valor1, valor2, valor3];
    numeros.sort((a, b) => a - b);
    resultado = `${numeros[0]}, ${numeros[1]}, ${numeros[2]}`;

    document.getElementById('resultado').value = resultado;
}

function limpiarOrdenar() {
    document.getElementById('ordenarForm').reset();
    document.getElementById('resultado').value = '';
}

// ...existing code...




// ...existing code...

function mostrarPromedio() {
    const contenido = document.getElementById("triqui");
    contenido.innerHTML = `
        <h2>Calcular Promedio</h2>
        <form id="promedioForm">
            <label for="nota1">Ingrese la primera nota:</label>
            <input type="number" id="nota1" name="nota1" step="0.01" min="0" max="5"><br><br>
            <label for="nota2">Ingrese la segunda nota:</label>
            <input type="number" id="nota2" name="nota2" step="0.01" min="0" max="5"><br><br>
            <label for="nota3">Ingrese la tercera nota:</label>
            <input type="number" id="nota3" name="nota3" step="0.01" min="0" max="5"><br><br>
            <label for="resultado">Resultado:</label>
            <input type="text" id="resultado" name="resultado" readonly><br><br>
            <button type="button" onclick="calcularPromedio()">Calcular</button>
            <button type="button" onclick="limpiarPromedio()">Limpiar</button>
        </form>
    `;
}

function calcularPromedio() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    let resultado = '';

    if (nota1 > 5 || nota2 > 5 || nota3 > 5) {
        resultado = 'Solo se permiten valores entre 0 y 5 ;)';
    } else {
        const promedio = (nota1 + nota2 + nota3) / 3;
        resultado = `El promedio es: ${promedio.toFixed(2)}\n`;
        resultado += promedio < 3 ? 'Reprueba :(' : 'Aprueba :)';
    }

    document.getElementById('resultado').value = resultado;
}

function limpiarPromedio() {
    document.getElementById('promedioForm').reset();
    document.getElementById('resultado').value = '';
}

// ...existing code...