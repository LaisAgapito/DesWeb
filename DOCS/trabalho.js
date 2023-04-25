function sorteador2() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    num1 = Math.ceil(num1);
    num2 = Math.floor(num2);
    document.getElementById("sorteio2").innerHTML = Math.floor(Math.random() * (num2 - num1 + 1 )  + num1);
}
function calcMedia(){
    let nota1 = parseInt(document.getElementById('num1').value);
    let nota2 = parseInt(document.getElementById('num2').value);
    let nota3 = parseInt(document.getElementById('num3').value);
    let nota4 = parseInt(document.getElementById('num4').value);
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    if(media >= 6.0){
        document.getElementById('result').innerHTML = "Aprovado!!";
        document.getElementById('estilo').style.backgroundColor = 'green';
    }else if(media < 2.0){
        document.getElementById('result').innerHTML = "Reprovado.";
        document.getElementById('estilo').style.backgroundColor = 'red';
    }else if(media > 2.0 && media < 6.0){
        document.getElementById('result').innerHTML = "Em recuperação";
        document.getElementById('estilo').style.backgroundColor = 'yellow';
    }

    document.getElementById('media').innerHTML = `A média do aluno é: ${media}`;
}