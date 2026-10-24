
// ==========================================
// MOMENTOS ÚNICOS — funcionalidades
// ==========================================

// Número internacional de WhatsApp de Colombia.
// Debe escribirse sin el signo + ni espacios.
const WHATSAPP = "573142639759";

// IMPORTANTE:
// Los precios son valores de referencia.
// Verifica los precios reales antes de publicar.
const productos = [
  {
    id: 1,
    nombre: "Bouquet 60",
    categoria: "ramos",
    etiqueta: "Bouquet",
    descripcion: "Un detalle floral para sorprender.",
    precio: 60000,
    imagen: "img/buquet60.jpg",
    alt: "Bouquet floral referencia 60"
  },
  {
    id: 2,
    nombre: "Bouquet 65",
    categoria: "ramos",
    etiqueta: "Bouquet",
    descripcion: "Un ramo para regalar con cariño.",
    precio: 65000,
    imagen: "img/buquet65.jpg",
    alt: "Bouquet floral referencia 65"
  },
  {
    id: 3,
    nombre: "Bouquet 70",
    categoria: "ramos",
    etiqueta: "Bouquet",
    descripcion: "Flores para un momento especial.",
    precio: 70000,
    imagen: "img/buquet70.jpg",
    alt: "Bouquet floral referencia 70"
  },
  {
    id: 4,
    nombre: "Bouquet 75",
    categoria: "ramos",
    etiqueta: "Bouquet",
    descripcion: "Una combinación floral delicada.",
    precio: 75000,
    imagen: "img/buquet75.jpg",
    alt: "Bouquet floral referencia 75"
  },
  {
    id: 5,
    nombre: "Bouquet 90",
    categoria: "ramos",
    etiqueta: "Más elegido",
    descripcion: "Un ramo para sorprender a alguien especial.",
    precio: 90000,
    imagen: "img/buquet90.jpg",
    alt: "Bouquet floral referencia 90"
  },
  {
    id: 6,
    nombre: "Bouquet 110",
    categoria: "ramos",
    etiqueta: "Bouquet",
    descripcion: "Un arreglo floral para celebrar.",
    precio: 110000,
    imagen: "img/buquet110.jpg",
    alt: "Bouquet floral referencia 110"
  },
  {
    id: 7,
    nombre: "Bouquet 111",
    categoria: "ramos",
    etiqueta: "Bouquet",
    descripcion: "Un diseño floral especial.",
    precio: 111000,
    imagen: "img/buquet111.jpg",
    alt: "Bouquet floral referencia 111"
  },
  {
    id: 8,
    nombre: "Bouquet 130",
    categoria: "ramos",
    etiqueta: "Especial",
    descripcion: "Flores para crear un recuerdo inolvidable.",
    precio: 130000,
    imagen: "img/buquet130.jpg",
    alt: "Bouquet floral referencia 130"
  },
  {
    id: 9,
    nombre: "Bouquet 180",
    categoria: "ramos",
    etiqueta: "Premium",
    descripcion: "Un detalle floral de mayor tamaño.",
    precio: 180000,
    imagen: "img/buquet180.jpg",
    alt: "Bouquet floral referencia 180"
  },
  {
    id: 10,
    nombre: "Bouquet 600",
    categoria: "ramos",
    etiqueta: "Premium",
    descripcion: "Una propuesta floral de gran formato.",
    precio: 600000,
    imagen: "img/buquet600.jpg",
    alt: "Bouquet floral referencia 600"
  },
  {
    id: 11,
    nombre: "Caja floral 115",
    categoria: "arreglos",
    etiqueta: "Caja floral",
    descripcion: "Un arreglo presentado en caja.",
    precio: 115000,
    imagen: "img/caja115.jpg",
    alt: "Caja floral referencia 115"
  },
  {
    id: 12,
    nombre: "Caja floral 120",
    categoria: "arreglos",
    etiqueta: "Caja floral",
    descripcion: "Un detalle floral para regalar.",
    precio: 120000,
    imagen: "img/caja120.jpg",
    alt: "Caja floral referencia 120"
  },
  {
    id: 13,
    nombre: "Caja floral 160",
    categoria: "arreglos",
    etiqueta: "Caja floral",
    descripcion: "Un diseño para celebrar momentos únicos.",
    precio: 160000,
    imagen: "img/caja160.jpg",
    alt: "Caja floral referencia 160"
  },
  {
    id: 14,
    nombre: "Caja floral 170",
    categoria: "arreglos",
    etiqueta: "Caja floral",
    descripcion: "Flores en una presentación especial.",
    precio: 170000,
    imagen: "img/caja170.jpg",
    alt: "Caja floral referencia 170"
  },
  {
    id: 15,
    nombre: "Caja floral 180",
    categoria: "arreglos",
    etiqueta: "Caja floral",
    descripcion: "Un arreglo floral de gran presencia.",
    precio: 180000,
    imagen: "img/caja180.jpg",
    alt: "Caja floral referencia 180"
  },
  {
    id: 16,
    nombre: "Caja floral 190",
    categoria: "arreglos",
    etiqueta: "Caja floral",
    descripcion: "Un detalle elegante y personalizado.",
    precio: 190000,
    imagen: "img/caja190.jpg",
    alt: "Caja floral referencia 190"
  },
  {
    id: 17,
    nombre: "Caja floral 200",
    categoria: "arreglos",
    etiqueta: "Caja floral",
    descripcion: "Una propuesta floral para sorprender.",
    precio: 200000,
    imagen: "img/caja200.jpg",
    alt: "Caja floral referencia 200"
  },
  {
    id: 18,
    nombre: "Canasta floral 200",
    categoria: "arreglos",
    etiqueta: "Canasta",
    descripcion: "Flores presentadas en una canasta.",
    precio: 200000,
    imagen: "img/canasta200.jpg",
    alt: "Canasta floral"
  },
  {
    id: 19,
    nombre: "Rosas rojas",
    categoria: "ramos",
    etiqueta: "Flores",
    descripcion: "Un clásico para expresar amor.",
    precio: null,
    imagen: "img/rosaroja.jpg",
    alt: "Rosas rojas"
  },
  {
    id: 20,
    nombre: "Rosas rosadas",
    categoria: "ramos",
    etiqueta: "Flores",
    descripcion: "Tonos delicados para sorprender.",
    precio: null,
    imagen: "img/rosarosada.jpg",
    alt: "Rosas rosadas"
  },
  {
    id: 21,
    nombre: "Rosas blancas",
    categoria: "ramos",
    etiqueta: "Flores",
    descripcion: "Elegancia y delicadeza floral.",
    precio: null,
    imagen: "img/rosablanca.jpg",
    alt: "Rosas blancas"
  },
  {
    id: 22,
    nombre: "Girasoles",
    categoria: "ramos",
    etiqueta: "Flores",
    descripcion: "Flores llenas de luz y alegría.",
    precio: null,
    imagen: "img/girasol.jpg",
    alt: "Girasol"
  },
  {
    id: 23,
    nombre: "Lirios",
    categoria: "ramos",
    etiqueta: "Flores",
    descripcion: "Flores elegantes para regalar.",
    precio: null,
    imagen: "img/lirio.jpg",
    alt: "Lirios"
  },
  {
    id: 24,
    nombre: "Margaritas",
    categoria: "ramos",
    etiqueta: "Flores",
    descripcion: "Un toque fresco y natural.",
    precio: null,
    imagen: "img/margarita.jpg",
    alt: "Margaritas"
  },
  {
    id: 25,
    nombre: "Claveles",
    categoria: "ramos",
    etiqueta: "Flores",
    descripcion: "Flores para complementar tu arreglo.",
    precio: null,
    imagen: "img/clavel.jpg",
    alt: "Claveles"
  },
  {
    id: 26,
    nombre: "Gerberas",
    categoria: "ramos",
    etiqueta: "Flores",
    descripcion: "Color y alegría para tus arreglos.",
    precio: null,
    imagen: "img/gerbera.jpg",
    alt: "Gerberas"
  },
  {
    id: 27,
    nombre: "Corona floral 150",
    categoria: "condolencias",
    etiqueta: "Homenaje",
    descripcion: "Un homenaje floral respetuoso.",
    precio: 150000,
    imagen: "img/corona150.jpg",
    alt: "Corona floral referencia 150"
  },
  {
    id: 28,
    nombre: "Chocolates 4",
    categoria: "complementos",
    etiqueta: "Complemento",
    descripcion: "Un dulce detalle para acompañar tus flores.",
    precio: null,
    imagen: "img/chocolates4.jpg",
    alt: "Chocolates para complementar un regalo"
  },
  {
    id: 29,
    nombre: "Chocolates 8",
    categoria: "complementos",
    etiqueta: "Complemento",
    descripcion: "Agrega un detalle dulce a tu pedido.",
    precio: null,
    imagen: "img/chocolates8.jpg",
    alt: "Caja de chocolates"
  },
  {
    id: 30,
    nombre: "Chocolates 40",
    categoria: "complementos",
    etiqueta: "Complemento",
    descripcion: "Consulta las opciones de chocolates disponibles.",
    precio: null,
    imagen: "img/chocolates40.jpg",
    alt: "Chocolates para regalo"
  }
];

// Convierte un precio numérico en pesos colombianos.
function formatearPrecio(precio) {
  if (precio === null || precio === undefined || precio <= 0) {
    return "Consultar precio";
  }

  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(precio);
}

// Crea un enlace de WhatsApp con mensaje prellenado.
function crearEnlaceWhatsApp(mensaje) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

// Construye una tarjeta de producto.
function crearTarjeta(producto) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "product-card";

  const imagenContenedor = document.createElement("div");
  imagenContenedor.className = "product-image";

  const imagen = document.createElement("img");
  imagen.src = producto.imagen;
  imagen.alt = producto.alt;
  imagen.loading = "lazy";

  // Si falta la imagen, intenta mostrar una rosa rosada.
  imagen.onerror = () => {
    imagen.onerror = null;
    imagen.src = "img/rosarosada.jpg";
    imagen.alt = `${producto.alt}. Imagen alternativa`;
  };

  const etiqueta = document.createElement("span");
  etiqueta.className = "product-category";
  etiqueta.textContent = producto.etiqueta;

  imagenContenedor.append(imagen, etiqueta);

  const informacion = document.createElement("div");
  informacion.className = "product-info";

  const nombre = document.createElement("h3");
  nombre.textContent = producto.nombre;

  const descripcion = document.createElement("p");
  descripcion.textContent = producto.descripcion;

  const inferior = document.createElement("div");
  inferior.className = "product-bottom";

  const precio = document.createElement("span");
  precio.className = "product-price";
  precio.textContent = formatearPrecio(producto.precio);

  const boton = document.createElement("a");
  boton.className = "product-order";
  boton.textContent = "Pedir por WhatsApp ↗";

  boton.href = crearEnlaceWhatsApp(
    `Hola, Momentos Únicos. Me interesa "${producto.nombre}". ¿Me confirman disponibilidad, precio y opciones de entrega?`
  );

  boton.target = "_blank";
  boton.rel = "noopener noreferrer";
  boton.setAttribute(
    "aria-label",
    `Consultar ${producto.nombre} por WhatsApp`
  );

  inferior.append(precio, boton);
  informacion.append(nombre, descripcion, inferior);
  tarjeta.append(imagenContenedor, informacion);

  return tarjeta;
}

// Categoría seleccionada actualmente.
let categoriaActiva = "todos";

// Muestra productos según la categoría y el texto de búsqueda.
function mostrarProductos() {
  const contenedor = document.querySelector("#product-grid");

  if (!contenedor) return;

  const busqueda = (
    document.querySelector("#product-search")?.value || ""
  ).trim().toLocaleLowerCase("es");

  const seleccionados = productos.filter(producto => {
    const coincideCategoria =
      categoriaActiva === "todos" ||
      producto.categoria === categoriaActiva;

    const texto = (
      `${producto.nombre} ${producto.descripcion} ` +
      `${producto.categoria} ${producto.etiqueta}`
    ).toLocaleLowerCase("es");

    return coincideCategoria && texto.includes(busqueda);
  });

  contenedor.replaceChildren();

  if (seleccionados.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.className = "empty-results";
    mensaje.textContent =
      "No encontramos productos con esa búsqueda. " +
      "Prueba otra palabra o escríbenos por WhatsApp.";

    contenedor.appendChild(mensaje);
    return;
  }

  seleccionados.forEach(producto => {
    contenedor.appendChild(crearTarjeta(producto));
  });
}

// Activa los filtros y el buscador.
function configurarFiltros() {
  document.querySelectorAll(".filter").forEach(boton => {
    boton.addEventListener("click", () => {
      categoriaActiva = boton.dataset.filter || "todos";

      document.querySelectorAll(".filter").forEach(filtro => {
        const activo = filtro === boton;

        filtro.classList.toggle("active", activo);
        filtro.setAttribute("aria-pressed", String(activo));
      });

      mostrarProductos();
    });
  });

  document
    .querySelector("#product-search")
    ?.addEventListener("input", mostrarProductos);
}

// Menú hamburguesa para teléfonos.
function configurarMenu() {
  const boton = document.querySelector("#menu-toggle");
  const navegacion = document.querySelector("#main-nav");

  if (!boton || !navegacion) return;

  const cerrar = () => {
    navegacion.classList.remove("open");
    boton.setAttribute("aria-expanded", "false");
    boton.setAttribute("aria-label", "Abrir menú");
  };

  boton.addEventListener("click", () => {
    const abierto = boton.getAttribute("aria-expanded") === "true";

    boton.setAttribute("aria-expanded", String(!abierto));
    boton.setAttribute(
      "aria-label",
      abierto ? "Abrir menú" : "Cerrar menú"
    );

    navegacion.classList.toggle("open", !abierto);
  });

  navegacion.querySelectorAll("a").forEach(enlace => {
    enlace.addEventListener("click", cerrar);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) cerrar();
  });
}

// Animaciones al entrar en pantalla.
function configurarAnimaciones() {
  const elementos = document.querySelectorAll(".reveal");

  // Compatibilidad con navegadores sin IntersectionObserver.
  if (!("IntersectionObserver" in window)) {
    elementos.forEach(elemento => elemento.classList.add("visible"));
    return;
  }

  const observador = new IntersectionObserver(
    (entradas, observer) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observer.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elementos.forEach(elemento => observador.observe(elemento));
}

// Al elegir una ocasión, filtra el catálogo y lo muestra.
function configurarOcasiones() {
  document.querySelectorAll("[data-occasion]").forEach(boton => {
    boton.addEventListener("click", () => {
      categoriaActiva = boton.dataset.occasion || "todos";

      document.querySelectorAll(".filter").forEach(filtro => {
        const activo = filtro.dataset.filter === categoriaActiva;

        filtro.classList.toggle("active", activo);
        filtro.setAttribute("aria-pressed", String(activo));
      });

      const buscador = document.querySelector("#product-search");
      if (buscador) buscador.value = "";

      mostrarProductos();
      document.querySelector("#catalogo")?.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
}

// Actualiza el año del pie de página.
function configurarAnio() {
  const elemento = document.querySelector("#current-year");

  if (elemento) {
    elemento.textContent = new Date().getFullYear();
  }
}

// ==========================================
// DISEÑADOR INTERACTIVO DE RAMOS
// ==========================================

// Precios de referencia por flor.
// Confirma estos valores con la floristería.
const floresDisenador = [
  {
    nombre: "Rosa roja",
    archivo: "rosaroja.jpg",
    precio: 5000,
    color: "#bd4058"
  },
  {
    nombre: "Rosa rosada",
    archivo: "rosarosada.jpg",
    precio: 5000,
    color: "#d58b9d"
  },
  {
    nombre: "Rosa blanca",
    archivo: "rosablanca.jpg",
    precio: 5000,
    color: "#f3e9df"
  },
  {
    nombre: "Girasol",
    archivo: "girasol.jpg",
    precio: 7000,
    color: "#e8b941"
  },
  {
    nombre: "Lirio",
    archivo: "lirio.jpg",
    precio: 8000,
    color: "#c6b3d8"
  },
  {
    nombre: "Margarita",
    archivo: "margarita.jpg",
    precio: 3500,
    color: "#f6f0df"
  },
  {
    nombre: "Clavel",
    archivo: "clavel.jpg",
    precio: 3000,
    color: "#c97988"
  },
  {
    nombre: "Gerbera",
    archivo: "gerbera.jpg",
    precio: 4500,
    color: "#e8a0a6"
  }
];

// Cantidad elegida de cada flor.
const cantidadesFlores = {};

// Imágenes que se utilizarán en el dibujo del ramo.
const imagenesDisenador = {};

// Multiplicadores por tamaño.
const tamanosRamo = {
  pequeno: { nombre: "Pequeño", factor: 1 },
  mediano: { nombre: "Mediano", factor: 1.15 },
  grande: { nombre: "Grande", factor: 1.3 }
};

function inicializarDisenador() {
  const opciones = document.querySelector("#flower-options");
  const canvas = document.querySelector("#bouquet-canvas");

  if (!opciones || !canvas) return;

  const ctx = canvas.getContext("2d");

  // Genera una fila por cada tipo de flor.
  floresDisenador.forEach(flor => {
    cantidadesFlores[flor.nombre] = 0;

    const imagen = new Image();

    imagen.onload = dibujarComposicion;

    imagen.onerror = () => {
      console.warn(`No se pudo cargar img/${flor.archivo}`);
    };

    imagen.src = `img/${flor.archivo}`;
    imagenesDisenador[flor.nombre] = imagen;

    const fila = document.createElement("div");
    fila.className = "flower-option";

    const miniatura = document.createElement("img");
    miniatura.src = `img/${flor.archivo}`;
    miniatura.alt = flor.nombre;
    miniatura.loading = "lazy";

    miniatura.onerror = () => {
      miniatura.onerror = null;
      miniatura.src = "img/rosarosada.jpg";
    };

    const detalle = document.createElement("div");

    const nombre = document.createElement("strong");
    nombre.textContent = flor.nombre;

    const precio = document.createElement("small");
    precio.textContent =
      `${formatearPrecio(flor.precio)} por unidad (referencia)`;

    detalle.append(nombre, precio);

    const contador = document.createElement("div");
    contador.className = "flower-counter";

    const menos = document.createElement("button");
    menos.type = "button";
    menos.textContent = "−";
    menos.setAttribute("aria-label", `Quitar ${flor.nombre}`);

    const cantidad = document.createElement("output");
    cantidad.textContent = "0";
    cantidad.setAttribute("aria-label", `Cantidad de ${flor.nombre}`);

    const mas = document.createElement("button");
    mas.type = "button";
    mas.textContent = "+";
    mas.setAttribute("aria-label", `Añadir ${flor.nombre}`);

    // Resta una flor, sin permitir cantidades negativas.
    menos.addEventListener("click", () => {
      cantidadesFlores[flor.nombre] = Math.max(
        0,
        cantidadesFlores[flor.nombre] - 1
      );

      cantidad.textContent = cantidadesFlores[flor.nombre];
      actualizarDisenador();
    });

    // Añade una flor, con un máximo de 50 por variedad.
    mas.addEventListener("click", () => {
      if (cantidadesFlores[flor.nombre] >= 50) return;

      cantidadesFlores[flor.nombre]++;
      cantidad.textContent = cantidadesFlores[flor.nombre];

      actualizarDisenador();
    });

    contador.append(menos, cantidad, mas);
    fila.append(miniatura, detalle, contador);
    opciones.appendChild(fila);
  });

  // Actualiza el diseño cuando cambian las opciones.
  document
    .querySelector("#bouquet-type")
    .addEventListener("change", actualizarDisenador);

  document
    .querySelector("#bouquet-size")
    .addEventListener("change", actualizarDisenador);

  document
    .querySelector("#bouquet-wrap")
    .addEventListener("change", actualizarDisenador);

  document
    .querySelector("#send-bouquet")
    .addEventListener("click", enviarCotizacion);

  document
    .querySelector("#download-bouquet")
    .addEventListener("click", descargarDiseno);

  // Calcula cantidades, subtotal, presentación y total estimado.
  function calcularTotal() {
    const totalFlores = floresDisenador.reduce(
      (suma, flor) => suma + cantidadesFlores[flor.nombre],
      0
    );

    const subtotal = floresDisenador.reduce(
      (suma, flor) =>
        suma + cantidadesFlores[flor.nombre] * flor.precio,
      0
    );

    const factor =
      tamanosRamo[document.querySelector("#bouquet-size").value].factor;

    const envoltura = Number(
      document.querySelector("#bouquet-wrap").value
    );

    const tipo = document.querySelector("#bouquet-type").value;
    const presentacionMesa = tipo === "mesa" ? 12000 : 0;

    return {
      totalFlores,
      subtotal,
      factor,
      envoltura,
      presentacionMesa,
      total: Math.round(
        subtotal * factor + envoltura + presentacionMesa
      )
    };
  }

  // Actualiza el resumen y la vista previa.
  function actualizarDisenador() {
    const datos = calcularTotal();
    const tipo = document.querySelector("#bouquet-type").value;

    const tamano =
      tamanosRamo[document.querySelector("#bouquet-size").value].nombre;

    document.querySelector("#flower-count").textContent =
      datos.totalFlores;

    document.querySelector("#bouquet-price").textContent =
      formatearPrecio(datos.total);

    document.querySelector("#builder-message").textContent =
      datos.totalFlores === 0
        ? "Selecciona flores para comenzar."
        : "Estimación de referencia; falta confirmar disponibilidad y precio final.";

    document.querySelector("#preview-description").textContent =
      `${tipo === "mano" ? "Ramo de mano" : "Arreglo de mesa"} · ` +
      `${tamano} · ${datos.totalFlores} flores seleccionadas`;

    dibujarComposicion();
  }

  // Dibuja una representación ilustrativa en el canvas.
  function dibujarComposicion() {
    const datos = calcularTotal();
    const tipo = document.querySelector("#bouquet-type").value;

    const ancho = canvas.width;
    const alto = canvas.height;

    ctx.clearRect(0, 0, ancho, alto);

    ctx.fillStyle = "#fbf7f1";
    ctx.fillRect(0, 0, ancho, alto);

    ctx.textAlign = "center";
    ctx.fillStyle = "#435541";
    ctx.font = "30px Georgia";
    ctx.fillText("Momentos Únicos", ancho / 2, 48);

    ctx.fillStyle = "#77736c";
    ctx.font = "18px Arial";
    ctx.fillText(
      tipo === "mano"
        ? "Mi ramo personalizado"
        : "Mi arreglo de mesa",
      ancho / 2,
      78
    );

    // Tallos y envoltura para el ramo de mano.
    if (tipo === "mano") {
      ctx.strokeStyle = "#71836c";
      ctx.lineWidth = 5;

      for (let i = 0; i < 9; i++) {
        ctx.beginPath();
        ctx.moveTo(350, 590);
        ctx.lineTo(180 + i * 43, 280 + (i % 3) * 12);
        ctx.stroke();
      }

      ctx.fillStyle = "#d58b9d";
      ctx.beginPath();
      ctx.moveTo(205, 420);
      ctx.lineTo(495, 420);
      ctx.lineTo(385, 665);
      ctx.lineTo(315, 665);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "#b86e85";
      ctx.fillRect(315, 625, 70, 25);

    } else {
      // Base ilustrativa para arreglo de mesa.
      ctx.fillStyle = "#d6b9a4";
      ctx.beginPath();
      ctx.ellipse(350, 590, 170, 45, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#b99b85";
      ctx.fillRect(210, 510, 280, 80);

      ctx.fillStyle = "#71836c";
      ctx.beginPath();
      ctx.ellipse(350, 510, 150, 40, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // Coloca las imágenes de las flores seleccionadas.
    const seleccionadas = floresDisenador.filter(
      flor => cantidadesFlores[flor.nombre] > 0
    );

    let indice = 0;

    seleccionadas.forEach(flor => {
      const imagen = imagenesDisenador[flor.nombre];

      for (
        let i = 0;
        i < cantidadesFlores[flor.nombre] && indice < 35;
        i++
      ) {
        const columna = indice % 5;
        const fila = Math.floor(indice / 5);

        const x = 155 + columna * 82 + (fila % 2) * 18;
        const y = 135 + fila * 62;

        if (imagen && imagen.complete && imagen.naturalWidth > 0) {
          ctx.save();

          ctx.beginPath();
          ctx.arc(x + 31, y + 27, 29, 0, Math.PI * 2);
          ctx.clip();

          ctx.drawImage(imagen, x, y, 62, 54);
          ctx.restore();

        } else {
          // Círculo de color si la imagen no está disponible.
          ctx.fillStyle = flor.color;
          ctx.beginPath();
          ctx.arc(x + 31, y + 27, 20, 0, Math.PI * 2);
          ctx.fill();
        }

        indice++;
      }
    });

    if (indice === 0) {
      ctx.fillStyle = "#77736c";
      ctx.font = "20px Arial";
      ctx.fillText("Tus flores aparecerán aquí", ancho / 2, 260);
    }

    // Precio estimado dentro de la imagen descargable.
    ctx.fillStyle = "#435541";
    ctx.font = "bold 23px Arial";
    ctx.fillText(formatearPrecio(datos.total), ancho / 2, 710);

    ctx.fillStyle = "#77736c";
    ctx.font = "15px Arial";
    ctx.fillText(
      "Cotización estimada · Sujeta a confirmación",
      ancho / 2,
      740
    );
  }

  // Resume el diseño seleccionado para enviarlo por WhatsApp.
  function obtenerResumen() {
    return {
      tipo: document.querySelector("#bouquet-type").value,

      tamano:
        tamanosRamo[document.querySelector("#bouquet-size").value].nombre,

      seleccion: floresDisenador
        .filter(flor => cantidadesFlores[flor.nombre] > 0)
        .map(
          flor =>
            `${flor.nombre}: ${cantidadesFlores[flor.nombre]}`
        )
        .join("\n")
    };
  }

  // Abre WhatsApp con los detalles de la cotización.
  function enviarCotizacion() {
    const datos = calcularTotal();
    const resumen = obtenerResumen();

    if (datos.totalFlores === 0) {
      alert("Primero selecciona al menos una flor.");
      return;
    }

    const mensaje = [
      "Hola, Momentos Únicos. Quiero cotizar un diseño personalizado.",
      "",
      `Tipo: ${resumen.tipo === "mano" ? "Ramo de mano" : "Arreglo de mesa"}`,
      `Tamaño: ${resumen.tamano}`,
      "Flores seleccionadas:",
      resumen.seleccion,
      "",
      `Total de flores: ${datos.totalFlores}`,
      `Cotización estimada: ${formatearPrecio(datos.total)}`,
      "",
      "Adjuntaré la imagen descargada del diseño. Por favor confirmen disponibilidad, precio final y entrega."
    ].join("\n");

    window.open(
      crearEnlaceWhatsApp(mensaje),
      "_blank",
      "noopener,noreferrer"
    );
  }

  // Descarga la vista previa como archivo PNG.
  function descargarDiseno() {
    if (calcularTotal().totalFlores === 0) {
      alert("Selecciona al menos una flor antes de descargar el diseño.");
      return;
    }

    const enlace = document.createElement("a");
    enlace.download = "diseno-momentos-unicos.png";
    enlace.href = canvas.toDataURL("image/png");
    enlace.click();
  }

  // Estado inicial del diseñador.
  actualizarDisenador();
}

// ==========================================
// INICIALIZACIÓN GENERAL
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos();
  configurarFiltros();
  configurarMenu();
  configurarAnimaciones();
  configurarOcasiones();
  configurarAnio();
  inicializarDisenador();
});
