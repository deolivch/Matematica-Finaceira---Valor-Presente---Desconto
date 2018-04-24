function calcularForm(){
	/*INICIALIZA AS VARIAVEIS*/
	var contInicio = 0;
	var contFim = 0;
	
	//====================
	var dataInicial ="";
	var diaInicial = "";
	var diaFinal = "";
	var mesInicial = "";
	var mesFinal = "";
	var anoInicial = "";
	var anoFinal = "";
	var dataFinal = "";
	var diasCorridos = "";
	//=====================
	
	var valFuturo = "";
	var txJuros = "";
	var valPresente = "";
	var periodo = "";
	var taxaPeriodo = "";
	var vetorInicio = new Array(10);
	var vetorFim =  new Array(10);
	
	/*GUARDA VALOR DO BOTÃO*/
	dataInicial = document.getElementById("dtInicial").value;
	dataFinal = document.getElementById("dtFinal").value;
	valFuturo = document.getElementById("valFuturo").value;
	txJuros =  document.getElementById("txJuros").value;
	
	/*CONTA A QUANTIDADE DE CARACTERES EXISTENTES NA STRING*/
	contFim = dataInicial.length - 1
	
	/*GUARDA CADA CARACTER NA VARIAVEL VETOR*/
	while(contFim >= 0){
		//PEGAR O CARACTER A GUARDA
		vetorInicio[contInicio++] = dataInicial.charAt(contFim--);
	}
	
	contInicio = 0 /*REINICIALIZA CONTINICIO*/
	contFim = dataFinal.length - 1 /*CONTA A QUANTIDADE DE CARACTERES EXISTENTES NA STRING*/
	
	/*GUARDA CADA CARACTER NA VARIAVEL VETOR*/
	while(contFim >= 0){
		//PEGAR O CARACTER A GUARDA
		vetorFim[contInicio++] = dataFinal.charAt(contFim--);
	}
	
	/*DATA INICIAL*/
	diaInicial = vetorInicio[1] + vetorInicio[0];
	mesInicial = vetorInicio[4] + vetorInicio[3];
	anoInicial = vetorInicio[9] + vetorInicio[8] + vetorInicio[7] + vetorInicio[6];
	
	/*DATA FINAL*/
	diaFinal = vetorFim[1] + vetorFim[0];
	mesFinal = vetorFim[4] + vetorFim[3];
	anoFinal = vetorFim[9] + vetorFim[8] + vetorFim[7] + vetorFim[6];
	
	/*PARA CALCULO O ANO DEVE TER 360 DIAS - TODA A VIRADA DE MÊS DEVE SER IGUAL A 30 DIAS MESMO OS QUE TEM MAIS E OS QUE TEM MENOS*/
	diasCorridos = ((anoFinal - anoInicial) * 360) + ((mesFinal - mesInicial) * 30)   + (parseInt(diaFinal) - parseInt(diaInicial))
	
	/*PERIADO EQUIVALE AO: (TOTAL DE DIAS PARA O VENCIMENTO) / POR 30 DIAS. */
	periodo = parseFloat(parseInt(diasCorridos) / 30);
	
	/*DESCOBRIR A TAXA DO PERIDO PARA APLICAR SOBRE O VALOR FUTURO E DESCOBRIR O VALOR PRESENTE*/
	taxaPeriodo =  Math.pow((1 + parseFloat(parseFloat(txJuros)/100)), parseFloat(periodo));
	
	/*CALCULO DO VALOR PRESENTE*/
	valPresente = parseFloat( parseFloat(valFuturo) / parseFloat(taxaPeriodo) );
	
	/*ENVIAR RESULTADO*/
	document.getElementById("resultado").value = valPresente.toFixed(2);
}