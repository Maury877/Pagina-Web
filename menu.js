// Declarar titmen como una variable global
const titmen = [
    "Triqui", "Cálculos Básicos", "Mayor", "Mayor 100", "Triqui",
    "Cebra", "Hipopótamo", "Rinoceronte", "Gorila", "Chimpancé",
    "Orangután", "Canguro", "Koala", "Panda", "Lobo",
    "Zorro", "Oso", "Búfalo", "Bisonte", "Antílope",
    "Ciervo", "Venado", "Alce", "Caribú", "Caballo",
    "Burro", "Mula", "Camello", "Dromedario", "Llama",
    "Alpaca", "Cabra", "Oveja", "Cerdo", "Vaca",
    "Toro", "Buey", "Gato", "Perro", "Conejo",
    "Liebre", "Ratón", "Rata", "Hámster", "Cobaya",
    "Ardilla", "Castor", "Nutria", "Mapache", "Zorrillo",
    "Puercoespín", "Erizo", "Murciélago", "Delfín", "Ballena",
    "Tiburón", "Manta raya", "Pez espada", "Caballito de mar", "Medusa",
    "Pulpo", "Calamar", "Langosta", "Cangrejo", "Camarón",
    "Estrella de mar", "Erizo de mar", "Caracol", "Babosa", "Gusano",
    "Mariposa", "Polilla", "Abeja", "Avispa", "Hormiga"
];

// Inicializar el menú dinámico
crearmenu();

const m1 = document.querySelector('#m1');
const m2 = document.querySelector('#m2');

// Mostrar/Ocultar menú en dispositivos pequeños
m1.addEventListener("click", function () {
    document.getElementById("men").style.display = "block";
    m1.style.display = "none";
    m2.style.display = "block";
});

m2.addEventListener("click", function () {
    document.getElementById("men").style.display = "none";
    m1.style.display = "block";
    m2.style.display = "none";
});

// Crear el menú dinámico
function crearmenu() {
    let txt = "";
    for (let i = 0; i < titmen.length; i++) {
        txt += `<a href="#" onclick="mostrarContenido(${i})">Ejercicio ${i + 1} - ${titmen[i]}</a>`;
    }
    document.getElementById("men").innerHTML = txt;
}

// Mostrar contenido dinámico según el botón del menú
function mostrarContenido(index) {
    const contenido = document.getElementById("triqui");
    contenido.innerHTML = ""; // Limpiar contenido previo

    switch (index) {
        case 0:
            contenido.innerHTML = "<h2>Triqui</h2><p>Aquí va el contenido del juego Triqui.</p>";
            pintartriqui();
            break;
        case 1:
            contenido.innerHTML = "<h2>Cálculos Básicos</h2><p>Realiza tus cálculos aquí.</p>";
            break;
        case 2:
            contenido.innerHTML = "<h2>Mayor</h2><p>Encuentra el mayor número en esta sección.</p>";
            break;
        case 3:
            contenido.innerHTML = "<h2>Mayor 100</h2><p>Descubre los números mayores a 100.</p>";
            break;
        default:
            contenido.innerHTML = `<h2>${titmen[index]}</h2><p>Contenido dinámico para ${titmen[index]}.</p>`;
    }
}
