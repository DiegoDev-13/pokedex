import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useContadorstore = create(
    persist(
        (set, get) => ({
            count: 0,
            listaNumeros:[],
            setCount: (p) => {
                set((state)=> {
                    const newCount = state.count + p.numero
                    return {
                        count:newCount,
                        listaNumeros:[...state.listaNumeros, newCount]
                    }
                })
            },
            eliminarItem: (index) => {
                set((state) => {
                    const newList = state.listaNumeros.filter((item, i) => i !== index)
                    return {
                        listaNumeros:newList
                    }
                })
            },
            resetear: () => {
                set(() => ({
                    count:0,
                    listaNumeros: [],
                }))
            }
        }),
        {
            name: 'contador-storage',
            getStorege: () => localStorage,
        }
    )
)