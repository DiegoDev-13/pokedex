import { create } from "zustand";

export const usePokemonStore = create((set, get) => ({
    pokemons:[],
    fethPokemons:async () => {
        const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
        const res = await fetch(endpoint)
        const data = await res.json()

        set({pokemons: data})
        return data
    },
    buscador:"",
    setBuscador: (p) => set({buscador:p}),
    pokemonBuscado: [],
    buscarPokemon: async (buscador) => {
        const endpoint = `https://pokeapi.co/api/v2/pokemon/${buscador.toLowerCase()}`
        try {
            const res = await fetch(endpoint)
            if(!res.ok) {
                throw new Error('Pokemon no encontrado')
            }
            const data = await res.json()
            set({pokemonBuscado: data})
            return data;
        } catch (error) {
            set({pokemonBuscado:null})
        }
    }
}))