window.onload = function(){

    //VARIABLES GLOBALES
        let numPantalla = [];
        let valores = [1,2,3,4,5,6,7,8,9];
        const contraseña = "9999";

    //ESTRUCTURA
        const cuadroDialogo = document.createElement('p');
        cuadroDialogo.id = "cuadroDialogo";
        document.body.appendChild(cuadroDialogo);

        const contenedor = document.createElement('div');
        contenedor.id = "contenedor";
        document.body.appendChild(contenedor);

        const pantalla = document.createElement('div');
        pantalla.id = "pantalla";
        //pantalla.innerText = numPantalla;
        contenedor.appendChild(pantalla);

        const botonera = document.createElement('div');
        botonera.id = "botonera";
        contenedor.appendChild(botonera);

    //ACCIONES (borrar y validar)
        const controles = document.createElement('div');
        controles.id = "controles";
        contenedor.appendChild(controles);

        const borrar = document.createElement('button');
        borrar.id = "borrar";
        borrar.innerText="C";
        controles.appendChild(borrar);

        const validar = document.createElement('button');
        validar.id = "validar";
        validar.innerText="Validar";
        controles.appendChild(validar);

    //TECLAS NUMEROS
        shuffle(valores);

        for (let i = 0; i < valores.length; i++) {
            const boton = document.createElement('button');
            boton.id = valores[i];
            boton.classList.add('boton');
            boton.innerText = valores[i];
            //Mostrar resultado
            boton.addEventListener('click', function(){
                if(numPantalla.length<4){
                    numPantalla.push(boton.innerText);
                    pantalla.innerText = "*".repeat(numPantalla.length);  //String.repeat(n)
                }
            });
            botonera.appendChild(boton);
        }

    //VALIDACION
        validar.addEventListener('click', function(){
            const regex = new RegExp("^" + contraseña + "$");  //Construye regex a partir de la contraseña del principio

            if(numPantalla.length != contraseña.length){
                cuadroDialogo.innerText = "!La longitud de la contraseña no coincide!";
            }else if(regex.test(numPantalla.join(''))){  //Hay que unir los caracteres del array para compararlos
                cuadroDialogo.innerText="¡Contraseña correcta!"
            }else{cuadroDialogo.innerText="¡La contraseña no es correcta!"}
        });

    //BORRAR
        borrar.addEventListener('click', function(){
            cuadroDialogo.innerText = "";
            numPantalla.pop();
            pantalla.innerText = "*".repeat(numPantalla.length);
        });
    
    
    // Función shuffle Algoritmo Fisher y Yates
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {  //mientras i sea mayor que 0 el bucle seguirá reordenando
            const j = Math.floor(Math.random() * (i + 1));
                //random solo devuelve numeros entre 0 y 1, por eso sumamos (i+1) y luego redondeamos a la baja
            [array[i], array[j]] = [array[j], array[i]]; // Intercambio de elementos
        }
    }

}