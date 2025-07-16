import { CartItem } from "../components";
import { useFetch, useTitle } from "../hooks";

export const Cart = () => {
  useTitle('Your Cart');
  const carts = [
        {
            "id" : 10001,
            "name" : "Sonic Gear - bla-007 wireless headphone",
            "price" : 149,
            "img" : "images/item-01.jpg"
        },
        {
            "id" : 10002,
            "name" : "Beats - bs-1000 wireless headphone",
            "price" : 139,
            "img" : "images/item-02.jpg"
        }
    ]  

  return (
    <main>
      <section>
        <h1 className="text-2xl text-center font-bold my-4">Cart items: {carts.length}</h1>
        <div className="max-w-7xl mx-auto p-4 flex flex-col gap-4">
          {carts.map(cart => (
            <CartItem key={cart.id} name={cart.name} img={cart.img} price={cart.price} />
          ))}
        </div>
      </section>
    </main>
  )
}
