// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const server = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

  let index = 0;
  let anterior = document.querySelector('#galeria #anterior');
  let proximo = document.querySelector('#galeria #proximo');

  proximo.addEventListener('click', function(){
    let imagem = document.querySelector('#galeria img');
    index = index === todasAsImagens.length - 1 ? 0 : index + 1;
    imagem.src = server + todasAsImagens[index];

    console.log('index: ' + index + ' | imagem: ' + imagem.src);
  });

  anterior.addEventListener('click', function(){
    let imagem = document.querySelector('#galeria img');

    index = index === 0 ? todasAsImagens.length - 1 : index - 1;
    imagem.src = server + todasAsImagens[index];

    console.log('index: ' + index + ' | imagem: ' + imagem.src);
  });
