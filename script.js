const voltar =document.getElementById("voltar")
const avancar =document.getElementById("avancar")
const imagem= document. getElementById("pokemon")

let numerodopokemon =1;

function carregarpokemon(numero){
   fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
   .then(resposta=> resposta.json())
   .then(dados=>{
      imagem.src=dados.sprites.front_default;
   })
}

//botão avancar
avancar. addEventListener("click", ()=>{
   numerodopokemon ++;
   carregarpokemon(numerodopokemon);
})
   
//botao.voltar
voltar.addEventListener("click", ()=>{
   if(numerodopokemon  <=1) {
       alert("informe um número maior que um")
   } else{
      numerodopokemon --;
        carregarpokemon(numerodopokemon);
   }
})  
   
//chamando a funcao carregarpokemon
carregarpokemon(numerodopokemon)