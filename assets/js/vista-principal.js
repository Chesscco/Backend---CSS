function Buscador() {
    const input = document.getElementById("InputBusc");
    const valor = input.value;

    const resultBs = document.getElementById("ResultBusc");
    resultBs.innerText = "No encontramos el contenido, pero trabajamos para poder obtener  " + valor;

}