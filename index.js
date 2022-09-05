
function TRESCUOTAS(numeroUno) {
    let resultado1 = numeroUno / 3;
    return resultado1;
  }
  
  function SEISCUOTAS(numeroUno) {
    let igualResta = numeroUno / 6;
    return igualResta;
  }
  
  function NUEVECUOTAS(numeroUno) {
    let resultado = numeroUno / 9;
    return resultado;
  }
  
  function DOCECUOTAS(numeroUno) {
    let resultado = numeroUno / 12;
    return resultado;
  }
  
function resultadoTresCuotas(resultado1) {
    alert("quedaria un total en 3 cuotas de" + " " + resultado1+ " " + "pesos cada cuota");
  }
  function resultadoSeisCuotas(resultado2) {
    alert("quedaria un total en 6 cuotas de" + " " + resultado2+ " " + "pesos cada cuota");
  }
  function resultadoNueveCuotas(resultado3) {
    alert("quedaria un total en 9 cuotas de" + " " + resultado3+ " " + "pesos cada cuota");
  }
  function resultadoDoceCuotas(resultado4) {
    alert("quedaria un total en 12 cuotas de" + " " + resultado4+ " " + "pesos cada cuota");
  }

function menuPrincipal() {
    let calcularCuotas = prompt(
      "Cuantas cuotas queres hacer? \n1.tres cuotas\n2.seis cuotas\n3.nueve cuotas \no \n4.doce cuotas \n(FIN para finalizar)"
    );
    return calcularCuotas;
  }


  function sacarCuotas() {
    let accionElegida = menuPrincipal();
    while (accionElegida !== "FIN") {
      if (accionElegida !== "") {
        accionElegida = parseInt(accionElegida);
  
        if ((accionElegida) !=="") {
          let num1 = parseFloat(prompt("Ingresa precio final para calcular cuotas"));
          switch (accionElegida) {
            case 1:
              let resultado1 = TRESCUOTAS(num1,);
              resultadoTresCuotas(resultado1);
              break;
            case 2:
              let resultado2 = SEISCUOTAS(num1,);
              resultadoSeisCuotas(resultado2);
              break;
  
            case 3:
                let resultado3 =NUEVECUOTAS (num1,);
                resultadoNueveCuotas(resultado3);
                break;
            case 4:
              let resultado4 = DOCECUOTAS(num1,);
              resultadoDoceCuotas(resultado4);
              break;
            default:
              alert("Opcion Incorrecta");
              break;
          }
        }
      } else {
        alert("Seleccione la opción");
      }
      accionElegida = menuPrincipal();
    }
  }
  
  sacarCuotas();