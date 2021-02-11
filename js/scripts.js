// create a new pokemonRepository variable
var pokemonRepository = (function () {
  //pokemonList array is empty
  var pokemonList = [];
  //URL of the API
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  //returns pokemonList array
  function getAll() {
    return pokemonList;
  }

  //adds the pokemon object to the pokemonList array
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  //fetch data from the API, then uses it to populate the pokemonList array
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }

  //create a button for the pokemon object and appends this button to the button list
  function addListItem(pokemon){
    //create a variable
    var buttonsList = document.querySelector('.pokemon-list');
    //create an li element
    var listItem = document.createElement('li');
    //create a button element
    var button = document.createElement('button');
    //set innerText to be the Pokemon's name
    button.innerText = pokemon.name;
    //add an event listener to the button
    button.addEventListener('click', function () {
      showDetails (pokemon);
    });

    //add a class to the button
    button.classList.add('pokemon-button');
    //append the Button
    listItem.appendChild(button);
    //append the list item to the unordered list
    buttonsList.appendChild(listItem);
  }

  //fetches additional details using the detailsUrl of the pokemon object (referred to as item) then adds them to it
  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  //show a modal with the pokemon's name, height, weight, type and image
  function showDetails(pokemon){
    loadDetails(pokemon).then(function () {

      //create Modal
      var modalContainer = document.querySelector('#modal-container');

      modalContainer.innerHTML = '';

      var modalHTML = '<button class="modal-close">Close</button>'+
      '<h2>'+pokemon.name+'</h2>'+
      '<img src="'+pokemon.imageUrl+'">'+
      '<h3>Height</h3>'+
      '<p>'+pokemon.height+'cm</p>'+
      '<h3>Weight</h3>'+
      '<p>'+pokemon.weight+'g</p>'+
      '<h3>Type</h3>';

      var pokemonTypes = pokemon.types;

      pokemonTypes.forEach(function(pokemonType) {
        modalHTML = modalHTML +
          '<p>'+pokemonType.type.name+'</p>';
      });

      var modal = document.createElement('div');
      modal.classList.add('modal');
      modal.innerHTML = modalHTML;
      modalContainer.appendChild(modal);
      modalContainer.classList.add('is-visible');

      var modalCloseButton = document.querySelector('.modal-close');
      modalCloseButton.addEventListener('click', (e) => {
        var target = e.target;
        if (target === modalCloseButton) {
          hideModal();
        }
      });
    });
  }

  //close the modal
  function hideModal() {
    var modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  // ESC-key scenario
  window.addEventListener('keydown', (e) => {
    var modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  var modalContainer = document.querySelector('#modal-container');
  modalContainer.addEventListener('click', (e) => {
    var target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  //return all functions
  return {
    getAll: getAll,
    add: add,
    loadList: loadList,
    addListItem: addListItem,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
