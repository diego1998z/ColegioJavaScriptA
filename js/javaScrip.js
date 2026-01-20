// Unidad 1: constantes y tipos de datos (number) para configurar reglas
const COSTO_URGENCIA = 20;

// Unidad 1: arreglos de objetos, tipos de datos y uso de const
const tramites = [
    {
        id: 1,
        titulo: "Licencia de funcionamiento",
        requisitos: ["Solicitud simple", "Copia de DNI", "RUC activo"],
        plazoDias: 7,
        costo: 120,
        area: "Desarrollo economico"
    },
    {
        id: 2,
        titulo: "Duplicado de licencia de funcionamiento",
        requisitos: ["Solicitud simple", "Pago de tasa"],
        plazoDias: 3,
        costo: 30,
        area: "Desarrollo economico"
    },
    {
        id: 3,
        titulo: "Certificado de asignacion de placa",
        requisitos: ["Solicitud simple", "Pago de tasa", "Copia de DNI"],
        plazoDias: 5,
        costo: 45,
        area: "Transporte"
    },
    {
        id: 4,
        titulo: "Elaboracion de plano de ubicacion",
        requisitos: ["Solicitud simple", "Copia de DNI", "Croquis del predio"],
        plazoDias: 10,
        costo: 80,
        area: "Catastro"
    },
    {
        id: 5,
        titulo: "Inspeccion ocular simple",
        requisitos: ["Solicitud simple", "Recibo de pago"],
        plazoDias: 4,
        costo: 60,
        area: "Fiscalizacion"
    },
    {
        id: 6,
        titulo: "Copia certificada de nacimiento",
        requisitos: ["Solicitud simple", "DNI del solicitante"],
        plazoDias: 1,
        costo: 15,
        area: "Registro civil"
    }
];

// Unidad 1: arreglos de objetos y propiedades
const servicios = [
    {
        id: 1,
        titulo: "Reconocimiento de paternidad o maternidad",
        requisitos: ["DNI de padres", "Declaracion jurada"],
        plazoDias: 2,
        costo: 0,
        area: "Registro civil"
    },
    {
        id: 2,
        titulo: "Inscripcion de predio",
        requisitos: ["Solicitud simple", "Titulo de propiedad", "Recibo de pago"],
        plazoDias: 8,
        costo: 90,
        area: "Catastro"
    },
    {
        id: 3,
        titulo: "Registro de recien nacidos",
        requisitos: ["Certificado de nacido vivo", "DNI de padres"],
        plazoDias: 1,
        costo: 0,
        area: "Registro civil"
    }
];

// Unidad 1: objetos en arreglos y operadores numericos
const tarifas = [
    { concepto: "Licencia de funcionamiento", costo: 120 },
    { concepto: "Duplicado de licencia", costo: 30 },
    { concepto: "Inspeccion ocular simple", costo: 60 },
    { concepto: "Copia certificada", costo: 15 }
];

// Unidad 1: arreglo bidimensional y strings
const horarios = [
    ["Lunes a Viernes", "08:00 - 16:00"],
    ["Sabado", "09:00 - 12:00"]
];

// Unidad 1: declaraciones con var y let
var contadorSolicitudes = 0;
let ultimoRegistro = 2000;

// Unidad 1: spread operator, arrow functions y map
const tramitesConTipo = tramites.map((item) => ({ ...item, tipo: "tramite" }));
const serviciosConTipo = servicios.map((item) => ({ ...item, tipo: "servicio" }));
const catalogo = [...tramitesConTipo, ...serviciosConTipo];

// Unidad 1: objetos con metodos, this y bucle while
const sistemaExpedientes = {
    prefijo: "MT",
    ultimoCodigo: 1200,
    lista: [
        { codigo: "MT-1198", dni: "44556677", tramite: "Licencia de funcionamiento", estado: "En revision", fecha: "2026-01-10" },
        { codigo: "MT-1199", dni: "77889911", tramite: "Inscripcion de predio", estado: "Observado", fecha: "2026-01-12" },
        { codigo: "MT-1200", dni: "12345678", tramite: "Copia certificada de nacimiento", estado: "Aprobado", fecha: "2026-01-13" }
    ],
    registrar: function (datos) {
        this.ultimoCodigo += 1;
        const codigo = this.prefijo + "-" + this.ultimoCodigo;
        const expediente = {
            codigo,
            dni: datos["dni"],
            tramite: datos.tramite,
            estado: "En revision",
            fecha: new Date().toISOString().slice(0, 10)
        };
        this.lista.push(expediente);
        return expediente;
    },
    buscar: function (codigo, dni) {
        let encontrado = null;
        let i = 0;
        while (i < this.lista.length) {
            const actual = this.lista[i];
            if (actual.codigo === codigo && actual.dni === dni) {
                encontrado = actual;
                break;
            }
            i += 1;
        }
        return encontrado;
    }
};

// Unidad 1: tipos de datos (number, bigint, string, boolean, null, undefined, object, symbol)
const idSimbolo = Symbol("expediente");
const tiposDemo = {
    numero: 120,
    bigInt: 9007199254740993n,
    texto: "Motupe",
    booleano: true,
    nulo: null,
    indefinido: undefined,
    objeto: { area: "Mesa de partes" },
    simbolo: idSimbolo
};

// Unidad 1: funciones con retorno, operadores y template literals
const formatearCosto = (monto) => {
    return monto === 0 ? "Gratis" : `S/ ${monto.toFixed(2)}`;
};

// Unidad 1: map, join y manipulacion de cadenas
const construirRequisitos = (lista) => {
    return lista.map((req) => `<li>${req}</li>`).join("");
};

// Unidad 1: funcion tradicional, RegExp y replace
function limpiarEspacios(texto) {
    return texto.replace(/\s+/g, " ").trim();
}

// Unidad 1: replaceAll, forEach y operadores de asignacion
const normalizarTexto = (texto) => {
    const reemplazos = [
        ["muni", "municipalidad"],
        ["doc", "documento"],
        ["tramite", "tramite municipal"]
    ];
    let resultado = texto;
    reemplazos.forEach((par) => {
        resultado = resultado.replaceAll(par[0], par[1]);
    });
    return resultado;
};

// Unidad 1: funciones personalizadas y substr/indexOf
const left = (texto, cantidad) => texto.substr(0, cantidad);
const right = (texto, cantidad) => texto.substr(texto.length - cantidad);
const contains = (texto, termino) => texto.indexOf(termino) !== -1;

// Unidad 1: salidas en DOM, template literals y map
const renderCards = (lista, containerId, tipo) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (lista.length === 0) {
        container.innerHTML = '<div class="empty">No hay resultados para la busqueda.</div>';
        return;
    }

    container.innerHTML = lista
        .map((item, index) => {
            return `
                <article class="info-card reveal" style="--delay:${(index + 1) * 0.08}s">
                    <div class="card-top">
                        <span class="card-check" aria-hidden="true"></span>
                        <span class="card-tag">${tipo.toUpperCase()}</span>
                    </div>
                    <h3>${item.titulo}</h3>
                    <div class="card-section">
                        <p class="card-label">Requisitos</p>
                        <ul>${construirRequisitos(item.requisitos)}</ul>
                    </div>
                    <div class="card-meta">
                        <span>Plazo: ${item.plazoDias} dias habiles</span>
                        <span>Costo: ${formatearCosto(item.costo)}</span>
                    </div>
                    <button type="button" class="card-btn" data-tipo="${tipo}" data-id="${item.id}">
                        Ver requisitos
                    </button>
                </article>
            `;
        })
        .join("");
};

// Unidad 1: salidas en DOM y map
const renderTarifas = (lista) => {
    const container = document.getElementById("tarifas-container");
    if (!container) return;

    container.innerHTML = lista
        .map((item) => {
            return `
                <div class="tarifa-card">
                    <h3>${item.concepto}</h3>
                    <p>${formatearCosto(item.costo)}</p>
                </div>
            `;
        })
        .join("");
};

// Unidad 1: bucle for, operadores y salida en DOM
const renderStats = () => {
    const statsContainer = document.getElementById("stats-container");
    if (!statsContainer) return;

    let totalCostos = 0;
    for (let i = 0; i < catalogo.length; i += 1) {
        totalCostos += catalogo[i].costo;
    }

    const promedio = catalogo.length ? Math.round(totalCostos / catalogo.length) : 0;
    const horarioTexto = horarios.map((turno) => turno.join(": ")).join(" | ");

    statsContainer.innerHTML = `
        <div class="stat-card">
            <span>${tramites.length}</span>
            <p>Tramites disponibles</p>
        </div>
        <div class="stat-card">
            <span>${servicios.length}</span>
            <p>Servicios disponibles</p>
        </div>
        <div class="stat-card">
            <span>${formatearCosto(promedio)}</span>
            <p>Costo promedio</p>
        </div>
        <p class="stat-note">Horario: ${horarioTexto}</p>
    `;
};

// Unidad 1: map, DOM y funciones reutilizables
const llenarSelectCatalogo = (selectId) => {
    const select = document.getElementById(selectId);
    if (!select) return;

    const opciones = catalogo.map((item) => {
        return `<option value="${item.tipo}-${item.id}">${item.titulo}</option>`;
    });

    select.innerHTML = '<option value="">Seleccione una opcion</option>' + opciones.join("");
};

// Unidad 1: funciones y reutilizacion
const llenarSelects = () => {
    llenarSelectCatalogo("tramite-select");
    llenarSelectCatalogo("for-tramite");
};

// Unidad 1: split, Number, condicionales y arreglos
const obtenerItemPorClave = (clave) => {
    const partes = clave.split("-");
    const tipo = partes[0];
    const id = Number(partes[1]);

    if (!tipo || Number.isNaN(id)) {
        return null;
    }

    const lista = tipo === "tramite" ? tramitesConTipo : serviciosConTipo;
    return lista.find((item) => item.id === id) || null;
};

// Unidad 1: manipulacion de DOM como salida
const mostrarDetalleSeleccion = (item) => {
    const detalle = document.getElementById("detalle-seleccion");
    if (!detalle) return;

    if (!item) {
        detalle.textContent = "Seleccione un tramite o servicio.";
        return;
    }

    detalle.innerHTML = `
        <strong>${item.titulo}</strong><br>
        Area: ${item.area}<br>
        Plazo: ${item.plazoDias} dias habiles<br>
        Costo base: ${formatearCosto(item.costo)}
    `;
};

// Unidad 1: concatenacion, template literals, RegExp, search/match, replace, encodeURI/decodeURI y try/catch
const generarSolicitud = () => {
    const nombreInput = document.getElementById("sol-nombre");
    const dniInput = document.getElementById("sol-dni");
    const asuntoInput = document.getElementById("sol-asunto");
    const detalleInput = document.getElementById("sol-detalle");
    const normalizarCheck = document.getElementById("sol-normalizar");
    const buscarInput = document.getElementById("sol-buscar");
    const reemplazarInput = document.getElementById("sol-reemplazar");
    const porInput = document.getElementById("sol-por");
    const resumenInput = document.getElementById("sol-resumen");
    const salida = document.getElementById("solicitud-salida");
    const analisis = document.getElementById("solicitud-analisis");
    const uri = document.getElementById("solicitud-uri");

    if (!nombreInput || !dniInput || !asuntoInput || !detalleInput || !salida || !analisis || !uri) {
        return;
    }

    const nombre = nombreInput.value.trim();
    const dni = dniInput.value.trim();
    const asunto = asuntoInput.value.trim();
    const detalle = detalleInput.value.trim();
    const normalizar = normalizarCheck ? normalizarCheck.checked : false;
    const buscar = buscarInput ? buscarInput.value.trim() : "";
    const reemplazar = reemplazarInput ? reemplazarInput.value.trim() : "";
    const por = porInput ? porInput.value.trim() : "";
    const resumenLimite = resumenInput ? Number(resumenInput.value) : 120;

    if (!nombre || !asunto || !detalle || !esDniValido(dni)) {
        analisis.textContent = "Complete nombre, asunto, detalle y DNI valido.";
        salida.textContent = "Faltan datos para generar la solicitud.";
        uri.textContent = "";
        return;
    }

    let detalleLimpio = limpiarEspacios(detalle);
    if (normalizar) {
        detalleLimpio = normalizarTexto(detalleLimpio);
    }

    detalleLimpio = detalleLimpio.replaceAll("  ", " ");

    let coincidencias = [];
    let indice = -1;
    let detalleReemplazado = detalleLimpio;
    let regexValido = true;

    if (buscar) {
        try {
            const regex = new RegExp(buscar, "gi");
            indice = detalleLimpio.search(regex);
            coincidencias = detalleLimpio.match(regex) || [];
            if (reemplazar && por) {
                detalleReemplazado = detalleLimpio.replace(regex, por);
            }
        } catch (error) {
            regexValido = false;
        }
    }

    const saludo = "Senores ".concat("Municipalidad Distrital de Motupe");
    let cuerpo = "Yo, " + nombre + ", identificado con DNI " + dni + ", ";
    cuerpo += "presento la siguiente solicitud.";
    const lineaAsunto = `Asunto: ${asunto}`;
    let solicitud = saludo + "\n" + cuerpo;
    solicitud += "\n" + lineaAsunto;
    solicitud += "\nDetalle: " + detalleReemplazado;

    const resumenSeguro = Number.isSafeInteger(resumenLimite) && resumenLimite > 20 ? resumenLimite : 120;
    const resumen = detalleReemplazado.substr(0, resumenSeguro);
    const izquierda = left(detalleReemplazado, 30);
    const derecha = right(detalleReemplazado, 30);
    const contiene = buscar ? contains(detalleReemplazado.toLowerCase(), buscar.toLowerCase()) : false;

    salida.textContent = solicitud + "\n\nResumen: " + resumen;
    if (!regexValido) {
        analisis.textContent = "Expresion regular invalida para la busqueda.";
    } else {
        analisis.innerHTML = `
            Coincidencias: ${coincidencias.length}<br>
            Indice: ${indice}<br>
            Contiene: ${contiene}<br>
            Izquierda: ${izquierda}<br>
            Derecha: ${derecha}
        `;
    }

    const urlSolicitud = `https://munimotupe.gob.pe/solicitud?asunto=${encodeURI(asunto)}`;
    uri.textContent = "URL generada: " + decodeURI(urlSolicitud);
    contadorSolicitudes += 1;
};

// Unidad 1: RegExp, if/else y operadores logicos
const validarFormulario = (datos) => {
    const errores = [];
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo);
    const telefonoValido = /^\d{9}$/.test(datos.telefono);

    if (!datos.nombre || datos.nombre.length < 3) {
        errores.push("Ingrese un nombre valido.");
    }

    if (!esDniValido(datos.dni)) {
        errores.push("DNI invalido (8 digitos).");
    }

    if (!correoValido) {
        errores.push("Correo invalido.");
    } else if (datos.correo.length > 60) {
        errores.push("Correo muy largo.");
    }

    if (!telefonoValido) {
        errores.push("Telefono invalido (9 digitos).");
    }

    if (!datos.direccion || datos.direccion.length < 6) {
        errores.push("Direccion incompleta.");
    }

    if (!datos.tramite) {
        errores.push("Seleccione un tramite.");
    }

    if (!datos.acepto) {
        errores.push("Debe aceptar la declaracion.");
    }

    return errores;
};

// Unidad 1: objetos, metodos, JSON y operador this
const registrarFormulario = () => {
    const nombreInput = document.getElementById("for-nombre");
    const dniInput = document.getElementById("for-dni");
    const correoInput = document.getElementById("for-correo");
    const telefonoInput = document.getElementById("for-telefono");
    const direccionInput = document.getElementById("for-direccion");
    const tramiteSelect = document.getElementById("for-tramite");
    const aceptoCheck = document.getElementById("for-acepto");
    const erroresBox = document.getElementById("formulario-errores");
    const resumenBox = document.getElementById("formulario-resumen");

    if (!nombreInput || !dniInput || !correoInput || !telefonoInput || !direccionInput || !tramiteSelect || !aceptoCheck) {
        return;
    }

    const itemSeleccionado = obtenerItemPorClave(tramiteSelect.value);
    const datos = {
        nombre: nombreInput.value.trim(),
        dni: dniInput.value.trim(),
        correo: correoInput.value.trim(),
        telefono: telefonoInput.value.trim(),
        direccion: direccionInput.value.trim(),
        tramite: itemSeleccionado ? itemSeleccionado.titulo : "",
        acepto: aceptoCheck.checked
    };

    const errores = validarFormulario(datos);
    if (erroresBox) {
        erroresBox.textContent = errores.length ? errores.join(" | ") : "Solicitud registrada correctamente.";
    }

    if (errores.length) {
        if (resumenBox) {
            resumenBox.textContent = "Complete el formulario para ver el resumen.";
        }
        return;
    }

    const expediente = sistemaExpedientes.registrar(datos);
    ultimoRegistro += 1;

    const registroCompleto = {
        registro: ultimoRegistro,
        codigo: expediente.codigo,
        fecha: expediente.fecha,
        estado: expediente.estado,
        nombre: datos.nombre,
        dni: datos["dni"],
        tramite: datos.tramite
    };

    registroCompleto[idSimbolo] = "interno";

    if (resumenBox) {
        resumenBox.textContent = JSON.stringify(registroCompleto, null, 2);
    }

    renderSeguimientoLista();
};

// Unidad 1: forEach, slice y salida DOM
const renderSeguimientoLista = () => {
    const container = document.getElementById("seguimiento-lista");
    if (!container) return;

    let html = "";
    sistemaExpedientes.lista.slice(-6).forEach((item) => {
        html += `<span class="pill">${item.codigo} - ${item.estado}</span>`;
    });

    container.innerHTML = html || '<span class="pill">Sin registros</span>';
};

// Unidad 1: condicionales, funciones y salida DOM
const buscarSeguimiento = () => {
    const codigoInput = document.getElementById("seg-codigo");
    const dniInput = document.getElementById("seg-dni");
    const resultado = document.getElementById("seguimiento-resultado");

    if (!codigoInput || !dniInput || !resultado) {
        return;
    }

    const codigo = codigoInput.value.trim();
    const dni = dniInput.value.trim();

    if (!codigo || !esDniValido(dni)) {
        resultado.textContent = "Ingrese codigo y DNI valido.";
        return;
    }

    const encontrado = sistemaExpedientes.buscar(codigo, dni);
    if (!encontrado) {
        resultado.textContent = "No se encontro el expediente.";
        return;
    }

    resultado.innerHTML = `
        Estado: ${encontrado.estado}<br>
        Tramite: ${encontrado.tramite}<br>
        Fecha: ${encontrado.fecha}
    `;
};

// Unidad 1: Number.isSafeInteger (IEEE-754) y boolean
const esDniValido = (dni) => {
    const limpio = dni.trim();
    const numero = Number(limpio);
    return limpio.length === 8 && Number.isSafeInteger(numero);
};

// Unidad 1: try/catch, condicionales, alert y console
const consultarTramite = () => {
    const dniInput = document.getElementById("dni-input");
    const select = document.getElementById("tramite-select");
    const urgenteCheck = document.getElementById("urgente-check");
    const resultado = document.getElementById("resultado-consulta");

    if (!dniInput || !select || !urgenteCheck || !resultado) {
        return;
    }

    const dni = dniInput.value.trim();
    const clave = select.value;
    const urgente = urgenteCheck.checked;

    try {
        if (!esDniValido(dni)) {
            throw new Error("DNI invalido. Debe tener 8 numeros.");
        }
        if (!clave) {
            throw new Error("Seleccione un tramite o servicio.");
        }

        const item = obtenerItemPorClave(clave);
        if (!item) {
            throw new Error("No se encontro el tramite solicitado.");
        }

        const costoFinal = item.costo + (urgente ? COSTO_URGENCIA : 0);
        const plazoEstimado = urgente ? Math.max(1, item.plazoDias - 2) : item.plazoDias;

        resultado.innerHTML = `
            Consulta registrada para DNI ${dni}.<br>
            Tramite: ${item.titulo}.<br>
            Plazo estimado: ${plazoEstimado} dias habiles.<br>
            Costo total: ${formatearCosto(costoFinal)}.
        `;

        alert("Consulta registrada para el DNI " + dni);
        console.log("Consulta", JSON.stringify({ dni, tramite: item.titulo, costoFinal, plazoEstimado }));
    } catch (error) {
        resultado.textContent = error.message;
        console.error("Error de consulta:", error.message);
    }
};

// Unidad 1: alert y manejo de cadenas
const mostrarRequisitos = (tipo, id) => {
    const lista = tipo === "tramite" ? tramites : servicios;
    const item = lista.find((entrada) => entrada.id === id);

    if (!item) {
        alert("No se encontro informacion del tramite.");
        return;
    }

    const detalle = "Requisitos: ".concat(item.requisitos.join(", "));
    alert(detalle.toUpperCase().trim());
};

// Unidad 1: eventos (input) y filter
const activarBusqueda = () => {
    const buscador = document.getElementById("busqueda");
    if (!buscador) return;

    buscador.addEventListener("input", () => {
        const termino = buscador.value.trim().toLowerCase();
        const filtrar = (lista) => {
            return lista.filter((item) => item.titulo.toLowerCase().includes(termino));
        };

        renderCards(filtrar(tramites), "tramites-container", "tramite");
        renderCards(filtrar(servicios), "servicios-container", "servicio");
    });
};

// Unidad 1: eventos (click) y manejo de DOM
const activarBotones = () => {
    document.addEventListener("click", (event) => {
        const boton = event.target.closest(".card-btn");
        if (!boton) return;

        const tipo = boton.dataset.tipo;
        const id = Number(boton.dataset.id);
        if (!tipo || Number.isNaN(id)) return;

        mostrarRequisitos(tipo, id);
    });
};

// Unidad 1: evento DOMContentLoaded y ejecucion de funciones
document.addEventListener("DOMContentLoaded", () => {
    const carouselElement = document.querySelector("#carouselExampleDark");
    if (carouselElement && window.bootstrap) {
        new bootstrap.Carousel(carouselElement, {
            interval: 5000,
            ride: "carousel",
            pause: "hover"
        });
    }

    renderCards(tramites, "tramites-container", "tramite");
    renderCards(servicios, "servicios-container", "servicio");
    renderTarifas(tarifas);
    renderStats();
    llenarSelects();
    renderSeguimientoLista();
    activarBusqueda();
    activarBotones();

    const select = document.getElementById("tramite-select");
    const boton = document.getElementById("btn-consultar");
    const botonSolicitud = document.getElementById("btn-solicitud");
    const botonFormulario = document.getElementById("btn-formulario");
    const botonSeguimiento = document.getElementById("btn-seguimiento");

    if (select) {
        select.onchange = () => {
            mostrarDetalleSeleccion(obtenerItemPorClave(select.value));
        };
    }

    if (boton) {
        boton.onclick = consultarTramite;
    }

    if (botonSolicitud) {
        botonSolicitud.onclick = generarSolicitud;
    }

    if (botonFormulario) {
        botonFormulario.onclick = registrarFormulario;
    }

    if (botonSeguimiento) {
        botonSeguimiento.onclick = buscarSeguimiento;
    }

    console.log("Tipos de datos demo", tiposDemo);
    console.log("Pagina cargada correctamente");
});
