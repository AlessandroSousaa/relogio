setInterval(() => {
		d = new Date(); //objeto instância de date()
		hr = d.getHours();
		min = d.getMinutes();
		seg = d.getSeconds();
		hr_rotacao = 30 * hr + min / 2; //convertendo o tempo atual
		min_rotacao = 6 * min;
		seg_rotacao = 6 * seg;

		hora.style.transform = `rotate(${hr_rotacao}deg)`; // deg = degrees = graus 
		minuto.style.transform = `rotate(${min_rotacao}deg)`;
		segundo.style.transform = `rotate(${seg_rotacao}deg)`;
	},
	1000
);

//
// 
// setInterval(): 
// Chama uma função em intervalos especificados (em milissegundos).
// método setInterval() continua chamando a função até que clearInterval() 
// seja chamado ou a janela seja fechada.


// OBS: 1 segundo = 1000 milissegundos.
//
// rotate(): 
// A função de transformação rotate() pode ser usada como o valor para girar o elemento. 
// Leva um parâmetro que define o ângulo de rotação. O ângulo de rotação consiste em duas 
// partes, o valor da rotação seguido pela unidade de rotação. A unidade pode ser definida 
// em graus (deg), gradiente (grad), radianos (rad) e voltas.
//