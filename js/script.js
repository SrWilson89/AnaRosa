const IMAGENES = [
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/07a3b85e-707c-40e5-ba92-562722ca2f0f.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/0f2a2d2c-a205-4c79-8581-a28222ad98e7.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/1223a8dc-c57d-48df-85ae-94960874cbcb.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/176d514a-0082-403c-b3de-67ed59464679.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/3f9c6143-ee6f-4f1c-96a4-df2ce94a74f1.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/474a40fd-7024-4e28-8d95-e14b7b4be7f3.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/4eae4d4f-cb41-4d36-9c01-2f0b1fc2b32a.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/6054dd2f-402c-4b5d-a17c-bf3cb90ff9ec.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/62ecc265-881b-4452-a0ba-dab9e6dc47a2.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/6525d2c1-1baf-4e17-bdd5-1c139cd8deba.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/8a27a7d7-aa1b-4d86-9c0e-f7725e116b16.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/8e23df8d-d425-46fd-b27b-79f02295c3e9.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/98750cfb-b93f-459f-9f26-9b0671741caa.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/9ad46ae5-b29f-4216-a436-a165609c7172.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/9c784900-3225-4826-8b62-74619730cab8.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG-20200320-WA0043.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG-20210626-WA0011.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG-20210627-WA0009.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG-20210627-WA0010.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG-20210731-WA0013.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG-20210806-WA0010.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG20200601110835.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG20200601110841.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG20200601111013.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG_20210107_180322.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG_20210601_101913.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG_20210601_182430.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG_20231010_0001.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG_20231010_0002.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG_20231010_0003.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG_20231010_0004.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG_20231010_0005.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG_20231010_0006.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG_20231010_0007.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG_20231010_0008.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG_20231010_0009.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG_20231010_0010.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG_20231010_0011.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG_20231010_0012.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG_20231010_0013.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG_20231010_0014.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/IMG_20231010_0015.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/a181667b-ac7c-4382-b8ac-f4e57381dc38.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/b84ae495-4167-4183-aae0-cd57646c5d9e.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/b93d3d5e-86ce-4002-aaba-7f7188498fdf.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/ca9e8036-5d59-4403-9432-d6390b57125a.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/ccb3517f-8df9-4d39-a16b-c7676145e678.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/d30933f5-ff97-4b17-8d7d-2dd38857b47b.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/e394faca-346d-4816-81d0-a3cbb23b5732.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/ebc0910a-4b09-47d2-ab65-a32d1c0a85de.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/ee6c951f-6be3-4821-8242-f51457456789.jpg',
    'https://raw.githubusercontent.com/SrWilson89/AnaRosa/main/mama/f31fb8ce-ade9-4a57-a035-cf2420ef18bb.jpg'
];

// Configuración
const CONFIG = {
    intervalo: 3000, // 3 segundos entre imágenes
    transicion: 500  // 0.5 segundos para la transición
};

// Elementos del DOM
const elementos = {
    imagen: document.querySelector('#imagen'),
    botonRetroceder: document.querySelector('#retroceder'),
    botonAvanzar: document.querySelector('#avanzar'),
    botonPlay: document.querySelector('#play'),
    botonStop: document.querySelector('#stop'),
    contador: document.querySelector('#contador')
};

// Estado de la aplicación
const estado = {
    posicionActual: 0,
    intervalo: null,
    enTransicion: false
};

// Funciones
function actualizarImagen() {
    elementos.imagen.style.opacity = 0;
    
    setTimeout(() => {
        elementos.imagen.style.backgroundImage = `url(${IMAGENES[estado.posicionActual]})`;
        elementos.imagen.style.opacity = 1;
        actualizarContador();
        estado.enTransicion = false;
    }, CONFIG.transicion / 2);
}

function actualizarContador() {
    elementos.contador.textContent = `${estado.posicionActual + 1} de ${IMAGENES.length}`;
}

function siguienteImagen() {
    if (estado.enTransicion) return;
    
    estado.enTransicion = true;
    estado.posicionActual = (estado.posicionActual >= IMAGENES.length - 1) ? 0 : estado.posicionActual + 1;
    actualizarImagen();
}

function anteriorImagen() {
    if (estado.enTransicion) return;
    
    estado.enTransicion = true;
    estado.posicionActual = (estado.posicionActual <= 0) ? IMAGENES.length - 1 : estado.posicionActual - 1;
    actualizarImagen();
}

function iniciarSlideshow() {
    if (estado.intervalo) detenerSlideshow();
    
    estado.intervalo = setInterval(siguienteImagen, CONFIG.intervalo);
    elementos.botonPlay.disabled = true;
    elementos.botonStop.disabled = false;
    elementos.botonAvanzar.disabled = true;
    elementos.botonRetroceder.disabled = true;
}

function detenerSlideshow() {
    clearInterval(estado.intervalo);
    estado.intervalo = null;
    elementos.botonPlay.disabled = false;
    elementos.botonStop.disabled = true;
    elementos.botonAvanzar.disabled = false;
    elementos.botonRetroceder.disabled = false;
}

// Eventos
elementos.botonAvanzar.addEventListener('click', siguienteImagen);
elementos.botonRetroceder.addEventListener('click', anteriorImagen);
elementos.botonPlay.addEventListener('click', iniciarSlideshow);
elementos.botonStop.addEventListener('click', detenerSlideshow);

// Teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') siguienteImagen();
    if (e.key === 'ArrowLeft') anteriorImagen();
    if (e.key === ' ') {
        if (estado.intervalo) detenerSlideshow();
        else iniciarSlideshow();
    }
});

// Inicialización
window.addEventListener('load', () => {
    actualizarImagen();
    
    // Precargar imágenes para mejor experiencia
    IMAGENES.forEach(img => {
        const image = new Image();
        image.src = img;
    });
    
    console.log(`
        ╔═══════════════════════╗
        ║ ╔═╗ ╔╦╦╦╦╗            ║
        ║ ║╚╬═╗║║║╠╣╠══╦═╦═╗ 8  ║
        ║ ╠╗║╠╝║║║║║╠╗╚╣║║║║ 9  ║
        ║ ╚═╩╝ ╚══╩╩╩══╩═╩╩╝    ║
        ╚═══════════════════════╝
    `);
});