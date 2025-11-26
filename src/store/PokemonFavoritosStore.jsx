import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const usePokemonFavoritos = create(
    persist(
        (set, get) => ({
            favorites: [],
            favoriteCount: 0,
            addFavorite: (pokemon) => set((state) => ({
                favorites: [...state.favorites, pokemon],
                favoriteCount: state.favoriteCount + 1
            })),
            removeFavorite: (id) => set((state) => ({
                favorites: state.favorites.filter(item => item.id !== id),
                favoriteCount: state.favoriteCount - 1,
            })),
            clearFavorites: () => set(() => ({
                favorites:[],
                favoriteCount: 0,
            }))
        }),
        {
            name: "Pokemon favoritos",
            storage: createJSONStorage(() => localStorage)
        }
    )
)