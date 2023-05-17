
function tabuada(){
    let x = document.getElementById('num').value;
    let divisoria = document.getElementById("result");
    divisoria.innerHTML = `<p>A tabuada escolhida é ${x}<p>`
    for(let i = 0; i <= 10; i++){
      let resultado =  x * i;
      const node = document.createElement("p");
      const text = document.createTextNode(`${x} x ${i} = ${resultado}`);
      node.appendChild(text);
      divisoria.appendChild(node);
     
    }

}
let cont = 0;
function contador(){
   
    cont++;
    document.getElementById("retorno").innerHTML = cont;

}

function sorteador() {
    document.getElementById("sorteio").innerHTML = Math.floor(Math.random() * 200);
}

function sorteador2() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    num1 = Math.ceil(num1);
    num2 = Math.floor(num2);
    document.getElementById("sorteio2").innerHTML = Math.floor(Math.random() * (num2 - num1 + 1 )  + num1);
}
