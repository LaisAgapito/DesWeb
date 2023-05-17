function sorteador2() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    num1 = Math.ceil(num1);
    num2 = Math.floor(num2);
    document.getElementById("sorteio").innerHTML = Math.floor(Math.random() * (num2 - num1 + 1 )  + num1);
}