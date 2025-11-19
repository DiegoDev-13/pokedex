import { create } from "zustand";

export const usePokemonStore = create((set, get) => ({
    pokemons:[],
    fethPokemons:async () => {
        const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
        const res = await fetch(endpoint)
        const data = await res.json()

        set({pokemons: data})
    }
}))