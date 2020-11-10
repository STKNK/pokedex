var pokemonList = [
  {
    creatureName : 'bulbasaur',
    creatureHeight : 0.7,
    creatureWeight : 6.9,
    creatureTypes : ['grass', 'poison'],
    cratureAbilities : ['chlorophyll', 'overgrow'],
  },
  {
    creatureName : 'charmander',
    creatureHeight : 0.6,
    creatureWeight : 8.5,
    creatureTypes : ['fire'],
    cratureAbilities : ['blaze', 'solar-power'],
  },
  {
    creatureName : 'squirtle',
    creatureHeight : 0.5,
    creatureWeight : 9,
    creatureTypes : ['water'],
    cratureAbilities : ['rain-dish', 'torrent'],
  },
  {
    creatureName : 'caterpie',
    creatureHeight : 0.3,
    creatureWeight : 2.9,
    creatureTypes : ['bug'],
    cratureAbilities : ['shield-dust', 'run-away'],
  },
  {
    creatureName : 'weedle',
    creatureHeight : 0.3,
    creatureWeight : 3.2,
    creatureTypes : ['bug', 'poison'],
    cratureAbilities : ['shield-dust', 'run-away'],
  }
];

/*
for (var i = 0; i < pokemonList.length; i++) {
  document.write('<p>' + pokemonList[i].creatureName + ' (' + 'height: ' + pokemonList[i].creatureHeight + ')' + '</p>')
  if (pokemonList[i].creatureHeight >= 0.7) {
    document.write( '- Wow, that\'s big!')
  }
}

Object.keys(pokemonList).forEach(function (property) {
  document.write('Name : ' + pokemonList[property].creatureName + '<br>');
  document.write('Height : ' + pokemonList[property].creatureHeight + '<br>');
  document.write('Weight : ' + pokemonList[property].creatureWeight + '<br>');
  document.write('Types : ' + pokemonList[property].creatureTypes + '<br>');
  document.write('Abilities : ' + pokemonList[property].creatureAbilities + '<br>');
  document.write('<br>');
});　
*/

pokemonList.forEach(pokemon => {
  document.write('Name : ' + pokemon.creatureName + '<br>');
  document.write('Height : ' + pokemon.creatureHeight + '<br>');
  document.write('Weight : ' + pokemon.creatureWeight + '<br>');
  document.write('Types : ' + pokemon.creatureTypes + '<br>');
  document.write('Abilities : ' + pokemon.creatureAbilities + '<br>');
  document.write('<br>');
});
