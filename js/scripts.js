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

  //create a function
  function addListItem(pokemon){
    //create a variable
    var pokemonList = document.querySelector('.pokemon-list');
    //create an li element
    var listPokemon = document.createElement('li');
    //create a button element
    var button = document.createElement('button');
    //add an event listener to the button
    button.addEventListener('click', function () {
      showDetails (pokemon);
    });
    //set innerText to be the Pokemon's name
    button.innerText = pokemon.creatureName;
    //add a class to the button
    button.classList.add('pokemonList-button');
    //append the Button
    listPokemon.appendChild(button);
    //append the list item to the unordered list
    pokemonList.appendChild(listPokemon);
  }

  //create a function
  function showDetails(pokemon){
    console.log(pokemon);
  }

  //return all functions
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };

})();

//added an item to the repository
pokemonRepository.add({
  creatureName : 'Pidgey',
  creatureHeight : 0.3,
  creatureWeight : 1.8,
  creatureTypes : ['flying', 'normal'],
  cratureAbilities : ['keen-eye', 'Tangled-feet', 'big-pecks']
});

var pokemonList = pokemonRepository.getAll();

console.log(pokemonRepository.getAll());

//forEach function
pokemonList.forEach(pokemon => {
  pokemonRepository.addListItem(pokemon);
});
