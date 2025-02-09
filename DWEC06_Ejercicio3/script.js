window.onload = function(){

    //ESTRUCTURA
        const comprobaciones = document.createElement('div');
        comprobaciones.id = "comprobaciones";
        document.body.appendChild(comprobaciones);

        const comprobar = document.createElement('button');
        comprobar.id = "comprobar";
        comprobar.classList.add('boton');
        comprobar.innerText = "Comprobar";
        comprobar.addEventListener('click', comprobacion);
        comprobaciones.appendChild(comprobar);

        const entrada = document.createElement('input');
        entrada.id = "entrada";
        comprobaciones.appendChild(entrada);

        const limpiar = document.createElement('button');
        limpiar.id = "limpiar";
        limpiar.classList.add('boton');
        limpiar.innerText = "Limpiar"
        limpiar.addEventListener('click', borrado);
        document.body.appendChild(limpiar);

        const tabla = document.createElement('div');
        tabla.id = "tabla";
        document.body.appendChild(tabla);

        const mensajes = document.createElement('p');
        mensajes.id = "mensajes";
        document.body.appendChild(mensajes);

    //VARIABLES GLOBALES
        const numPartidos = 14;
        const opciones = ["1","X", "2"];
        let elecciones = [];  //Apuestas realizadas

        for (let i = 0; i < numPartidos; i++) {
            //Nueva fila con apuesta
            const apuesta = document.createElement('div');
            apuesta.classList.add('apuesta');
            tabla.appendChild(apuesta);

            //opciones de la apuesta
            for (let j = 0; j < opciones.length; j++) {
                const opcion = document.createElement('button');
                opcion.classList.add('opcion');
                opcion.innerText = opciones[j];
                opcion.addEventListener('click', marcarOpcion);
                apuesta.appendChild(opcion);
            }
        }

    //FUNCIONES
    function marcarOpcion(){
        let padre = this.parentElement;  //Selecciona el elemento padre (apuesta)
        let buttons = padre.getElementsByTagName('button');  //Recoge todos los botones del padre
        let index = Array.from(tabla.children).indexOf(padre);  //Cogemos el indice de la fila en la tabla

        elecciones[index] = this.innerText;  //Almacenamos el valor en 'elecciones'
        
        for (let i = 0; i < buttons.length; i++) {  
            buttons[i].classList.remove('marcado');  //Borra la clase 'marcado' de todos los elementos
        }

        this.classList.add('marcado');  //Asigna la clase ''marcado' solo al elemento del evento
    }

    function borrado(){
        let buttons = tabla.getElementsByTagName('button');  //Recoge todos los botones del padre
        for (let i = 0; i < buttons.length; i++) {  
            buttons[i].classList.remove('marcado');  //Borra la clase 'marcado' de todos los elementos
        }
        mensajes.innerText = "";
    }

    function comprobacion(){
        const resultado = entrada.value;  //Captura los valores introducidos
        const regex = new RegExp(`^[${opciones.join('')}]{${numPartidos}}$`);

        //Comprobaciones
        if (!regex.test(resultado)) {
            mensajes.innerText = "Solo se permiten valores 1, X y 2.";
            return;
        }

        if(resultado.length != numPartidos){
            mensajes.innerText = "¡El resultado tiene una longitud erronea!";
            return;
        }

        if (elecciones.join('') === resultado) {
            mensajes.innerText = "¡Enhorabuena!";
        } else {
            mensajes.innerText = "¡Apuestas incorrectas!";
        }
    }
    
}