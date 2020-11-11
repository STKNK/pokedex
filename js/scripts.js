// create a new pokemonRepository variable
var pokemonRepository = (function () {
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

  //returns an array of Pokemon
  function getAll(){
    return pokemonList;
  }

  //add a single item to the pokemonList array
  function add(item){
    pokemonList.push(item);
  }

  //return all functions
  return {
    getAll: getAll,
    add: add
  };
})();

var pokemonList = pokemonRepository.getAll();

//simplified the forEach function
pokemonList.forEach(pokemon => {
  document.write('Name : ' + pokemon.creatureName + '<br>');
  document.write('Height : ' + pokemon.creatureHeight + '<br>');
  document.write('Weight : ' + pokemon.creatureWeight + '<br>');
  document.write('Types : ' + pokemon.creatureTypes + '<br>');
  document.write('Abilities : ' + pokemon.creatureAbilities + '<br>');
  document.write('<br>');
});
