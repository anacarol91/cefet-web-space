
let botoes = document.querySelectorAll('#aliens .botao-expandir-retrair');	

for(let b of botoes) {
	console.log(b);
	let paragrafo = b.parentNode;

	b.addEventListener('click', function() {

		if(paragrafo.classList.contains('expandido')) {
			paragrafo.classList.remove('expandido');
			b.innerHTML = '+';
		} else {
			paragrafo.classList.add('expandido');
			b.innerHTML = '-';
		}
	});
}


