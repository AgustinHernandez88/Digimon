const listadoDigimon = document.querySelector(".listado-digimon");
const detalleDigimon = document.querySelector(".detalle-digimon");

async function mostrarListaDigimon() {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');
        const data = await response.json();

        listadoDigimon.innerHTML = "";

        data.forEach(digimon => {
            const card = document.createElement("div");
            card.classList.add("digimon-card");

            card.innerHTML = `
                <h2>${digimon.name}</h2>
                <img src="${digimon.img}" alt="${digimon.name}" id="digimon-image">
                <p>Nivel: ${digimon.level}</p>
            `;

            card.addEventListener("click", () => mostrarDetalleDigimon(digimon));

            listadoDigimon.appendChild(card);
        });
    } catch (error) {
        console.error("Error al obtener la lista de Digimon:", error);
    }
}


function mostrarDetalleDigimon(digimon) {
    detalleDigimon.innerHTML = `
        <h2>${digimon.name}</h2>
        <img src="${digimon.img}" alt="${digimon.name}" id="digimon-image">
        <p>Nivel: ${digimon.level}</p>
    `;

    detalleDigimon.style.display = "block";
}


mostrarListaDigimon();
