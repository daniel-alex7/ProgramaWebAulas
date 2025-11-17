function enviar(event) {
    event.preventDefault();

    let modelo = document.getElementById("modCar").value;
    let fabricante = document.getElementById("fabCar").value;
    let valor = document.getElementById("valor").value;
    let ano = document.getElementById("ano").value;

    // Salvar no localStorage
    localStorage.setItem("modCar", modelo);
    localStorage.setItem("fabCar", fabricante);
    localStorage.setItem("valor", valor);
    localStorage.setItem("ano", ano);

    alert("Dados salvos com sucesso!");
}

function mostrar() {

    // Buscar do localStorage
    let modelo = localStorage.getItem("modCar");
    let fabricante = localStorage.getItem("fabCar");
    let valor = localStorage.getItem("valor");
    let ano = localStorage.getItem("ano");

    // Selecionar a div
    let mostrador = document.getElementById("mostrador");

    // Mostrar na tela
    mostrador.innerHTML = `
        <br><br> <br><br> 
        <table border="1" cellpadding="8">
            <tr>
                <th>Modelo</th>
                <th>Fabricante</th>
                <th>Valor</th>
                <th>Ano</th>
            </tr>
            <tr>
                <td>${modelo}</td>
                <td>${fabricante}</td>
                <td>${valor}</td>
                <td>${ano}</td>
            </tr>
        </table>
    `;
}






