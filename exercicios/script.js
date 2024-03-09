var numberOne = prompt("Insira o primeiro numero: ");
var numberTwo = prompt("Insira o segundo numero: ");


//A soma dos dois números;
function sum(numberOne, numberTwo){
  alert("A soma dos dois numeros é : " + (Number(numberOne) + Number(numberTwo)) )
}

//A subtração dos dois números;
function subtraction(numberOne, numberTwo){
  alert("A substração dos dois numeros é : " + (Number(numberOne) - Number(numberTwo)) )
}

//A multiplicação dos dois números;
function multiplication(numberOne, numberTwo){
  alert("A multiplicação dos dois numeros é : " + (Number(numberOne) * Number(numberTwo)) )
}

// A divisão dos dois números;
function division(numberOne, numberTwo){
  alert("A divisão dos dois numeros é : " + ((Number(numberOne) / Number(numberTwo)).toFixed(2)) )
}

//O resto da divisão dos dois números;
function RestDivision(numberOne, numberTwo){
  alert("O resto da divisão dos dois numeros é : " + (Number(numberOne) % Number(numberTwo)) )
}

//Verifique se a soma dos dois números é par (ou ímpar);
function sumPar(numberOne, numberTwo){
  var sum = numberOne + numberTwo;
  if(sum % 2 === 0){
    alert("A soma dos dois numeros são par 👏")
  }
  else{
    alert("A soma dos dois numeros são impar 👏")
  }
}
//Verifique se os dois números inseridos são iguais
function verify(numberOne, numberTwo){
  if(numberOne === numberTwo){
    alert("Os numeros são iguais")
  }
  else{
    alert("Os numeros são diferentes")
  }
}

sum(numberOne, numberTwo)
subtraction(numberOne, numberTwo)
multiplication(numberOne, numberTwo)
division(numberOne, numberTwo)
RestDivision(numberOne, numberTwo)
sumPar(numberOne, numberTwo)
verify(numberOne, numberTwo)