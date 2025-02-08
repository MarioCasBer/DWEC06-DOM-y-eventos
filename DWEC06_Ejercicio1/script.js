window.onload = function(){

    const imagenes = [
        'imagen1.jpg',
        'imagen2.jpg',
        'imagen3.jpg',
        'imagen4.jpg',
        'imagen5.jpg'
    ]

    let imagenActual = -1;

    //INICIO
    const botonMostrar=document.createElement('button');  //Creamos un botón en memoria
    botonMostrar.textContent = "Mostrar imagenes";  //Le agregamos texto
    document.body.appendChild(botonMostrar);  //Lo añadimos al cuerpo de la página

    botonMostrar.addEventListener('click', function(){
        if(imagenActual === -1){
            imagenActual = 0;
            botonMostrar.remove();  //Eliminamos del DOM el boton para mostrar imagenes

            //Contenedor de Imagen
                const contenedor = document.createElement('div');
                contenedor.id = "contenedorImg";
                document.body.appendChild(contenedor);
            //Imagenes
                const img = document.createElement('img');  //Creamos una imagen y la almacenamos en una variable para trabajar con ella
                img.src = imagenes[imagenActual];  //Modificamos la ruta de la imagen almacenada
                contenedor.appendChild(img);  //Agremamos la imagen al cuerpo del DOM
            
            //Boton <
                const botonIzq = document.createElement('button');
                botonIzq.innerText = '<';
                botonIzq.classList.add('boton');
                botonIzq.disabled = true;
            //Boton >
                const botonDcha = document.createElement('button');
                botonDcha.innerText = '>';
                botonDcha.classList.add('boton');
                //NOTA: No desactivamos el boton siguiente porque ya se ha mostrado la primera foto. Se tiene que poder avanzar desde aquí

            //Encapsulado de botones
                const div = document.createElement('div');
                document.body.appendChild(div);
                div.append(botonIzq, botonDcha);  //Insertamos ambos botones dentro del div
            
            //Navegación de imágenes
            botonIzq.addEventListener('click', function(){
                antPag();
                comprobacionBotones();
            });

            botonDcha.addEventListener('click', function(){
                sigPag();
                comprobacionBotones();
            });

            //Control con flechas del teclado
            document.addEventListener('keydown', function(event){
                if (event.key === 'ArrowLeft'){
                    antPag();
                    comprobacionBotones();
                }else if (event.key === 'ArrowRight'){
                    sigPag();
                    comprobacionBotones();
                }
            });

            //Funciones
            function antPag() {
                if(imagenActual> 0){    //Incluimos una comprobacion para evitar que se salga del array Imagenes
                    imagenActual--;
                    img.src = imagenes[imagenActual];
                }
            }

            function sigPag(){
                if (imagenActual < imagenes.length -1){    //Incluimos una comprobacion para evitar que se salga del array Imagenes
                    imagenActual++;
                    img.src = imagenes[imagenActual];
                }
            }

            //Presencia de botones
            function comprobacionBotones(){
                if(imagenActual === 0){
                    botonIzq.disabled = true;
                }else{botonIzq.disabled = false;}

                if(imagenActual === imagenes.length-1){
                    botonDcha.disabled = true;
                }else{botonDcha.disabled = false;}
            }
        }
    });

}