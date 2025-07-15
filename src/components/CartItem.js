import { Button } from "../components";

export const CartItem = ({name, img, price}) => {
  return (
    <div className="border border-slate-200 p-4 rounded-md flex gap-4 justify-between items-center">
        <img src={img} alt={name} className="max-w-60" />
        <p className="text-xl">{name}</p>
        <p className="font-bold">${price}</p>
        <Button bg="bg-red-800" hover="hover:bg-red-900">Remove</Button>
    </div>
  )
}
