import { Button } from "../components";

export const Card = ({img, name, price}) => {
  return (
    <div className="flex flex-col gap-4 border border-slate-200 rounded-md p-4">
        <img src={img} alt={name} className="max-w-md" />
        <p className="text-xl">{name}</p>
        <div className="flex justify-between items-center">
            <p className="font-bold">${price}</p>
            <Button>Add To Cart</Button>
        </div>
    </div>
  )
}
