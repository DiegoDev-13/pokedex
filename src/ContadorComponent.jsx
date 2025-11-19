import { useContadorstore } from "./store/ContadorStore"

export const ContadorComponent = () => {
    const {count} = useContadorstore()

  return (
    <div className="">
        Hola mundo con zustand {count}
    </div>
  )
}