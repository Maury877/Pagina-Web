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
            mostrarCalculos();
            break;
        case 2:
            contenido.innerHTML = "<h2>Mayor</h2><p>Encuentra el mayor número en esta sección.</p>";
            mostrarMayor();
            break;
        case 3:
            contenido.innerHTML = "<h2>Mayor 100</h2><p>Descubre los números mayores a 100.</p>";
            mostrarComparacion();
            break;
        case 4:
            contenido.innerHTML = "<h2>Mayor 100</h2><p>Descubre los números mayores a 100.</p>";
            mostrarOrdenar();
            break;  
        case 5:
                contenido.innerHTML = "<h2>Ejercicio 6</h2><p>Contenido para el ejercicio 6.</p>";
                mostrarPromedio();
                break;
        case 6:
                contenido.innerHTML = "<h2>Ejercicio 7</h2><p>Contenido para el ejercicio 7.</p>";
                break;
        case 7:
                contenido.innerHTML = "<h2>Ejercicio 8</h2><p>Contenido para el ejercicio 8.</p>";
                break;
        case 8:
                contenido.innerHTML = "<h2>Ejercicio 9</h2><p>Contenido para el ejercicio 9.</p>";
                break;
        case 9:
                contenido.innerHTML = "<h2>Ejercicio 10</h2><p>Contenido para el ejercicio 10.</p>";
                break;
        case 10:
                contenido.innerHTML = "<h2>Ejercicio 11</h2><p>Contenido para el ejercicio 11.</p>";
                break;
        case 11:
                contenido.innerHTML = "<h2>Ejercicio 12</h2><p>Contenido para el ejercicio 12.</p>";
                break;
        case 12:
                contenido.innerHTML = "<h2>Ejercicio 13</h2><p>Contenido para el ejercicio 13.</p>";
                break;
        case 13:
                contenido.innerHTML = "<h2>Ejercicio 14</h2><p>Contenido para el ejercicio 14.</p>";
                break;
        case 14:
                contenido.innerHTML = "<h2>Ejercicio 15</h2><p>Contenido para el ejercicio 15.</p>";
                break;
        case 15:
                contenido.innerHTML = "<h2>Ejercicio 16</h2><p>Contenido para el ejercicio 16.</p>";
                break;
        case 16:
                contenido.innerHTML = "<h2>Ejercicio 17</h2><p>Contenido para el ejercicio 17.</p>";
                break;
        case 17:
                contenido.innerHTML = "<h2>Ejercicio 18</h2><p>Contenido para el ejercicio 18.</p>";
                break;
        case 18:
                contenido.innerHTML = "<h2>Ejercicio 19</h2><p>Contenido para el ejercicio 19.</p>";
                break;
        case 19:
                contenido.innerHTML = "<h2>Ejercicio 20</h2><p>Contenido para el ejercicio 20.</p>";
                break;
        case 20:
                contenido.innerHTML = "<h2>Ejercicio 21</h2><p>Contenido para el ejercicio 21.</p>";
                break;
        case 21:
                contenido.innerHTML = "<h2>Ejercicio 22</h2><p>Contenido para el ejercicio 22.</p>";
                break;
        case 22:
                contenido.innerHTML = "<h2>Ejercicio 23</h2><p>Contenido para el ejercicio 23.</p>";
                break;
        case 23:
                contenido.innerHTML = "<h2>Ejercicio 24</h2><p>Contenido para el ejercicio 24.</p>";
                break;
        case 24:
                contenido.innerHTML = "<h2>Ejercicio 25</h2><p>Contenido para el ejercicio 25.</p>";
                break;
        case 25:
                contenido.innerHTML = "<h2>Ejercicio 26</h2><p>Contenido para el ejercicio 26.</p>";
                break;
        case 26:
                contenido.innerHTML = "<h2>Ejercicio 27</h2><p>Contenido para el ejercicio 27.</p>";
                break;
        case 27:
                contenido.innerHTML = "<h2>Ejercicio 28</h2><p>Contenido para el ejercicio 28.</p>";
                break;
        case 28:
                contenido.innerHTML = "<h2>Ejercicio 29</h2><p>Contenido para el ejercicio 29.</p>";
                break;
        case 29:
                contenido.innerHTML = "<h2>Ejercicio 30</h2><p>Contenido para el ejercicio 30.</p>";
                break;
        case 30:
                contenido.innerHTML = "<h2>Ejercicio 31</h2><p>Contenido para el ejercicio 31.</p>";
                break;
        case 31:
                contenido.innerHTML = "<h2>Ejercicio 32</h2><p>Contenido para el ejercicio 32.</p>";
                break;
        case 32:
                contenido.innerHTML = "<h2>Ejercicio 33</h2><p>Contenido para el ejercicio 33.</p>";
                break;
        case 33:
                contenido.innerHTML = "<h2>Ejercicio 34</h2><p>Contenido para el ejercicio 34.</p>";
                break;
        case 34:
                contenido.innerHTML = "<h2>Ejercicio 35</h2><p>Contenido para el ejercicio 35.</p>";
                break;
        case 35:
                contenido.innerHTML = "<h2>Ejercicio 36</h2><p>Contenido para el ejercicio 36.</p>";
                break;
        case 36:
                contenido.innerHTML = "<h2>Ejercicio 37</h2><p>Contenido para el ejercicio 37.</p>";
                break;
        case 37:
                contenido.innerHTML = "<h2>Ejercicio 38</h2><p>Contenido para el ejercicio 38.</p>";
                break;
        case 38:
                contenido.innerHTML = "<h2>Ejercicio 39</h2><p>Contenido para el ejercicio 39.</p>";
                break;
        case 39:
                contenido.innerHTML = "<h2>Ejercicio 40</h2><p>Contenido para el ejercicio 40.</p>";
                break;
        case 40:
                contenido.innerHTML = "<h2>Ejercicio 41</h2><p>Contenido para el ejercicio 41.</p>";
                break;
        case 41:
                contenido.innerHTML = "<h2>Ejercicio 42</h2><p>Contenido para el ejercicio 42.</p>";
                break;
        case 42:
                contenido.innerHTML = "<h2>Ejercicio 43</h2><p>Contenido para el ejercicio 43.</p>";
                break;
        case 43:
                contenido.innerHTML = "<h2>Ejercicio 44</h2><p>Contenido para el ejercicio 44.</p>";
                break;
        case 44:
                contenido.innerHTML = "<h2>Ejercicio 45</h2><p>Contenido para el ejercicio 45.</p>";
                break;
        case 45:
                contenido.innerHTML = "<h2>Ejercicio 46</h2><p>Contenido para el ejercicio 46.</p>";
                break;
        case 46:
                contenido.innerHTML = "<h2>Ejercicio 47</h2><p>Contenido para el ejercicio 47.</p>";
                break;
        case 47:
                contenido.innerHTML = "<h2>Ejercicio 48</h2><p>Contenido para el ejercicio 48.</p>";
                break;
        case 48:
                contenido.innerHTML = "<h2>Ejercicio 49</h2><p>Contenido para el ejercicio 49.</p>";
                break;
        case 49:
                contenido.innerHTML = "<h2>Ejercicio 50</h2><p>Contenido para el ejercicio 50.</p>";
                break;
        case 50:
                contenido.innerHTML = "<h2>Ejercicio 51</h2><p>Contenido para el ejercicio 51.</p>";
                break;
        case 51:
                contenido.innerHTML = "<h2>Ejercicio 52</h2><p>Contenido para el ejercicio 52.</p>";
                break;
        case 52:
                contenido.innerHTML = "<h2>Ejercicio 53</h2><p>Contenido para el ejercicio 53.</p>";
                break;
        case 53:
                contenido.innerHTML = "<h2>Ejercicio 54</h2><p>Contenido para el ejercicio 54.</p>";
                break;
        case 54:
                contenido.innerHTML = "<h2>Ejercicio 55</h2><p>Contenido para el ejercicio 55.</p>";
                break;
        case 55:
                contenido.innerHTML = "<h2>Ejercicio 56</h2><p>Contenido para el ejercicio 56.</p>";
                break;
        case 56:
                contenido.innerHTML = "<h2>Ejercicio 57</h2><p>Contenido para el ejercicio 57.</p>";
                break;
        case 57:
                contenido.innerHTML = "<h2>Ejercicio 58</h2><p>Contenido para el ejercicio 58.</p>";
                break;
        case 58:
                contenido.innerHTML = "<h2>Ejercicio 59</h2><p>Contenido para el ejercicio 59.</p>";
                break;
        case 59:
                contenido.innerHTML = "<h2>Ejercicio 60</h2><p>Contenido para el ejercicio 60.</p>";
                break;
        case 60:
                contenido.innerHTML = "<h2>Ejercicio 61</h2><p>Contenido para el ejercicio 61.</p>";
                break;
        case 61:
                contenido.innerHTML = "<h2>Ejercicio 62</h2><p>Contenido para el ejercicio 62.</p>";
                break;
        case 62:
                contenido.innerHTML = "<h2>Ejercicio 63</h2><p>Contenido para el ejercicio 63.</p>";
                break;
        case 63:
                contenido.innerHTML = "<h2>Ejercicio 64</h2><p>Contenido para el ejercicio 64.</p>";
                break;
        case 64:
                contenido.innerHTML = "<h2>Ejercicio 65</h2><p>Contenido para el ejercicio 65.</p>";
                break;
        case 65:
                contenido.innerHTML = "<h2>Ejercicio 66</h2><p>Contenido para el ejercicio 66.</p>";
                break;
        case 66:
                contenido.innerHTML = "<h2>Ejercicio 67</h2><p>Contenido para el ejercicio 67.</p>";
                break;
        case 67:
                contenido.innerHTML = "<h2>Ejercicio 68</h2><p>Contenido para el ejercicio 68.</p>";
                break;
        case 68:
                contenido.innerHTML = "<h2>Ejercicio 69</h2><p>Contenido para el ejercicio 69.</p>";
                break;
        case 69:
                contenido.innerHTML = "<h2>Ejercicio 70</h2><p>Contenido para el ejercicio 70.</p>";
                break;
        case 70:
                contenido.innerHTML = "<h2>Ejercicio 71</h2><p>Contenido para el ejercicio 71.</p>";
                break;
        case 71:
                contenido.innerHTML = "<h2>Ejercicio 72</h2><p>Contenido para el ejercicio 72.</p>";
                break;
        default:
                contenido.innerHTML = "<h2>Opción no disponible</h2><p>El contenido solicitado no está disponible.</p>";
    }
}
