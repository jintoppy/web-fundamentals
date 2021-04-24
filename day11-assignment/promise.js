// Javascript Object Notation
const fetchPokemon = async () => {
    const response = await fetch('https://api.github.com/users');
    const pokemons = await response.json();
    console.log(pokemons);
};


// const promise = fetch('https://pokeapi.co/api/v2/pokemon');

// promise.then((response) => {
//     console.log(response);
//     console.log('completed successfully');
// },
//     () => {
//         console.log('failed');
//     });

fetchPokemon();