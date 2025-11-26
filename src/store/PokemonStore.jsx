import { create } from "zustand";

export const usePokemonStore = create((set, get) => ({
    pokemons:[],
    fethPokemons:async ({pageParam = 0}) => {
        const {fetchPokemonDetails} = get()
        const limit = 10
        const offset = pageParam * limit

        const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const res = await fetch(endpoint)
        const data = await res.json()
        const pokemonsDetailsPromise = data.results.map(async (pokemon) => {
            const details = await fetchPokemonDetails(pokemon.url)
            return {
                ...pokemon, ...details
            }
        })

        const detailsPokemons = await Promise.all(pokemonsDetailsPromise)

        set({pokemons: detailsPokemons})
        return detailsPokemons
    },
    fetchPokemonDetails: async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        const {typesColor} = get()
        let numeros3Decimales = data.id
        if(numeros3Decimales < 10) {
            numeros3Decimales = "#00" + numeros3Decimales
        }
        if(numeros3Decimales < 100) {
            numeros3Decimales = "#0" + numeros3Decimales
        }

        return {
            color: typesColor[data.types[0].type.name],
            type: data.types[0].type.name,
            image: data.sprites.other.dream_world.front_default,
            id: numeros3Decimales,
            animation: data.sprites?.versions?.["generation-v"]?.["black-white"]?.animated?.front_default
        }
    },
    typesColor: {
        grass: "#78C850",
        fire: "#F08030",
        water: "#6890F0",
        bug: "#A8B820",
        normal: "#A8A878",
        poison: "#A040A0",
        electric: "#F8D030",
        ground: "#E0C068",
        fairy: "#EE99AC",
        fighting: "#C03028",
        psychic: "#F85888",
        rock: "#B8A038",
        ghost: "#705898",
        ice: "#98D8D8",
        dragon: "#7038F8",
        dark: "#705848",
        steel: "#B8B8D0",
        flying: "#A890F0"
    },
    buscador:"",
    setBuscador: (p) => set({buscador:p}),
    pokemonBuscado: [],
    buscarPokemon: async (buscador) => {
        const {fetchPokemonDetails} = get()
        const endpoint = `https://pokeapi.co/api/v2/pokemon/${buscador.toLowerCase()}`
        try {
            const res = await fetch(endpoint)
            if(!res.ok) {
                throw new Error('Pokemon no encontrado')
            }
            const data = await res.json()
            const details = await fetchPokemonDetails(endpoint)
            set({pokemonBuscado: {...data, ...details}})
            return {...data, ...details};
        } catch (error) {
            set({pokemonBuscado:null})
        }
    }
}))