function setBorda(){
	var input1 = document.getElementById("input1").value;
	var input2 = document.getElementById("input2").value;
	var input3 = document.getElementById("input3").value;
	var input4 = document.getElementById("input4").value;
	var quadrado = document.getElementById("quadrado");

	quadrado.style.borderTopLeftRadius=input1+"px";
	quadrado.style.borderTopRightRadius=input2+"px";
	quadrado.style.borderBottomLeftRadius=input3+"px";
	quadrado.style.borderBottomRightRadius=input4+"px";

	if(input1=="0" || input1==""){
		quadrado.style.borderTopLeftRadius="0";
	}
	if(input2=="0" || input2==""){
		quadrado.style.borderTopRightRadius="0";
	}
	if(input3=="0" || input3==""){
		quadrado.style.borderBottomLeftRadius="0";
	}
	if(input4=="0" || input4==""){
		quadrado.style.borderBottomRightRadius="0";
	}
}

//Definir pattern e fazer com que quando eu trocar o numero num deles, todos trocam