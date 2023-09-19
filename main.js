const listPoke = document.querySelector('#listPoke');
const buttonsHeader = document.querySelector('.btn-header')
let URL = 'https://pokeapi.co/api/v2/pokemon/';

for (let i = 1; 1<=151; i++ ){
   fetch(URL+i)
   .then((response)=>response.json())
   .then((data)=>showpokemon(data))
}
function showpokemon(pokes){

   let types = pokes.types.map(type=>`<p class="${type.type.name} type">${type.type.name}</p>`)
   types = types.join('')

   let pokeId = poke.id.toString()
   if (pokeId.length === 1){
      pokeId = '00' + pokeId;
   } else if (pokeId === 2){
      pokeId = '0'+pokeId
   }
   

   const div = document.createElement('div')
   div.classList.add('pokemon')
   div.innerHTML = `
   <div class="poke">
<p class="pokemon-id-back">#${pokes.id}</p>
<div class="poke-img">
   <img src="${pokes.sprites.other['official-artwork'].front_default}" alt="${pokes.name}">
</div>
<div class="poke-info">
   <div class="name-cont">
      <p class="poke-id">#${pokes.id}</p>
      <h2 class="poke-name">${pokes.name}</h2>
   </div>
   <div class="poke-type">
      ${types}
   </div>
   <div class="poke-stats">
      <p class="stats">${pokes.height}kg</p>
      <p class="stats">${pokes.weight}m</p>
   </div>
</div>
</div> 
   `;
   listPoke.append(div)
}
buttonsHeader.forEach(button => { button.addEventListener('click', event => {
   const buttonId = event.currentTarget.id;
   listPoke.innerHTML = '';
   for (let i = 1; 1<=151; i++ ){
      fetch(URL+i)
      .then((response)=>response.json())
      .then((data)=>{
         if(buttonId === 'all'){
            showpokemon(data)
         }else{
         const typesSep = data.types.map(type => type.type.name)
         if(typesSep.some(type => type.includes(botonId))){
            showpokemon(data)
         }}
      })
   }
})
   
});