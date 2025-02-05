function geradorDeNumero() {
    const min = Math.floor(document.querySelector(".numero-mini").value);
    const max = Math.ceil(document.querySelector(".numero-maxi").value);
    

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(result)
}